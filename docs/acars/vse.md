# VSE API Docs
These are the API Docs
## [Pirep](#Pirep)

- **active** - Return false if the PIREP state is in one of
the following states. Rules don't run when
the PIREP/processing isn't active
  - `boolean`
### Example

```csharp
pirep
```
- **actualDistance** - The distance when the flightplan is measured
Might not always be set or available
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **aircraft** - The aircraft the pilot is flying
  - [`Aircraft`](#aircraft)
- **airline** - The airline the pilot is a part of
  - [`Airline`](#airline)
- **approachTime** - A DateTime object, the time in the sim
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **approachTimeActual** - A DateTime object, system time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **arrivalAirport** - The arrival airport, null if they haven't landed yet
  - [`Airport`](#airport)
- **arrivalGate** - The arrival gate, null if they aren't at one.
Might be null if it wasn't detected
  - [`Gate`](#gate)
- **arrivalRunway** - The runway that they landed on.
Might be null if it wasn't detected
  - [`Runway`](#runway)
- **blocksOffTime** - DateTime object, the time in the sim
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **blocksOffTimeActual** - A DateTime object. Real time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **blocksOnTime** - A DateTime object, the time in the sim
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **blocksOnTimeActual** - A DateTime object, system time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **boardingTime** - Unix timestamp, the time in the sim
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **boardingTimeActual** - A DateTime object, sim time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
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
### Example

```csharp
console.log(pirep.DepartureGate)
```
- **departureRunway** - The runway they took off from
Might be null if it wasn't detected
  - [`Runway`](#runway)
- **directTakeoff** - Is this a direct takeoff? That means when in "boarding", the OnGround flag is immediately detected as true
  - `boolean`
- **distanceToGo** - How far they ahve already travelled
Might not always be set or available
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **elapsedTime** - Get the time elapsed, subtract the current sim time from the blocks off time
  - [See System.TimeSpan reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.TimeSpan?view=net-8.0#properties)
### Example

```csharp
console.log(pirep.elapsedTime.TotalMinutes)
```
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
### Example

```csharp
pirep.
```
- **flightNumber**
  - `string`
- **flightPlan**
  - [`FlightPlan`](#flightplan)
- **flightType**
  - `string`
- **fuelAtApproach** - The fuel
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
- **fuelAtLanding** - The fuel
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
- **fuelAtTakeOff** - The fuel
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
- **fuelBlocksOff** - Weight
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
- **fuelBlocksOn** - The fuel
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
- **fuelUsed** - The fuel
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
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
- **landedTime** - A DateTime object, the time in the sim
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **landedTimeActual** - A DateTime object, system time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **landingRate**
  - [See Speed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json)
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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
- **startTime** - DateTime object, the time in the sim
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
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
- **takeoffTime** - A DateTime object, sim time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **takeoffTimeActual** - A DateTime object, system time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **taxiFuelOut** - The fuel
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
- **taxiInDuration** - Timespan object
  - [See System.TimeSpan reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.TimeSpan?view=net-8.0#properties)
### Example

```csharp
console.log(pirep.taxiInDuration.TotalMinutes)
```
- **taxiOutDuration** - Timespan object
  - [See System.TimeSpan reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.TimeSpan?view=net-8.0#properties)
### Example

```csharp
console.log(pirep.taxiOutDuration.TotalMinutes)
```
- **taxiOutTime** - A DateTime object, sim time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **taxiOutTimeActual** - A DateTime object, system time
  - [See System.DateTime reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.DateTime?view=net-8.0#properties)
- **thresholdDistance** - Distance from the threshold
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **todPauseCompleted** - Save whether we've already paused or not for the TOD
  - `boolean`
- **todPauseDistance** - Or pause the given distance before
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **todPauseOn** - Whether we should pause at TOD or not
  - `boolean`
- **totalPauseTime** - Timespan object
  - [See System.TimeSpan reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.TimeSpan?view=net-8.0#properties)
### Example

```csharp
console.log(pirep.totalPauseTime.TotalMinutes)
```

---

## [Acars](#Acars)

- **allEnginesRunning** - Are all the engines on?
  - `boolean`
  - If all of the engines are running
### Example

```csharp
console.once(data.AllEnginesRunning)
```
- **anyEnginesRunning** - Are any engines on?
  - `boolean`
  - If any engines are running
### Example

```csharp
console.once(data.AnyEnginesRunning)
```
- **approachingRunway** - If the player is approaching/close to a runway (within 150 meters or so)
  - [`Runway`](#runway)
  - This indicates the closest runway to the user
### Example

```csharp
<remarks>
    Null if they're not on a runway
    </remarks>
<pre>
  <code class="lang-csharp">if (data.ApproachingRunway) {
                  console.once("Approaching runway: ", data.ApproachingRunway);
              }</code>
</pre>
```
- **bank**
  - `number`
  - Aircraft bank, +/-
### Example

```csharp
console.once(data.Bank)
```
- **beaconLights**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.BeaconLights)
```
- **engineCount**
  - `number`
  - The number of engines
### Example

```csharp
console.once(data.EngineCount)
```
- **engineFuelFlow**
  - [See MassFlow[] reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/MassFlow[].json)
- **engineMaxRpm** - Has units
  - [See RotationalSpeed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/RotationalSpeed.json)
  - The total N1 percent
### Example

```csharp
console.once(data.EngineMaxRpm.RevolutionPerMinute)
```
- **engineN2Average** - Get the current engine N2 value (as an average)
  - `number`
  - The average of the N2 values
### Example

```csharp
console.once(data.EngineN2Average);
```
- **engineN2Percent**
  - `number[]`
- **engineRpm**
  - [See RotationalSpeed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/RotationalSpeed.json)
  - Engine RPM
### Example

```csharp
console.once(data.EngineRpm)
```
- **engineType** - The type of engine
  - `string`
    - Piston
    - Jet
    - None
    - Helo
    - Rocket
    - Turboprop
### Example

```csharp
console.once(data.EngineType)
```
- **flaps** - Flaps in an index amount
  - `number`
  - Flap position, from 0
### Example

```csharp
console.once(data.Flaps)
```
- **fuelQuantity**
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
  - The current fuel quantity (weight)
### Example

```csharp
console.once(data.FuelQuantity)
```
- **gearUp**
  - `boolean`
  - True if the gear is up
### Example

```csharp
console.once(data.GearUp)
```
- **gForce** - The current G-Force
  - `number`
  - The current g-force
### Example

```csharp
console.once(data.GForce)
```
- **gForceTouchDown**
  - `number`
  - The g-force at touchdown
### Example

```csharp
console.once(data.GForceTouchDown)
```
- **groundAltitude** - Altitude of plane above the ground. Has units, like .Feet/.Meters
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
  - The ground altitude (AGL)
### Example

```csharp
console.once(data.GroundAltitude.Feet)
```
- **groundSpeed**
  - [See Speed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json)
  - If all of the engines are running. Has units, like .Knots
### Example

```csharp
console.once(data.GroundSpeed.Knots)
```
- **heading**
  - `number`
  - The true heading
### Example

```csharp
console.once(data.Heading)
```
- **headingMagnetic**
  - `number`
  - The magnetic heading
### Example

```csharp
console.once(data.HeadingMagnetic)
```
- **indicatedAirspeed** - The indicated airspeed
  - [See Speed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json)
  - Indicated airspeed. Has units, like .Knots
### Example

```csharp
console.once(data.AirspeedIndicated.Knots)
```
- **landingLights**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.LandingLights)
```
- **location**
  - [`Coords`](#coords)
  - Coordinates of this location (x, y)
### Example

```csharp
const lat = pirep.ArrivalGate.Location[0]
const lng = pirep.ArrivalGate.Location[1]
```
- **logoLight**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.LogoLight)
```
- **magVar**
  - `number`
  - Magnetic variation
### Example

```csharp
console.once(data.MagVar)
```
- **n1Percent**
  - `number`
  - The total N1 percent
### Example

```csharp
console.once(data.N1Percent)
```
- **navigationLights**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.NavigationLights)
```
- **onGround**
  - `boolean`
  - If the aircraft is on the ground
### Example

```csharp
console.once(data.OnGround)
```
- **overspeedWarning**
  - `boolean`
  - If the overspeed warning is on in the sim
### Example

```csharp
console.once(data.OverspeedWarning)
```
- **parkBrake**
  - `boolean`
  - If the parking brake is on
### Example

```csharp
console.once(data.ParkBrake)
```
- **paused**
  - `boolean`
  - Is the sim paused? inherited
### Example

```csharp
console.once(data.Paused)
```
- **payloadWeight** - Weight of the payload
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
### Example

```csharp
console.once(data.PayloadWeight)
```
- **pitch**
  - `number`
  - Aircraft pitch, +/-
### Example

```csharp
console.once(data.Pitch)
```
- **planeAltitude** - Altitude of plane above MSL. Has units, like .Feet/.Meters
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
  - The indicated altitude
### Example

```csharp
console.once(data.PlaneAltitude.Feet/Meters)
```
- **replay**
  - `boolean`
  - Are they in a replay?
### Example

```csharp
console.once(data.Replay)
```
- **runway** - Save the runway they're on. This gets set if they're taxiing too, so we can keep
track of if we're crossing a runway or something
  - [`Runway`](#runway)
  - If the pilot is on the runway
### Example

```csharp
if (data.Runway) {
    console.once("On runway: ", data.Runway);
}
```
- **simRate**
  - `number`
  - The current simulation rate
### Example

```csharp
console.once(data.SimRate)
```
- **slewActive**
  - `boolean`
  - If the slew is enabled
### Example

```csharp
console.once(data.SlewActive)
```
- **stallWarning**
  - `boolean`
  - If the stall warning is on in the sim
### Example

```csharp
console.once(data.StallWarning)
```
- **strobeLights**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.StrobeLights)
```
- **taxiLights**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.TaxiLights)
```
- **throttlePct**
  - `number`
  - Average throttle percent
### Example

```csharp
console.once(data.ThrottlePct)
```
- **throttles**
  - `array`
- **totalWeight** - Total weight of the aircraft
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
### Example

```csharp
console.once(data.TotalWeight)
```
- **transponderCode** - The transponder code
  - [See System.UInt32 reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.UInt32?view=net-8.0#properties)
  - Transponder code
### Example

```csharp
console.once(data.BeaconLights)
```
- **unlimitedFuel**
  - `boolean`
  - If unlimited fuel is enabled
### Example

```csharp
console.once(data.UnlimitedFuel)
```
- **verticalSpeed**
  - [See Speed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json)
    Their vertical speed (+/-). Has units - FeetPerMinute
### Example

```csharp
console.once(data.VerticalSpeed.FeetPerMinute)
```
- **verticalSpeedTouchdown**
  - [See Speed reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Speed.json)
  - The vertical speed at touchdown
### Example

```csharp
console.once(data.VerticalSpeedTouchdown)
```
- **wingLights**
  - `boolean`
  - Boolean for lights
### Example

```csharp
console.once(data.WingLights)
```
- **zeroFuelWeight** - The zero fuel weight
  - [See Mass reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Mass.json)
### Example

```csharp
console.once(data.ZeroFuelWeight)
```

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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **transitionLevel**
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)

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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **fields**
  - [See System.Collections.Generic.Dictionary{string,string} reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.Collections?view=net-8.0#properties)
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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **currentPoint**
  - [`RoutePoint`](#routepoint)
- **departureAirport**
  - [`Airport`](#airport)
- **distance** - Calculate the distance of this route
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
  - `array{Acars.Domain.VSE.RoutePoint}`
- **route** - Return the route string
  - `string`
- **simbriefId**
  - `string`
- **toc** - The top of climb point
  - [See System.Nullable{Acars.Domain.VSE.Coords} reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.Nullable{Acars?view=net-8.0#properties)
- **tod** - The route point which is the top of descent. This comes from the SimBrief
  - [See System.Nullable{Acars.Domain.VSE.Coords} reference for properties](https://learn.microsoft.com/en-us/dotnet/api/system.Nullable{Acars?view=net-8.0#properties)

---

## [Gate](#Gate)

- **id**
  - `string`
- **location**
  - [`Coords`](#coords)
  - Coordinates of this location (x, y)
### Example

```csharp
const lat = pirep.ArrivalGate.Location[0]
const lng = pirep.ArrivalGate.Location[1]
```
- **radius**
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
### Example

```csharp
console.log(pirep.ArrivalGate.Type);
```

---

## [RoutePoint](#RoutePoint)

- **active** - If this is the currently active point
  - `boolean`
- **location**
  - [`Coords`](#coords)
  - Coordinates of this location (x, y)
### Example

```csharp
const lat = pirep.ArrivalGate.Location[0]
const lng = pirep.ArrivalGate.Location[1]
```
- **Name** - Name of the current active nav point
  - `string`

---

## [Runway](#Runway)

- **approachingRunway** - Are they approaching the runway? Within 200 meters or so
  - `boolean`
- **approachingRunwayDistance** - Distance to the approaching runway. Don't care about which edge
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
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
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)
- **widthFeet** - Width of the runway
  - [See Length reference for unit properties](https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Length.json)

---

- **Acars.Domain.VSE.**
  - See `Acars.Domain.VSE.`

---
