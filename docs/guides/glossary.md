---
id: glossary
title: Glossary
sidebar_label: Glossary
---

# Glossary

Easily confused concepts in phpvms — clarified.

For the high-level overview, see [Key Concepts](./basics.md). For per-entity
field reference, see the [Deeper Dive](./deeper-dive.md).

## Aircraft vs Subfleet

A **subfleet** is a category; an **aircraft** is a specific tail number. You
can't assign an aircraft directly to a flight or rank — you assign the subfleet,
and any aircraft inside it inherits that relationship.

## Flight vs PIREP

A **flight** is the schedule template (BAW178 LHR → JFK). A **PIREP** is the
one-time report of a pilot actually flying it. One flight has many PIREPs over
time. PIREPs can also exist without a flight (free-form / non-scheduled).

## Hub vs Home Airport vs Current Airport

- **Hub** — an airport flagged `hub=true`, selectable at registration
- **Home Airport** — the user's permanent base (their chosen hub)
- **Current Airport** — where the user's last PIREP arrived; resets on each
  accepted PIREP

## Fare on Subfleet vs Fare on Flight

The fare exists once globally. The subfleet pivot (`subfleet_fare`) sets
defaults for any flight using that subfleet. The flight pivot (`flight_fare`)
overrides those defaults for one specific flight. Per-flight overrides win.

## Rank vs Role

**Rank** is a pilot progression tier (hours-based, gates subfleets). **Role** is
a staff permission (admin / mod / pilot — gates the admin panel). They're
independent.

## Type Rating

A separate qualification system. A subfleet can require one or more type
ratings; a user holds zero or more. If the subfleet requires ratings the user
doesn't have, they can't fly it — even if their rank would otherwise allow it.
