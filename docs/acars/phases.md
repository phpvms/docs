---
id: phases
title: Flight Phases
---

## Flight Phases

ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights.

### Boarding

- You must be on the ground to be able to start a flight. The parking brake should also be on

#### Notes

- The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it's recorded as "Unknown"

### Pushback

- Your aircraft has started moving, and is under 5kts
- If you started the flight with the brakes on and they are released

#### Notes

- The "Blocks Off" time is recorded
- For helicopters, this phase is recorded but is essentially bypassed once you leave the ground

### Taxi Out

- The ground speed is above 5

#### Notes

- The "Taxi Out" timer is started
- For helicopters, this phase is recorded but is essentially bypassed once you leave the ground

### Takeoff

- If you're detected to be on a runway, and your ground speed is over 40
- If you haven't been detected on a runway, your ground speed is over 80 (rolling)
- You're no longer on the ground


#### Notes

- For helicopters, this phase is recorded but is essentially bypassed once you leave the ground

### Enroute

- You're 500' AGL or above (to attempt to catch the earlier point) OR the gear are up (if they are retractable)
- More than 3 miles from the airport

### Approach

- If you're at the TOD
    - If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used
    - Otherwise, the TOD is calculated using [this method](https://www.flyingmag.com/technique/tip-week/calculating-top-descent/) (`TOD = (Plane Alt - Field Alt) / 3`)
- If you went above 10k' and are now below it

### Final

- Below 3000' AGL
- Gear are down (if they are retractable)
- Flaps are down

### Landing

- You're on the ground

#### Notes:

- The "End Flight" button shows up

### Taxi In

- You're off of the runway and your ground speed is < 30

#### Notes

- The "End Flight" button shows up

### Arrived

- The "End Flight" button must be clicked to set the flight to arrived
- Once "End Flight" is clicked, a button to file the PIREP will show

#### Notes

- The "End Flight" button shows up
- The parking/gate you're at will be attempted to be figured out
