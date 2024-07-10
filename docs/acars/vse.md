# VSE API Docs
These are the API Docs
## [Pirep](#Pirep)

- **active** - Return false if the PIREP state is in one of
the following states. Rules don't run when
the PIREP/processing isn't active
  - `boolean`
- **actualDistance** - The distance when the flightplan is measured
Might not always be set or available
  - `UnitsNet.Length`
- **aircraft** - The aircraft the pilot is flying
  - [`Aircraft`](#aircraft)
- **airline** - The airline the pilot is a part of
  - [`Airline`](#airline)
- **approachTime** - A DateTime object, the time in the sim. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **approachTimeActual** - A DateTime object, system time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **arrivalAirport** - The arrival airport, null if they haven't landed yet
  - [`Airport`](#airport)
- **arrivalGate** - The arrival gate, null if they aren't at one.
Might be null if it wasn't detected
  - [`Gate`](#gate)
- **arrivalRunway** - The runway that they landed on.
Might be null if it wasn't detected
  - [`Runway`](#runway)
- **blocksOffTime** - DateTime object, the time in the sim. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **blocksOffTimeActual** - A DateTime object. Real time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **blocksOnTime** - A DateTime object, the time in the sim. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **blocksOnTimeActual** - A DateTime object, system time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **boardingTime** - Unix timestamp, the time in the sim. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **boardingTimeActual** - A DateTime object, sim time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
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
  - `UnitsNet.Length`
- **elapsedTime** - Get the time elapsed, subtract the current sim time from the blocks off time
Timespan object. See:
https://learn.microsoft.com/en-us/dotnet/api/system.timespan?view=net-8.0#properties
  - `System.TimeSpan`
- **elapsedTimeHumanReadable**
  - `string`
- **engineStartStates**
  - `boolean[]`
- **fares**
  - `Acars.Models.Client.FareCollection`
- **features** - The startup variables/state when this PIREP started
  - [`Features`](#features)
- **flight** - The flight this PIREP originated from, if it was from
a bid, or loaded on the screen
  - [`Flight`](#flight)
- **flightId** - The ID of the flight from phpVMS
  - `string`
- **flightNumber**
  - `string`
- **flightPlan**
  - [`FlightPlan`](#flightplan)
- **flightType**
  - `string`
- **fuelAtApproach** - The fuel. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **fuelAtLanding** - The fuel. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **fuelAtTakeOff** - The fuel. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **fuelBlocksOff** - Weight. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **fuelBlocksOn** - The fuel. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **fuelUsed** - The fuel. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
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
- **landedTime** - A DateTime object, the time in the sim. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **landedTimeActual** - A DateTime object, system time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **landingRate**
  - `UnitsNet.Speed`
- **notes**
  - `string`
- **pauseLocation**
  - [`Coords`](#coords)
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
  - `UnitsNet.Length`
- **plannedFlightTime** - Gets or sets the planned flight time.
  - `number`
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
- **startTime** -  DateTime object, the time in the sim. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
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
- **takeoffTime** - A DateTime object, sim time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **takeoffTimeActual** - A DateTime object, system time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **taxiFuelOut** - The fuel. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **taxiInDuration** - Timespan object. See:
https://learn.microsoft.com/en-us/dotnet/api/system.timespan?view=net-8.0#properties
  - `System.TimeSpan`
- **taxiOutDuration** - Timespan object. See:
https://learn.microsoft.com/en-us/dotnet/api/system.timespan?view=net-8.0#properties
  - `System.TimeSpan`
- **taxiOutTime** - A DateTime object, sim time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **taxiOutTimeActual** - A DateTime object, system time. See:
https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-8.0#properties
  - `System.DateTime`
- **thresholdDistance** - Distance from the threshold. See:
https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json
  - `UnitsNet.Length`
- **todPauseCompleted** - Save whether we've already paused or not for the TOD
  - `boolean`
- **todPauseDistance** - Or pause the given distance before
  - `number`
- **todPauseOn** - Whether we should pause at TOD or not
  - `boolean`
- **totalPauseTime** - Timespan object. See:
https://learn.microsoft.com/en-us/dotnet/api/system.timespan?view=net-8.0#properties
  - `System.TimeSpan`

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
  - `UnitsNet.MassFlow[]`
- **engineMaxRpm** - Has units. See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/RotationalSpeed.json
  - `UnitsNet.RotationalSpeed`
  - The total N1 percent
- **engineN2Average** - Get the current engine N2 value (as an average)
  - `number`
  - The average of the N2 values
- **engineN2Percent**
  - `number[]`
- **engineRpm**
  - `UnitsNet.RotationalSpeed`
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
  - `UnitsNet.Mass`
  - The current fuel quantity (weight)
- **gearUp**
  - `boolean`
  - True if the gear is up
- **gForce** - The current G-Force
  - `number`
  - The current g-force
- **gForceTouchDown**
  - `number`
  - The g-force at touchdown
- **groundAltitude** - Altitude of plane above the ground. Has units, like .Feet/.Meters
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json
  - `UnitsNet.Length`
  - The ground altitude (AGL)
- **groundSpeed**
  - `UnitsNet.Speed`
  - If all of the engines are running. Has units, like .Knots
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json
- **heading**
  - `number`
  - The true heading
- **headingMagnetic**
  - `number`
  - The magnetic heading
- **indicatedAirspeed** - The indicated airspeed
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json
  - `UnitsNet.Speed`
  - Indicated airspeed. Has units, like .Knots
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
- **payloadWeight** - Weight of the payload
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **pitch**
  - `number`
  - Aircraft pitch, +/-
- **planeAltitude** - Altitude of plane above MSL. Has units, like .Feet/.Meters
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json
  - `UnitsNet.Length`
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
- **totalWeight** - Total weight of the aircraft
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`
- **transponderCode** - The transponder code
  - `System.UInt32`
  - Transponder code
- **unlimitedFuel**
  - `boolean`
  - If unlimited fuel is enabled
- **verticalSpeed**
  - `UnitsNet.Speed`
    Their vertical speed (+/-). Has units - FeetPerMinute
    See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json
- **verticalSpeedTouchdown**
  - `UnitsNet.Speed`
  - The vertical speed at touchdown
- **wingLights**
  - `boolean`
  - Boolean for lights
- **zeroFuelWeight** - The zero fuel weight
See https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json
  - `UnitsNet.Mass`

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
  - `UnitsNet.Length`
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
  - `UnitsNet.Length`
- **transitionLevel**
  - `UnitsNet.Length`

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
  - `UnitsNet.Length`
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
- **flightId** - The remote ID
  - `string`
- **flightPlanFields** - Bag of fields that can be set for the PIREP. These come from SimBrief.
Can include fields like the Cost Index, etc. See the VMSAcars file format importer
  - `Acars.Models.Client.FieldCollection`
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
  - `UnitsNet.Length`
- **type** - The type of gate
  - `string`
    - None
    - Ramp GA
    - Ramp GA Small
    - Ramp GA Medium
    - Ramp GA Large
    - Ramp GA Cargo
    - Ramp Military Cargo
    - Ramp Military Combat
    - Gate Small
    - Gate Medium
    - Gate Heavy
    - Dock GA
    - Fuel
    - Vehicles
    - Ramp GA Extra
    - Gate Extra
    - Jetway

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
  - `UnitsNet.Length`
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
- **distance**
  - `UnitsNet.Length`
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
- **lengthFeet** - Length of the runway
  - `UnitsNet.Length`
- **magVar**
  - `number`
- **runwayCenter** - The center position of the runway
  - [`Coords`](#coords)
- **runwayId**
  - `VMSL.Scenery.SimObjects.RunwayId`
- **startLocation** - The FlightSim's start location for this runway. Used to position the player for takeoff.
  - [`Coords`](#coords)
- **surface** - The type of surface the runway has
  - `string`
- **thresholdLocation** - The Longitude/Latitude of runway threshold
  - [`Coords`](#coords)
- **thresholdOffset**
  - `UnitsNet.Length`
- **widthFeet** - Width of the runway
  - `UnitsNet.Length`

---

- **Acars.Domain.VSE.**
  - See `Acars.Domain.VSE.`

---
