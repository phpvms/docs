# VSE API Docs
These are the API Docs
## [Pirep](#Pirep)

- **active** - Return false if the PIREP state is in one of
the following states. Rules don't run when
the PIREP/processing isn't active
  - `boolean`
- **actualDistance** - The distance when the flightplan is measured
Might not always be set or available
  - `number`
- **aircraft** - The aircraft the pilot is flying
  - [`Aircraft`](#aircraft)
- **airline** - The airline the pilot is a part of
  - [`Airline`](#airline)
- **approachTime** - Unix timestamp, the time in the sim
  - `number`
- **approachTimeActual** - Unix timestamp, system time
  - `number`
- **arrivalAirport** - The arrival airport, null if they haven't landed yet
  - [`Airport`](#airport)
- **arrivalGate** - The arrival gate, null if they aren't at one.
Might be null if it wasn't detected
  - [`Gate`](#gate)
- **arrivalRunway** - The runway that they landed on.
Might be null if it wasn't detected
  - [`Runway`](#runway)
- **blocksOffTime** - Unix timestamp, the time in the sim
  - `number`
- **blocksOffTimeActual** - Unix timestamp, system time
  - `number`
- **blocksOnTime** - Unix timestamp, the time in the sim
  - `number`
- **blocksOnTimeActual** - Unix timestamp, system time
  - `number`
- **boardingTime** - Unix timestamp, the time in the sim
  - `number`
- **boardingTimeActual**
  - `number`
- **crossingRunway** - This will have a value, with the runway information,
if they're currently on a runway
Might be null if it wasn't detected
  - [`Runway`](#runway)
- **departureAirport** - The airport they departed from
Might be null if it wasn't detected
  - [`Airport`](#airport)
- **departureGate** - The departure gate, null if they aren't at one.
Might be null if it wasn't detected
  - [`Gate`](#gate)
- **departureRunway** - The runway they took off from
Might be null if it wasn't detected
  - [`Runway`](#runway)
- **directTakeoff** - Is this a direct takeoff? That means when in "boarding", the OnGround flag is immediately detected as true
  - `boolean`
- **distanceToGo** - How far they ahve already travelled
Might not always be set or available
  - `number`
- **elapsedTime** - Get the time elapsed, subtract the current sim time from the blocks off time
In seconds
  - `number`
- **elapsedTimeHumanReadable**
  - `string`
- **engineStartStates**
  - `boolean[]`
- **estimatedTravelTime** - The amount of time estimated that this should take. In minutes
Might not always be set or available
  - `number`
- **fares**
  - `Acars.Models.FareCollection`
- **features** - The startup variables/state when this PIREP started
  - [`Features`](#features)
- **flight** - The flight this PIREP originated from, if it was from
a bid, or loaded on the screen
  - [`Flight`](#flight)
- **flightId** - The ID of the flight from phpVMS
  - `string`
- **flightNumber** - The flight number
  - `string`
- **flightPlan**
  - [`FlightPlan`](#flightplan)
- **flightType**
  - `string`
- **fuelAtApproach** - The fuel, in lbs
  - `number`
- **fuelAtLanding** - The fuel, in lbs
  - `number`
- **fuelAtTakeOff** - The fuel, in lbs
  - `number`
- **fuelBlocksOff** - The fuel, in lbs
  - `number`
- **fuelBlocksOn** - The fuel, in lbs
  - `number`
- **fuelUsed** - The fuel, in lbs
  - `number`
- **id** - The phpVMS PIREP ID
  - `string`
- **ident**
  - `string`
- **ignoreLightsRules**
  - `boolean`
- **isInActiveState** - Is this flight in an active state?
  - `boolean`
- **isResuming** - If this PIREP is being resumed
  - `boolean`
- **landedTime** - Unix timestamp, the time in the sim
  - `number`
- **landedTimeActual** - Unix timestamp, system time
  - `number`
- **landingRate**
  - `number`
- **notes**
  - `string`
- **pauseLocation**
  - `array{number}`
- **phase**
  - `string`
    - INI - Initialized
    - BST - Boarding started
    - PBT - Pushback started
    - TXI - Taxi
    - TOF - Takeoff
    - ENR - Enroute
    - APR - Approach
    - FIN - On Final
    - LAN - Landing
    - TXI - Taxi
    - ONB - On-block
    - ARR - Arrived
    - CNL - Cancelled
    - FIL - Filed
    - PSD - Paused
- **plannedDistance** - Distance planned
Might not always be set or available
  - `number`
- **plannedFlightTime** - Gets or sets the planned flight time.
  - `array`
  - The planned flight time.
- **route**
  - `string`
- **routeCode** - The route code
  - `string`
- **routeLeg** - The route leg
  - `string`
- **score**
  - `number`
- **simType** - The simulator type they're using
  - `string`
    - Prepar3d
    - X-Plane
    - Microsoft Flight Simulator
    - FSX
    - FS9
- **sourceName**
  - `string`
- **startedWithBrakes** - Did they start the flight with the brakes on? Use this to determine the criterea on
moving out of the Boarding phase
  - `boolean`
- **startTime** - Unix timestamp, the time in the sim
  - `number`
- **state** - The PIREP states - these match the phase
  - `string`
    - Not Running
    - Initialized
    - Boarding
    - Pushback
    - Taxi Out
    - Takeoff
    - Enroute
    - Approach
    - Final
    - Landed
    - Taxi In
    - On Block
    - Arrived
    - Cancelled
    - Filed
    - Paused
- **takeoffTime** - Unix timestamp, the time in the sim
  - `number`
- **takeoffTimeActual** - Unix timestamp, system time
  - `number`
- **taxiFuelOut** - The fuel, in lbs
  - `number`
- **taxiInDuration**
  - `number`
- **taxiOutDuration**
  - `number`
- **taxiOutTime** - The in-sim taxi out time
Unix timestamp, the time in the sim
  - `number`
- **taxiOutTimeActual** - Unix timestamp, system time
  - `number`
- **thresholdDistance** - Distance from the threshold, in feet
  - `number`
- **todPauseCompleted** - Save whether we've already paused or not for the TOD
  - `boolean`
- **todPauseDistance** - Or pause the given distance before
  - `number`
- **todPauseOn** - Whether we should pause at TOD or not
  - `boolean`
- **totalPauseTime**
  - `number`

---

## [Acars](#Acars)

- **allEnginesRunning** - Are all the engines on?
  - `boolean`
  - If all of the engines are running
- **anyEnginesRunning** - Are any engines on?
  - `boolean`
  - If any engines are running
- **approachingRunway** - If the player is approaching/close to a runway (within 150 meters or so)
  - [`Runway`](#runway)
  - This indicates the closest runway to the user
- **bank**
  - `number`
  - Aircraft bank, +/-
- **beaconLights**
  - `boolean`
  - Boolean for lights
- **engineCount**
  - `number`
  - The number of engines
- **engineFuelFlow**
  - `number[]`
- **engineMaxRpm**
  - `number`
  - The total N1 percent
- **engineN2Average** - Get the current engine N2 value (as an average)
  - `number`
  - The average of the N2 values
- **engineN2Percent**
  - `number[]`
- **engineRpm**
  - `number`
  - Engine RPM
- **engineType** - The type of engine
  - `string`
    - Piston
    - Jet
    - None
    - Helo
    - Rocket
    - Turboprop
- **flaps** - Flaps in an index amount
  - `number`
  - Flap position, from 0
- **fuelQuantity**
  - `number`
  - The current fuel quantity
- **gearUp**
  - `boolean`
  - True if the gear is up
- **gForce** - The current G-Force
  - `number`
  - The current g-force
- **gForceTouchDown**
  - `number`
  - The g-force at touchdown
- **groundAltitude** - Altitude of plane above the ground
  - `number`
  - The ground altitude (AGL)
- **groundSpeed**
  - `number`
  - If all of the engines are running
- **heading**
  - `number`
  - The true heading
- **headingMagnetic**
  - `number`
  - The magnetic heading
- **indicatedAirspeed**
  - `number`
  - Indicated airspeed
- **landingLights**
  - `boolean`
  - Boolean for lights
- **location**
  - [`Coords`](#coords)
  - Coordinates of this location (x, y)
- **logoLight**
  - `boolean`
  - Boolean for lights
- **magVar**
  - `number`
  - Magnetic variation
- **n1Percent**
  - `number`
  - The total N1 percent
- **navigationLights**
  - `boolean`
  - Boolean for lights
- **onGround**
  - `boolean`
  - If the aircraft is on the ground
- **overspeedWarning**
  - `boolean`
  - If the overspeed warning is on in the sim
- **parkBrake**
  - `boolean`
  - If the parking brake is on
- **paused**
  - `boolean`
  - Is the sim paused? inherited
- **payloadWeight**
  - `number`
  - Weight of the payload
- **pitch**
  - `number`
  - Aircraft pitch, +/-
- **planeAltitude** - Altitude of plane above MSL
  - `number`
  - The indicated altitude
- **replay**
  - `boolean`
  - Are they in a replay?
- **runway** - Save the runway they're on. This gets set if they're taxiing too, so we can keep
track of if we're crossing a runway or something
  - [`Runway`](#runway)
  - If the pilot is on the runway
- **simRate**
  - `number`
  - The current simulation rate
- **slewActive**
  - `boolean`
  - If the slew is enabled
- **stallWarning**
  - `boolean`
  - If the stall warning is on in the sim
- **strobeLights**
  - `boolean`
  - Boolean for lights
- **taxiLights**
  - `boolean`
  - Boolean for lights
- **throttlePct**
  - `number`
  - Average throttle percent
- **throttles**
  - `array`
- **totalWeight**
  - `number`
  - Total weight of the a ircraft
- **transponderCode** - The transponder code
  - `System.UInt32`
  - Transponder code
- **unlimitedFuel**
  - `boolean`
  - If unlimited fuel is enabled
- **verticalSpeed**
  - `number`
  - Their vertical speed (+/-)
- **verticalSpeedTouchdown**
  - `number`
  - The vertical speed at touchdown
- **wingLights**
  - `boolean`
  - Boolean for lights
- **zeroFuelWeight**
  - `number`
  - The zero fuel weight

---

## [Aircraft](#Aircraft)

- **icao**
  - `string`
- **id**
  - `string`
- **ident**
  - `string`
- **name**
  - `string`
- **registration**
  - `string`
- **status**
  - `string`
- **type**
  - `string`

---

## [Airline](#Airline)

- **iata** - The IATA of the airline
  - `string`
- **icao** - The ICAO of the airline
  - `string`
- **ident** - Show "friendlier" name for airline - the code + name
  - `string`
- **name** - The full name of the airline
  - `string`

---

## [Airport](#Airport)

- **altitudeFeet**
  - `array`
- **city**
  - `string`
- **country**
  - `string`
- **iata**
  - `string`
- **icao**
  - `string`
- **location**
  - [`Coords`](#coords)
- **name**
  - `string`
- **sceneryFilePath**
  - `string`
- **sceneryName**
  - `string`
- **state**
  - `string`
- **transitionAltitude**
  - `array`
- **transitionLevel**
  - `array`

---

- **Coords**
  - See `Coords`
- **lat**
  - `number`
- **lon**
  - `number`

---

## [Features](#Features)

- **aircraftIcao**
  - `string`
- **aircraftType**
  - `string`
- **configFile**
  - `string`
- **dateTime**
  - `number`
- **dateTimeClient**
  - `number`
- **engineCount**
  - `number`
- **engineType**
  - `string`
- **estCruiseSpeed**
  - `number`
- **flapsCount**
  - `number`
- **gearRetractable**
  - `boolean`
- **heading**
  - `number`
- **headingMagnetic**
  - `number`
- **id** - Store an ID for this entry
  - `string`
- **location** - Return a position
  - [`Coords`](#coords)
- **onGround**
  - `boolean`
- **parkBrake**
  - `boolean`
- **paused**
  - `boolean`
- **propMaxRpm**
  - `number`
- **simType**
  - `string`
- **title**
  - `string`
- **unlimitedFuel**
  - `boolean`

---

## [Flight](#Flight)

- **altIcao**
  - `string`
- **arrivalIcao**
  - `string`
- **arrivalTime**
  - `string`
- **departureIcao**
  - `string`
- **departureTime**
  - `string`
- **distance**
  - `number`
- **fields**
  - `System.Collections.Generic.Dictionary{string,string}`
- **flightNumber**
  - `number`
- **flightTime**
  - `number`
- **flightType**
  - `string`
- **id**
  - `string`
- **ident**
  - `string`
- **level**
  - `number`
- **loadFactor**
  - `number`
- **loadFactorVariance**
  - `number`
- **route**
  - `string`
- **routeCode**
  - `string`
- **routeLeg**
  - `string`

---

## [FlightPlan](#FlightPlan)

- **altIcao**
  - `string`
- **arrivalAirport**
  - [`Airport`](#airport)
- **cargoWeight** - The total cargo weight, in lbs
  - `number`
- **cruiseAlt**
  - `number`
- **currentPoint**
  - [`RoutePoint`](#routepoint)
- **departureAirport**
  - [`Airport`](#airport)
- **distance**
  - `number`
- **flightId**
  - `string`
- **flightPlanFields** - Bag of fields that can be set for the PIREP. These come from SimBrief.
Can include fields like the Cost Index, etc. See the VMSAcars file format importer
  - `Acars.Models.FieldCollection`
- **flightPlanType** - The different types of flight plans that can be parsed
  - `string`
- **loadedFromFile**
  - `boolean`
- **nextPoint**
  - [`RoutePoint`](#routepoint)
- **passengersCount** - Total number of planned passengers
  - `number`
- **pointCount**
  - `number`
- **points**
  - [`array{RoutePoint}`](#array{routepoint})
- **route** - Return the route string
  - `string`
- **simbriefId**
  - `string`
- **toc** - The top of climb point
  - `array{number}`
- **tod** - The route point which is the top of descent. This comes from the SimBrief
  - `array{number}`

---

## [Gate](#Gate)

- **id**
  - `string`
- **location**
  - [`Coords`](#coords)
  - Coordinates of this location (x, y)
- **radius**
  - `number`
- **type**
  - `string`

---

## [RoutePoint](#RoutePoint)

- **active** - If this is the currently active point
  - `boolean`
- **location**
  - [`Coords`](#coords)
  - Coordinates of this location (x, y)
- **Name** - Name of the current active nav point
  - `string`

---

## [Runway](#Runway)

- **approachingRunway** - Are they approaching the runway? Within 200 meters or so
  - `boolean`
- **approachingRunwayDistance** - Distance to the approaching runway. Don't care about which edge
  - `number`
- **bearingToMagnetic** - The bearing in degrees MAGNETIC to the threshold of this runway.
<p>NOTE: this is only filled in if a reference position has been set</p>
  - `number`
- **bearingToTrue** - The bearing in degrees TRUE to the threshold of this runway.
<p>NOTE: this is only filled in if a reference position has been set</p>
  - `number`
- **closedForLanding** - True if this runway is closed to landing traffic
  - `boolean`
- **closedForTakeoff** - True if this runway is closed to traffic taking off
  - `boolean`
- **distanceNauticalMiles** - The distance to this runway's threshold in Nautical Miles.
<p>NOTE: this is only filled in if a reference position has been set</p>
  - `number`
- **endLocation** - The runway ending location
  - [`Coords`](#coords)
- **headingMagnetic** - The Magnetic Heading of the runway
  - `number`
- **headingTrue** - The True Heading of the runway
  - `number`
- **icao**
  - `string`
- **id**
  - `string`
- **lengthFeet** - The length of the runway in Feet
  - `number`
- **magVar**
  - `number`
- **runwayCenter** - The center position of the runway
  - [`Coords`](#coords)
- **startLocation** - The FlightSim's start location for this runway. Used to position the player for takeoff.
  - [`Coords`](#coords)
- **surface** - The type of surface the runway has
  - `string`
- **thresholdLocation** - The Longitude/Latitude of runway threshold
  - [`Coords`](#coords)
- **thresholdOffsetFeet** - The distance from the threshold to the real start of the runway in Feet
  - `number`
- **widthFeet** - The width of the runway in Feet
  - `number`
