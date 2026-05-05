---
id: flying
title: Flying
sidebar_label: Flying
---

## Flight Planning

There are several ways to configure flight:

1. Enter everything manually
2. Load a flight from the flight search

### Entering everything manually

This is simple, just type in everything for your flight, referring to your VA
site.

### Flight Search or Bids

To load a flight from the search or bids, in the menu, select flight search. If
your VA has search enabled, you can click search. If you click on "Bids", it
will show your available bids.

If there is a SimBrief flight plan also loaded with the bid from the site, it
will show up as "Yes" in that column.

### Flight Plans

In order for the route map to show all of your waypoints, you need to load a
flight plan. vmsACARS does not have/contain any navigation information on its
own, it's all loaded from a loaded flight plan. The follow flight plan types are
supported:

1. FSX/P3D (`.pln`)
1. X-Plane (`.fms`)
1. MSFS (`.pln`)
1. Simbrief (`.xml`, exported from the SimBrief site or the SimBrief Downloader.
   There is a "phpVMS" flight plan type that's available)

The routes/navpoints are then loaded from the flight plan, along with the TOD
(from MSFS/Simbrief), and filed along with your PIREP.

---

## Lights and Aircraft Features

Lights and other features for aircraft may not work on all aircraft, due to the
way developers differently implement the on/off switches/flags for these (for
example, PMDG implements their lights differently for each aircraft). There is a
`ConfigMap.xml` file that can be edited (make sure to create backups before
updated - enhancements to this coming soon) which uses the aircraft name/title
to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to
detect those features.

---

## Flight Phases

ACARS defines multiple flight phases, and the transitions between them are
detailed below. These rules are attemped to strike a balance between detecting
the phases properly for both IFR and VFR flights.

#### Boarding

- You must be on the ground to be able to start a flight. The parking brake
  should also be on

##### Notes

- The players starting position (gate, parking or runway) is attempted to be
  found. Otherwise, it's recorded as "Unknown"

#### Pushback

- Your aircraft has started moving, and is under 5kts
- If you started the flight with the brakes on and they are released

#### Notes

- The "Blocks Off" time is recorded
- For helicopters, this phase is recorded but is essentially bypassed once you
  leave the ground

#### Taxi Out

- The ground speed is above 5

#### Notes

- The "Taxi Out" timer is started
- For helicopters, this phase is recorded but is essentially bypassed once you
  leave the ground

#### Takeoff

- If you're detected to be on a runway, and your ground speed is over 30
- If you haven't been detected on a runway, your ground speed is over 80
  (rolling)
- You're no longer on the ground

##### Notes

- For helicopters, this phase is recorded but is essentially bypassed once you
  leave the ground

#### Enroute

- You're 500' AGL or above (to attempt to catch the earlier point) OR the gear
  are up (if they are retractable)
- More than 3 miles from the airport

#### Approach

- If you're at the TOD
  - If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that
    will be used
  - Otherwise, the TOD is calculated using
    [this method](https://www.flyingmag.com/technique/tip-week/calculating-top-descent/)
    (`TOD = (Plane Alt - Field Alt) / 3`)
- If you went above 10k' and are now below it

#### Final

- Below 3000' AGL
- Gear are down (if they are retractable)
- Flaps are down

#### Landing

- You're on the ground

##### Notes:

- The "End Flight" button shows up

#### Taxi In

- You're off of the runway and your ground speed is < 30

##### Notes

- The "End Flight" button shows up

#### Arrived

- The "End Flight" button must be clicked to set the flight to arrived
- Once "End Flight" is clicked, a button to file the PIREP will show

##### Notes

- The "End Flight" button shows up
- The parking/gate you're at will be attempted to be figured out
