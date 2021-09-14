---
id: phases
title: Flight Phases
---


## Flight Phases

ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights.

### 1. Boarding

- You must be on the ground to be able to start a flight. The parking brake should also be on

#### Notes:

- The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it's recorded as "Unknown"

### 2. Pushback

- Once the parking brakes are released
- And engine(s) are not running
- And the ground speed is below 5 knots

#### Notes:

- The "Blocks Off" time is recorded

### 3. Taxi Out

- Engine(s) running
- Parking brakes are released 
- And the ground speed is above 0

#### Notes:

- The "Blocks Off" time is recorded (if no Pushback is done)
- The "Taxi Out" timer is started

### 4. Takeoff

- If you're detected to be on a runway, and your ground speed is over 30
- If you haven't been detected on a runway, your ground speed is over 80 (rolling)
- You're no longer on the ground

### 5. Enroute

- You're 35' AGL or above (to attempt to catch the earlier point)
- Gear are up (if they are retractable)

### 6. Approach

- If you're at the TOD
    - If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used
    - Otherwise, the TOD is calculated using [this method](https://www.flyingmag.com/technique/tip-week/calculating-top-descent/) (`TOD = (Plane Alt - Field Alt) / 3`)
- If you went above 10k' and are now below it

### 7. Final

- Below 3000' AGL
- Gear are down (if they are retractable)
- Flaps are down

### 8. Landing

- You're on the ground

#### Notes:

- The "End Flight" button shows up when the engine(s) are off and parking brake is set

### 9. Taxi In

- You're off of the runway and your ground speed is < 30

#### Notes:

- The "End Flight" button shows up when the engine(s) are off and parking brake is set

### 10. Arrived

- Parking brake is set
- Engine(s) off
- The "End Flight" button must be clicked to set the flight to arrived
- Once "End Flight" is clicked, a button to file the PIREP will be shown

#### Notes:

- The "End Flight" button shows up
- The parking/gate you're at will be attempted to be figured out
