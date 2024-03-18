---
id: basics
title: Basics
---

phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled.

---

## Airlines

One or more airlines needs to be created. Users choose an airline on registration. 

---

## Airports

Airports can be added to the system, and optionally selected as hubs. When users register, they select a home hub.

---

## Fares

An unlimited number of fares can be added, and then fares are attached to subfleets, therefor, all of these fares are then applied to any aircraft in that subfleet. These include examples of "First Class", "Economy", etc. You can add as many or as few as you want. Fares include:

* Capacity - how many seats this fare class holds
* Price - the amount a ticket in this fare class costs
* Cost - the amount it costs for a ticket; this is the amount it costs you to run a single seat

In order to facilitate not needing multiple fares of the same type, but with different capacity/costs/price, when a fare it assigned to a subfleet, those properties can be changed on a per-subfleet basis. 

[ExpertFlyer has a great list of real-world fare classes](https://www.expertflyer.com/sessionlessClassList.do)

---

## Subfleets and Aircraft

A new feature in phpVMS 7 are subfleets. Subfleets can be thought of as aircraft-groups. Airlines often group aircraft by equipment types; as a real-world example, British Airways has a subfleet for their 767-336ER Rolls-Royce RB211-524H aircraft, of which there are 7, and the aircraft in this subfleet are used for short-haul routes. Fares are aligned for the aircraft in the subfleet; for example, an airline may further divide the 767 short-haul subfleet into one subfleet that has first, business and economy classes (with a name of "767-336ER RR RB211-524H-**FJY**") and another 767 subfleet with only first and economy classes (with a name of 767-336ER RR RB211-524H-**FY**)

In phpVMS, you can create as many subfleets as you like, with as many aircraft in those subfleets as you want. At a minimum, one subfleet is required, and there's no restriction on the types of aircraft that can be included. This way, potentially dozens of aircraft don't need to be assigned to the same route.

These subfleets, can be assigned to routes and ranks, making it easy to apply multiple aircraft to routes, and then allowing more control over what equipment pilots are allowed to fly. An example would be having a route that has 3 subfleets assigned to it, however, if a pilot is only allowed to fly one of those subfleets (because of their rank), when filing a PIREP, only the aircraft from the allowed subfleet will be shown.

* Subfleets have a name, type and a fuel type. The name and type are arbitrary, and just convention to your VA. [Here's an example for Continental Airlines](http://www.aerotransport.org/php/go.php?query=operator&luck=1&where=70913)
* Any number of aircraft can be assigned
* Any number of fares can be assigned, and the properties overridden.
* Any number of subfleets can be assigned to a flight

---

## Flights

Schedules have been renamed to "flights". A flight consists of:

- An airline
- Flight type
- Flight number
- Flight Code (optional)
- Flight Leg (optional)
- Departure airport
- Arrival airport
- Any number of subfleets

Flight numbers do not need to be unique, however, if a duplicate flight number is found, the creation/edit will fail, and a route code or leg must be provided in order for it to work properly.

### Flight Types

Flight types follow the IATA SSIM service code. The ones highlighted in bold are the most common.

- A = Additional Cargo/Mail
- **C = Charter – Passenger only**
- E = Special VIP Flight (FAA/Government)
- **F = Scheduled – Cargo and/or Mail**
- G = Additional Flights – Passenger Normal Service
- H = Charter – Cargo and/or Mail
- I = Ambulance Flight
- **J = Scheduled – Passenger Normal Service**
- K = Training Flights
- M = Mail Service
- O = Charter requiring special handling (e.g. migrants, immigrants)
- P = Positioning Flights – Non Revenue (ferry/delivery/demo)
- T = Technical Test
- W = Military
- X = Technical Stop

More resources

- [Forum Topic - Connecting Flights](https://forum.phpvms.net/topic/24329-connecting-flights/)
- [Quora - Multi-leg and multi-segment flights](https://www.quora.com/What-is-the-difference-between-Multi-leg-and-Multi-segment-flights)
