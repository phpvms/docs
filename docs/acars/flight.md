---
id: flight
title: Flight Planning
---

## Setting up your flight

There are several ways to configure flight:

1. Enter everything manually
2. Load a flight from the flight search


### Entering everything manually

This is simple, just type in everything for your flight, referring to your VA site.

### Flight Search or Bids

To load a flight from the search or bids, in the menu, select flight search. If your VA has search enabled, you can click search. If you click on "Bids", it will show your available bids.

If there is a SimBrief flight plan also loaded with the bid from the site, it will show up as "Yes" in that column.

### Flight Plans

In order for the route map to show all of your waypoints, you need to load a flight plan. vmsACARS does not have/contain any navigation information on its own, it's all loaded from a loaded flight plan. The follow flight plan types are supported:

1. FSX/P3D (`.pln`)
1. X-Plane (`.fms`) 
1. MSFS (`.pln`) 
1. Simbrief (`.xml`, exported from the SimBrief site or the SimBrief Downloader)

The routes/navpoints are then loaded from the flight plan, along with the TOD (from MSFS/Simbrief), and filed along with your PIREP.

---

## Lights and Aircraft Features

Lights and other features for aircraft may not work on all aircraft, due to the way developers differently implement the on/off switches/flags for these (for example, PMDG implements their lights differently for each aircraft). There is a `ConfigMap.xml` file that can be edited (make sure to create backups before updated - enhancements to this coming soon) which uses the aircraft name/title to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to detect those features.
