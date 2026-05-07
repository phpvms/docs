---
id: deeper-dive
title: Deeper Dive
sidebar_label: Deeper Dive
---

# Deeper Dive

Per-entity reference. Each section covers what an entity is, the fields you'll
configure, and how it connects to other entities.

For the high-level overview of how these fit together, see
[Key Concepts](./basics.md). For tricky terminology, see the
[Glossary](./glossary.md).

## Airline

```mermaid
flowchart LR
    AL((Airline))
    AL --> SF[Subfleets]
    AL --> FL[Flights]
    AL --> US[Users<br/>pilots]
    style AL fill:#067ec1,stroke:#045887,color:#fff
```

Container for everything: flights, aircraft (via subfleets), and pilots. You
need at least one. Pilots pick an airline at registration, and most resources
scope to it.

Key fields: ICAO code (3 letters, e.g. `BAW`), IATA code (2 letters, e.g. `BA`),
name, callsign.

You can run multi-airline VAs — pilots register under one, and admins can
transfer them later.

## Airport

```mermaid
flowchart LR
    AP((Airport))
    AP -.optional base.-> SF[Subfleets]
    AP -.dpt / arr / alt.-> FL[Flights]
    AP -.home / current.-> US[Users]
    AP -.location.-> AC[Aircraft]
    style AP fill:#067ec1,stroke:#045887,color:#fff
```

Every airport in your network. Mark airports as **hubs** to make them selectable
as a pilot's home base.

- ICAO is the primary key (e.g. `EGLL`).
- `hub` is a boolean flag — non-hub airports are still usable as flight
  departure/arrival points; the flag only controls whether pilots can pick them
  at registration.
- Subfleets can optionally be based at a specific hub airport.

## Subfleet

```mermaid
flowchart LR
    AL[Airline] --> SF
    AP[Hub Airport<br/>optional] -.base.-> SF
    SF((Subfleet)) --> AC[Aircraft]
    SF -.allowed fares.-> FA[Fares]
    SF -.allowed ranks.-> RK[Ranks]
    SF -.required.-> TR[Type Ratings]
    SF -.referenced by.-> FL[Flights]
    style SF fill:#067ec1,stroke:#045887,color:#fff
```

The most important abstraction in phpvms. A subfleet is a **named group of
aircraft** that share fares, ranks, and (optionally) a base hub.

Think of it as how a real airline groups its fleet operationally — British
Airways' "767-336ER RR RB211 short-haul Y-class" is a subfleet, and so is
"777-200ER GE90 long-haul J/Y".

A subfleet defines:

- **Type** (an arbitrary code, e.g. `B763-LH-FJY`)
- **Name** (human label)
- **Airline** it belongs to
- **Hub airport** (optional — restricts where its aircraft are based)
- **Fuel type, cargo capacity** (operational defaults)
- **Allowed Fares** (M2M — you can override price/cost/capacity per subfleet
  without creating duplicate Fare records)
- **Allowed Ranks** (M2M — only pilots at these ranks can fly this subfleet,
  with per-rank ACARS and manual pay rates)
- **Required Type Ratings** (M2M — pilots need the rating to fly)

You can have as many subfleets as you want with as much overlap as you need.

## Aircraft

```mermaid
flowchart LR
    SF[Subfleet] --> AC
    AP[Airport<br/>current location] -.parked at.-> AC
    AC((Aircraft))
    AC -.flown in.-> PR[PIREPs]
    AC -.reserved by.-> BD[Bids]
    style AC fill:#067ec1,stroke:#045887,color:#fff
```

A specific airframe — a tail number, an ICAO type, and a current location. Every
aircraft belongs to **exactly one subfleet**, which is how it inherits fares,
allowed ranks, and required type ratings.

Key fields: registration (`G-CIVA`), ICAO (`B744`), name, status, condition,
current airport.

Aircraft track their own state: which airport they're parked at, hours flown,
condition (so you can model maintenance if you enable it).

## Fare

```mermaid
flowchart LR
    FA((Fare))
    FA -.attached to.-> SF[Subfleets<br/>defaults]
    FA -.overridden on.-> FL[Flights<br/>overrides]
    FA -.snapshot in.-> PF[PirepFare<br/>per PIREP]
    style FA fill:#067ec1,stroke:#045887,color:#fff
```

A passenger or cargo class — `Y` (Economy), `J` (Business), `F` (First), `C`
(Cargo), etc. A fare has:

- **Code** (e.g. `Y`)
- **Name** (e.g. `Economy`)
- **Type** — passenger or cargo
- **Capacity, Price, Cost** — defaults that subfleets can override

Fares are **shared across the system** but their economics get overridden when
attached to a subfleet, so you can have one global "Economy" fare and let each
subfleet set its own seat count and ticket price.

## Rank

```mermaid
flowchart LR
    RK((Rank))
    RK -.gates.-> SF[Subfleets]
    RK -.held by.-> US[Users]
    RK -->|defines| PAY[Pay rates<br/>acars_pay / manual_pay]
    style RK fill:#067ec1,stroke:#045887,color:#fff
```

A pilot's progression tier. Ranks unlock subfleets and can carry pay rates that
override the subfleet defaults.

Each rank has:

- **Hours required** to reach it
- **Allowed Subfleets** (M2M with `subfleet_rank` pivot — `acars_pay` and
  `manual_pay` columns let you set per-rank pay rates)
- **Auto-promote** flag (auto-advance pilots when they hit the hours)

## Flight

```mermaid
flowchart LR
    AL[Airline] --> FL
    AP[Airports<br/>dpt / arr / alt] -.routes.-> FL
    FL((Flight))
    FL -.allowed.-> SF[Subfleets]
    FL -.fare overrides.-> FA[Fares]
    FL -.bid on by.-> BD[Bids]
    FL -.flown via.-> PR[PIREPs]
    style FL fill:#067ec1,stroke:#045887,color:#fff
```

The schedule template — what we used to call a "schedule" pre-v7. A flight is a
route an airline offers; pilots bid on it and file PIREPs against it.

A flight has:

- **Airline + flight number** (and optional code/leg if numbers collide)
- **Departure / arrival / alternate airports**
- **Flight type** — IATA SSIM service code (most common: `J` scheduled
  passenger, `F` scheduled cargo, `C` charter passenger)
- **Allowed Subfleets** (M2M — pilots see only aircraft from subfleets they're
  rank-permitted on)
- **Per-flight Fare overrides** (M2M `flight_fare` — overrides the subfleet
  defaults for this specific route)
- **Active / visible** windows, day-of-week filters, distance, route string

### Flight types (IATA SSIM)

The most common, in **bold**:

| Code  | Meaning                                         |
| ----- | ----------------------------------------------- |
| **J** | **Scheduled passenger – normal service**        |
| **F** | **Scheduled cargo and/or mail**                 |
| **C** | **Charter – passenger only**                    |
| A     | Additional cargo/mail                           |
| E     | Special VIP flight (FAA/government)             |
| G     | Additional flights – passenger normal service   |
| H     | Charter – cargo and/or mail                     |
| I     | Ambulance                                       |
| K     | Training                                        |
| M     | Mail service                                    |
| O     | Charter requiring special handling              |
| P     | Positioning – non-revenue (ferry/delivery/demo) |
| T     | Technical test                                  |
| W     | Military                                        |
| X     | Technical stop                                  |

Flight numbers don't have to be globally unique — but if a duplicate is
detected, the create/edit fails unless you supply a route code or leg.

## PIREP

```mermaid
flowchart LR
    US[User] -->|files| PR
    FL[Flight<br/>optional] -.against.-> PR
    AC[Aircraft] -.in.-> PR
    AP[Airports] -.dpt / arr / alt.-> PR
    PR((PIREP))
    PR -->|posts| JR[Journal entries]
    PR -->|snapshots| PF[PirepFare]
    PR -.triggers.-> AW[Award checks]
    style PR fill:#067ec1,stroke:#045887,color:#fff
```

A **pilot report** — what a pilot files after flying. This is the core
transaction in phpvms: it triggers finances, hour tracking, rank progression,
and award checks.

A PIREP captures:

- The Flight it was flown against (optional — pilots can file free-form PIREPs
  without a Flight)
- Aircraft used, dpt/arr/alt airports
- Block time, flight time, fuel used, distance, route
- Fare counts (`PirepFare` rows snapshot how many of each class were carried)
- Live ACARS position rows if a tracker was used
- Journal transactions for revenue/fuel/pay/expenses

PIREPs go through a state machine: `pending` → `accepted` / `rejected` →
`cancelled`. Acceptance is what posts the financial entries to the airline's
journal.

## Bid

```mermaid
flowchart LR
    US[User] -->|reserves| BD
    FL[Flight] -.on.-> BD
    AC[Aircraft] -.with.-> BD
    BD((Bid))
    style BD fill:#067ec1,stroke:#045887,color:#fff
```

A reservation. A pilot **bids** on a `Flight + Aircraft` combination to lock it
for themselves before flying. Configurable: bids may be soft (advisory) or hard
(block other pilots).

## Award

```mermaid
flowchart LR
    AW((Award))
    AW -.qualifies via.-> CL[Award class<br/>app/Awards/ or custom]
    AW -.earned by.-> US[Users]
    PR[PIREP] -.triggers re-check.-> AW
    style AW fill:#067ec1,stroke:#045887,color:#fff
```

Pluggable achievement system. Each award references a class (`ref_model_type`)
that decides if a user qualifies — examples ship in `app/Awards/` and you can
add custom ones via modules. Earned awards appear on the pilot's profile.

## User

```mermaid
flowchart LR
    AL[Airline] --> US
    RK[Rank] -.holds.-> US
    AP[Airport<br/>home / current] -.based at.-> US
    US((User))
    US -->|reserves| BD[Bids]
    US -->|files| PR[PIREPs]
    US -.earns.-> AW[Awards]
    US -.holds.-> TR[Type Ratings]
    style US fill:#067ec1,stroke:#045887,color:#fff
```

A pilot. Belongs to an Airline, holds a Rank, has a home Airport (their hub),
and a current Airport (where they last flew to). Users also carry type ratings
(M2M) which gate access to subfleets that require specific ratings.
