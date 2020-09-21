---
id: flight
title: Flight Details
---

## Setting up your flight

There are several ways to configure flight:

1. Enter everything manually
2. Load a flight from the flight search
3. Load a flight plan and enter the flight number

---

## Flight Phases

ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights.

### 1. Boarding

- You must be on the ground to be able to start a flight. The parking brake should also be on

#### Notes:

- The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it's recorded as "Unknown"

### 2. Taxi Out

- Once the parking brakes are released -or- 
- The ground speed is above 0

#### Notes:

- The "Blocks Off" time is recorded
- The "Taxi Out" timer is started

### 3. Takeoff

- If you're detected to be on a runway, and your ground speed is over 30
- If you haven't been detected on a runway, your ground speed is over 80 (rolling)
- You're no longer on the ground

### 4. Enroute

- You're 35' AGL or above (to attempt to catch the earlier point)
- Gear are up (if they are retractable)

### 5. Approach

- If you're at the TOD
    - If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used
    - Otherwise, the TOD is calculated using [this method](https://www.flyingmag.com/technique/tip-week/calculating-top-descent/) (`TOD = (Plane Alt - Field Alt) / 3`)
- If you went above 10k' and are now below it

### 6. Final

- Below 3000' AGL
- Gear are down (if they are retractable)
- Flaps are down

### 7. Landing

- You're on the ground

#### Notes:

- The "End Flight" button shows up

### 8. Taxi In

- You're off of the runway and your ground speed is < 30

#### Notes:

- The "End Flight" button shows up

### 9. Arrived

- The parking brakes are on

#### Notes:

- The "End Flight" button shows up
- The parking/gate you're at will be attempted to be figured out

---

## Lights and Aircraft Features

Lights and other features for aircraft may not work on all aircraft, due to the way developers differently implement the on/off switches/flags for these (for example, PMDG implements their lights differently for each aircraft). There is a `ConfigMap.xml` file that can be edited (make sure to create backups before updated - enhancements to this coming soon) which uses the aircraft name/title to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to detect those features.
