# VSE API Docs
These are the API Docs
## Pirep

#### [Id](#Acars.Domain.VSE.Pirep.Id)

`string`: The phpVMS PIREP ID



---


#### [FlightId](#Acars.Domain.VSE.Pirep.FlightId)

`string`: The ID of the flight from phpVMS

##### Example

```js
pirep.
```


---


#### [SimType](#Acars.Domain.VSE.Pirep.SimType)

`string`: The simulator type they're using
- Prepar3d
- X-Plane
- Microsoft Flight Simulator
- FSX
- FS9



---


#### [Ident](#Acars.Domain.VSE.Pirep.Ident)

`string`



---


#### [FlightNumber](#Acars.Domain.VSE.Pirep.FlightNumber)

`string`: The flight number



---


#### [RouteLeg](#Acars.Domain.VSE.Pirep.RouteLeg)

`string`: The route leg



---


#### [RouteCode](#Acars.Domain.VSE.Pirep.RouteCode)

`string`: The route code



---


#### [FlightType](#Acars.Domain.VSE.Pirep.FlightType)

`string`



---


#### [PlannedDistance](#Acars.Domain.VSE.Pirep.PlannedDistance)

`number`: Distance planned
Might not always be set or available



---


#### [ActualDistance](#Acars.Domain.VSE.Pirep.ActualDistance)

`number`: The distance when the flightplan is measured
Might not always be set or available



---


#### [DistanceToGo](#Acars.Domain.VSE.Pirep.DistanceToGo)

`number`: How far they ahve already travelled
Might not always be set or available



---


#### [EstimatedTravelTime](#Acars.Domain.VSE.Pirep.EstimatedTravelTime)

`number`: The amount of time estimated that this should take. In minutes
Might not always be set or available



---


#### [Airline](#Acars.Domain.VSE.Pirep.Airline)

[`Airline`](#Acars.Domain.VSE.Airline): The airline the pilot is a part of



---


#### [Aircraft](#Acars.Domain.VSE.Pirep.Aircraft)

[`Aircraft`](#Acars.Domain.VSE.Aircraft): The aircraft the pilot is flying



---


#### [Flight](#Acars.Domain.VSE.Pirep.Flight)

[`Flight`](#Acars.Domain.VSE.Flight): The flight this PIREP originated from, if it was from
a bid, or loaded on the screen



---


#### [Features](#Acars.Domain.VSE.Pirep.Features)

[`Features`](#Acars.Domain.VSE.Features): The startup variables/state when this PIREP started



---


#### [FlightPlan](#Acars.Domain.VSE.Pirep.FlightPlan)

[`FlightPlan`](#Acars.Domain.VSE.FlightPlan)



---


#### [IsInActiveState](#Acars.Domain.VSE.Pirep.IsInActiveState)

`Boolean`: Is this flight in an active state?



---


#### [State](#Acars.Domain.VSE.Pirep.State)

`string`: The PIREP states - these match the phase
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



---


#### [Phase](#Acars.Domain.VSE.Pirep.Phase)

`string`
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



---


#### [DepartureAirport](#Acars.Domain.VSE.Pirep.DepartureAirport)

[`Airport`](#Acars.Domain.VSE.Airport): The airport they departed from
Might be null if it wasn't detected



---


#### [DepartureGate](#Acars.Domain.VSE.Pirep.DepartureGate)

[`Gate`](#Acars.Domain.VSE.Gate): The departure gate, null if they aren't at one.
Might be null if it wasn't detected

##### Example

```js
console.log(pirep.DepartureGate)
```


---


#### [DepartureRunway](#Acars.Domain.VSE.Pirep.DepartureRunway)

[`Runway`](#Acars.Domain.VSE.Runway): The runway they took off from
Might be null if it wasn't detected



---


#### [CrossingRunway](#Acars.Domain.VSE.Pirep.CrossingRunway)

[`Runway`](#Acars.Domain.VSE.Runway): This will have a value, with the runway information,
if they're currently on a runway
Might be null if it wasn't detected



---


#### [ArrivalAirport](#Acars.Domain.VSE.Pirep.ArrivalAirport)

[`Airport`](#Acars.Domain.VSE.Airport): The arrival airport, null if they haven't landed yet



---


#### [ArrivalRunway](#Acars.Domain.VSE.Pirep.ArrivalRunway)

[`Runway`](#Acars.Domain.VSE.Runway): The runway that they landed on.
Might be null if it wasn't detected



---


#### [ArrivalGate](#Acars.Domain.VSE.Pirep.ArrivalGate)

[`Gate`](#Acars.Domain.VSE.Gate): The arrival gate, null if they aren't at one.
Might be null if it wasn't detected



---


#### [Route](#Acars.Domain.VSE.Pirep.Route)

`string`



---


#### [StartTime](#Acars.Domain.VSE.Pirep.StartTime)

`number`: Unix timestamp, the time in the sim



---


#### [PlannedFlightTime](#Acars.Domain.VSE.Pirep.PlannedFlightTime)

`System.Nullable{number}`: Gets or sets the planned flight time.
The planned flight time.



---


#### [IsResuming](#Acars.Domain.VSE.Pirep.IsResuming)

`Boolean`: If this PIREP is being resumed



---


#### [StartedWithBrakes](#Acars.Domain.VSE.Pirep.StartedWithBrakes)

`Boolean`: Did they start the flight with the brakes on? Use this to determine the criterea on
moving out of the Boarding phase



---


#### [DirectTakeoff](#Acars.Domain.VSE.Pirep.DirectTakeoff)

`Boolean`: Is this a direct takeoff? That means when in "boarding", the OnGround flag is immediately detected as true



---


#### [BoardingTime](#Acars.Domain.VSE.Pirep.BoardingTime)

`number`: Unix timestamp, the time in the sim



---


#### [BoardingTimeActual](#Acars.Domain.VSE.Pirep.BoardingTimeActual)

`number`



---


#### [BlocksOffTime](#Acars.Domain.VSE.Pirep.BlocksOffTime)

`number`: Unix timestamp, the time in the sim



---


#### [BlocksOffTimeActual](#Acars.Domain.VSE.Pirep.BlocksOffTimeActual)

`number`: Unix timestamp, system time



---


#### [TaxiOutTime](#Acars.Domain.VSE.Pirep.TaxiOutTime)

`number`: The in-sim taxi out time
Unix timestamp, the time in the sim



---


#### [TaxiOutTimeActual](#Acars.Domain.VSE.Pirep.TaxiOutTimeActual)

`number`: Unix timestamp, system time



---


#### [TakeoffTime](#Acars.Domain.VSE.Pirep.TakeoffTime)

`number`: Unix timestamp, the time in the sim



---


#### [TakeoffTimeActual](#Acars.Domain.VSE.Pirep.TakeoffTimeActual)

`number`: Unix timestamp, system time



---


#### [ApproachTime](#Acars.Domain.VSE.Pirep.ApproachTime)

`number`: Unix timestamp, the time in the sim



---


#### [ApproachTimeActual](#Acars.Domain.VSE.Pirep.ApproachTimeActual)

`number`: Unix timestamp, system time



---


#### [LandedTime](#Acars.Domain.VSE.Pirep.LandedTime)

`number`: Unix timestamp, the time in the sim



---


#### [LandedTimeActual](#Acars.Domain.VSE.Pirep.LandedTimeActual)

`number`: Unix timestamp, system time



---


#### [BlocksOnTime](#Acars.Domain.VSE.Pirep.BlocksOnTime)

`number`: Unix timestamp, the time in the sim



---


#### [BlocksOnTimeActual](#Acars.Domain.VSE.Pirep.BlocksOnTimeActual)

`number`: Unix timestamp, system time



---


#### [TaxiOutDuration](#Acars.Domain.VSE.Pirep.TaxiOutDuration)

`number`



---


#### [TaxiInDuration](#Acars.Domain.VSE.Pirep.TaxiInDuration)

`number`



---


#### [TotalPauseTime](#Acars.Domain.VSE.Pirep.TotalPauseTime)

`number`



---


#### [PauseLocation](#Acars.Domain.VSE.Pirep.PauseLocation)

`System.Collections.Generic.List{number}`



---


#### [ElapsedTime](#Acars.Domain.VSE.Pirep.ElapsedTime)

`number`: Get the time elapsed, subtract the current sim time from the blocks off time
In seconds



---


#### [ElapsedTimeHumanReadable](#Acars.Domain.VSE.Pirep.ElapsedTimeHumanReadable)

`string`



---


#### [FuelBlocksOff](#Acars.Domain.VSE.Pirep.FuelBlocksOff)

`number`: The fuel, in lbs



---


#### [FuelAtTakeOff](#Acars.Domain.VSE.Pirep.FuelAtTakeOff)

`number`: The fuel, in lbs



---


#### [FuelAtApproach](#Acars.Domain.VSE.Pirep.FuelAtApproach)

`number`: The fuel, in lbs



---


#### [FuelAtLanding](#Acars.Domain.VSE.Pirep.FuelAtLanding)

`number`: The fuel, in lbs



---


#### [FuelBlocksOn](#Acars.Domain.VSE.Pirep.FuelBlocksOn)

`number`: The fuel, in lbs



---


#### [FuelUsed](#Acars.Domain.VSE.Pirep.FuelUsed)

`number`: The fuel, in lbs



---


#### [TaxiFuelOut](#Acars.Domain.VSE.Pirep.TaxiFuelOut)

`number`: The fuel, in lbs



---


#### [EngineStartStates](#Acars.Domain.VSE.Pirep.EngineStartStates)

`Boolean[]`



---


#### [LandingRate](#Acars.Domain.VSE.Pirep.LandingRate)

`number`



---


#### [Score](#Acars.Domain.VSE.Pirep.Score)

`number`



---


#### [ThresholdDistance](#Acars.Domain.VSE.Pirep.ThresholdDistance)

`number`: Distance from the threshold, in feet



---


#### [SourceName](#Acars.Domain.VSE.Pirep.SourceName)

`string`



---


#### [Notes](#Acars.Domain.VSE.Pirep.Notes)

`string`



---


#### [Fares](#Acars.Domain.VSE.Pirep.Fares)

`Acars.Models.FareCollection`



---


#### [IgnoreLightsRules](#Acars.Domain.VSE.Pirep.IgnoreLightsRules)

`Boolean`



---


#### [TodPauseOn](#Acars.Domain.VSE.Pirep.TodPauseOn)

`Boolean`: Whether we should pause at TOD or not



---


#### [TodPauseDistance](#Acars.Domain.VSE.Pirep.TodPauseDistance)

`number`: Or pause the given distance before



---


#### [TodPauseCompleted](#Acars.Domain.VSE.Pirep.TodPauseCompleted)

`Boolean`: Save whether we've already paused or not for the TOD



---


#### [Active](#Acars.Domain.VSE.Pirep.Active)

`Boolean`: Return false if the PIREP state is in one of
the following states. Rules don't run when
the PIREP/processing isn't active

##### Example

```js
pirep
```


---


## Acars

#### [Paused](#Acars.Domain.VSE.Acars.Paused)

`Boolean`
Is the sim paused? inherited

##### Example

```js
console.once(data.Paused)
```


---


#### [Replay](#Acars.Domain.VSE.Acars.Replay)

`Boolean`
Are they in a replay?

##### Example

```js
console.once(data.Replay)
```


---


#### [Location](#Acars.Domain.VSE.Acars.Location)

`System.Collections.Generic.List{number}`
Coordinates of this location (x, y)

##### Example

```js
const lat = pirep.ArrivalGate.Location[0]
const lng = pirep.ArrivalGate.Location[1]
```


---


#### [Pitch](#Acars.Domain.VSE.Acars.Pitch)

`number`
Aircraft pitch, +/-

##### Example

```js
console.once(data.Pitch)
```


---


#### [Bank](#Acars.Domain.VSE.Acars.Bank)

`number`
Aircraft bank, +/-

##### Example

```js
console.once(data.Bank)
```


---


#### [Heading](#Acars.Domain.VSE.Acars.Heading)

`number`
The true heading

##### Example

```js
console.once(data.Heading)
```


---


#### [HeadingMagnetic](#Acars.Domain.VSE.Acars.HeadingMagnetic)

`number`
The magnetic heading

##### Example

```js
console.once(data.HeadingMagnetic)
```


---


#### [MagVar](#Acars.Domain.VSE.Acars.MagVar)

`number`
Magnetic variation

##### Example

```js
console.once(data.MagVar)
```


---


#### [GroundAltitude](#Acars.Domain.VSE.Acars.GroundAltitude)

`number`: Altitude of plane above the ground
The ground altitude (AGL)

##### Example

```js
console.once(data.GroundAltitude)
```


---


#### [PlaneAltitude](#Acars.Domain.VSE.Acars.PlaneAltitude)

`number`: Altitude of plane above MSL
The indicated altitude

##### Example

```js
console.once(data.PlaneAltitude)
```


---


#### [GroundSpeed](#Acars.Domain.VSE.Acars.GroundSpeed)

`number`
If all of the engines are running

##### Example

```js
console.once(data.GroundSpeed)
```


---


#### [VerticalSpeed](#Acars.Domain.VSE.Acars.VerticalSpeed)

`number`
Their vertical speed (+/-)

##### Example

```js
console.once(data.VerticalSpeed)
```


---


#### [VerticalSpeedTouchdown](#Acars.Domain.VSE.Acars.VerticalSpeedTouchdown)

`number`
The vertical speed at touchdown

##### Example

```js
console.once(data.VerticalSpeedTouchdown)
```


---


#### [IndicatedAirspeed](#Acars.Domain.VSE.Acars.IndicatedAirspeed)

`number`
Indicated airspeed

##### Example

```js
console.once(data.AirspeedIndicated)
```


---


#### [UnlimitedFuel](#Acars.Domain.VSE.Acars.UnlimitedFuel)

`Boolean`
If unlimited fuel is enabled

##### Example

```js
console.once(data.UnlimitedFuel)
```


---


#### [FuelQuantity](#Acars.Domain.VSE.Acars.FuelQuantity)

`number`
The current fuel quantity

##### Example

```js
console.once(data.FuelQuantity)
```


---


#### [TotalWeight](#Acars.Domain.VSE.Acars.TotalWeight)

`number`
Total weight of the a ircraft

##### Example

```js
console.once(data.TotalWeight)
```


---


#### [PayloadWeight](#Acars.Domain.VSE.Acars.PayloadWeight)

`number`
Weight of the payload

##### Example

```js
console.once(data.PayloadWeight)
```


---


#### [ZeroFuelWeight](#Acars.Domain.VSE.Acars.ZeroFuelWeight)

`number`
The zero fuel weight

##### Example

```js
console.once(data.ZeroFuelWeight)
```


---


#### [OnGround](#Acars.Domain.VSE.Acars.OnGround)

`Boolean`
If the aircraft is on the ground

##### Example

```js
console.once(data.OnGround)
```


---


#### [ParkBrake](#Acars.Domain.VSE.Acars.ParkBrake)

`Boolean`
If the parking brake is on

##### Example

```js
console.once(data.ParkBrake)
```


---


#### [SimRate](#Acars.Domain.VSE.Acars.SimRate)

`number`
The current simulation rate

##### Example

```js
console.once(data.SimRate)
```


---


#### [SlewActive](#Acars.Domain.VSE.Acars.SlewActive)

`Boolean`
If the slew is enabled

##### Example

```js
console.once(data.SlewActive)
```


---


#### [GearUp](#Acars.Domain.VSE.Acars.GearUp)

`Boolean`
True if the gear is up

##### Example

```js
console.once(data.GearUp)
```


---


#### [OverspeedWarning](#Acars.Domain.VSE.Acars.OverspeedWarning)

`Boolean`
If the overspeed warning is on in the sim

##### Example

```js
console.once(data.OverspeedWarning)
```


---


#### [StallWarning](#Acars.Domain.VSE.Acars.StallWarning)

`Boolean`
If the stall warning is on in the sim

##### Example

```js
console.once(data.StallWarning)
```


---


#### [GForce](#Acars.Domain.VSE.Acars.GForce)

`number`: The current G-Force
The current g-force

##### Example

```js
console.once(data.GForce)
```


---


#### [GForceTouchDown](#Acars.Domain.VSE.Acars.GForceTouchDown)

`number`
The g-force at touchdown

##### Example

```js
console.once(data.GForceTouchDown)
```


---


#### [EngineType](#Acars.Domain.VSE.Acars.EngineType)

`string`
The type of engine
- Piston
- Jet
- None
- Helo
- Rocket
- Turboprop

##### Example

```js
console.once(data.EngineType)
```


---


#### [EngineCount](#Acars.Domain.VSE.Acars.EngineCount)

`number`
The number of engines

##### Example

```js
console.once(data.EngineCount)
```


---


#### [EngineN2Percent](#Acars.Domain.VSE.Acars.EngineN2Percent)

`System.Single[]`



---


#### [EngineN2Average](#Acars.Domain.VSE.Acars.EngineN2Average)

`number`: Get the current engine N2 value (as an average)
The average of the N2 values

##### Example

```js
console.once(data.EngineN2Average);
```


---


#### [EngineFuelFlow](#Acars.Domain.VSE.Acars.EngineFuelFlow)

`System.Single[]`



---


#### [N1Percent](#Acars.Domain.VSE.Acars.N1Percent)

`number`
The total N1 percent

##### Example

```js
console.once(data.N1Percent)
```


---


#### [Throttles](#Acars.Domain.VSE.Acars.Throttles)

`array`



---


#### [EngineRpm](#Acars.Domain.VSE.Acars.EngineRpm)

`number`
Engine RPM

##### Example

```js
console.once(data.EngineRpm)
```


---


#### [EngineMaxRpm](#Acars.Domain.VSE.Acars.EngineMaxRpm)

`number`
The total N1 percent

##### Example

```js
console.once(data.N1Percent)
```


---


#### [ThrottlePct](#Acars.Domain.VSE.Acars.ThrottlePct)

`number`
Average throttle percent

##### Example

```js
console.once(data.ThrottlePct)
```


---


#### [Flaps](#Acars.Domain.VSE.Acars.Flaps)

`number`: Flaps in an index amount
Flap position, from 0

##### Example

```js
console.once(data.Flaps)
```


---


#### [BeaconLights](#Acars.Domain.VSE.Acars.BeaconLights)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.BeaconLights)
```


---


#### [NavigationLights](#Acars.Domain.VSE.Acars.NavigationLights)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.NavigationLights)
```


---


#### [StrobeLights](#Acars.Domain.VSE.Acars.StrobeLights)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.StrobeLights)
```


---


#### [LandingLights](#Acars.Domain.VSE.Acars.LandingLights)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.LandingLights)
```


---


#### [LogoLight](#Acars.Domain.VSE.Acars.LogoLight)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.LogoLight)
```


---


#### [TaxiLights](#Acars.Domain.VSE.Acars.TaxiLights)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.TaxiLights)
```


---


#### [WingLights](#Acars.Domain.VSE.Acars.WingLights)

`Boolean`
Boolean for lights

##### Example

```js
console.once(data.WingLights)
```


---


#### [TransponderCode](#Acars.Domain.VSE.Acars.TransponderCode)

`System.UInt32`: The transponder code
Transponder code

##### Example

```js
console.once(data.BeaconLights)
```


---


#### [ApproachingRunway](#Acars.Domain.VSE.Acars.ApproachingRunway)

[`Runway`](#Acars.Domain.VSE.Runway): If the player is approaching/close to a runway (within 150 meters or so)
This indicates the closest runway to the user

##### Example

```js
<remarks>
    Null if they're not on a runway
    </remarks>
<pre>
  <code class="lang-csharp">if (data.ApproachingRunway) {
                  console.once("Approaching runway: ", data.ApproachingRunway);
              }</code>
</pre>
```


---


#### [Runway](#Acars.Domain.VSE.Acars.Runway)

[`Runway`](#Acars.Domain.VSE.Runway): Save the runway they're on. This gets set if they're taxiing too, so we can keep
track of if we're crossing a runway or something
If the pilot is on the runway

##### Example

```js
if (data.Runway) {
    console.once("On runway: ", data.Runway);
}
```


---


#### [AnyEnginesRunning](#Acars.Domain.VSE.Acars.AnyEnginesRunning)

`Boolean`: Are any engines on?
If any engines are running

##### Example

```js
console.once(data.AnyEnginesRunning)
```


---


#### [AllEnginesRunning](#Acars.Domain.VSE.Acars.AllEnginesRunning)

`Boolean`: Are all the engines on?
If all of the engines are running

##### Example

```js
console.once(data.AllEnginesRunning)
```


---


## Aircraft

#### [Id](#Acars.Domain.VSE.Aircraft.Id)

`string`



---


#### [Icao](#Acars.Domain.VSE.Aircraft.Icao)

`string`



---


#### [Name](#Acars.Domain.VSE.Aircraft.Name)

`string`



---


#### [Ident](#Acars.Domain.VSE.Aircraft.Ident)

`string`



---


#### [Type](#Acars.Domain.VSE.Aircraft.Type)

`string`



---


#### [Status](#Acars.Domain.VSE.Aircraft.Status)

`string`



---


#### [Registration](#Acars.Domain.VSE.Aircraft.Registration)

`string`



---


## Airline

#### [Id](#Acars.Domain.VSE.Airline.Id)

`number`



---


#### [Iata](#Acars.Domain.VSE.Airline.Iata)

`string`: The IATA of the airline



---


#### [Icao](#Acars.Domain.VSE.Airline.Icao)

`string`: The ICAO of the airline



---


#### [Name](#Acars.Domain.VSE.Airline.Name)

`string`: The full name of the airline



---


#### [Ident](#Acars.Domain.VSE.Airline.Ident)

`string`: Show "friendlier" name for airline - the code + name



---


## Airport

#### [Icao](#Acars.Domain.VSE.Airport.Icao)

`string`



---


#### [Iata](#Acars.Domain.VSE.Airport.Iata)

`string`



---


#### [FaaCode](#Acars.Domain.VSE.Airport.FaaCode)

`string`



---


#### [Name](#Acars.Domain.VSE.Airport.Name)

`string`



---


#### [Country](#Acars.Domain.VSE.Airport.Country)

`string`



---


#### [State](#Acars.Domain.VSE.Airport.State)

`string`



---


#### [City](#Acars.Domain.VSE.Airport.City)

`string`



---


#### [SceneryFilePath](#Acars.Domain.VSE.Airport.SceneryFilePath)

`string`



---


#### [SceneryName](#Acars.Domain.VSE.Airport.SceneryName)

`string`



---


#### [Location](#Acars.Domain.VSE.Airport.Location)

`System.Collections.Generic.List{number}`



---


#### [AltitudeFeet](#Acars.Domain.VSE.Airport.AltitudeFeet)

`System.Nullable{number}`



---


#### [TransitionAltitude](#Acars.Domain.VSE.Airport.TransitionAltitude)

`System.Nullable{number}`



---


#### [TransitionLevel](#Acars.Domain.VSE.Airport.TransitionLevel)

`System.Nullable{number}`



---


## Features

#### [Id](#Acars.Domain.VSE.Features.Id)

`string`



---


#### [DateTime](#Acars.Domain.VSE.Features.DateTime)

`number`



---


#### [DateTimeClient](#Acars.Domain.VSE.Features.DateTimeClient)

`number`



---


#### [SimType](#Acars.Domain.VSE.Features.SimType)

`string`



---


#### [AircraftType](#Acars.Domain.VSE.Features.AircraftType)

`string`



---


#### [AircraftIcao](#Acars.Domain.VSE.Features.AircraftIcao)

`string`



---


#### [Title](#Acars.Domain.VSE.Features.Title)

`string`



---


#### [ConfigFile](#Acars.Domain.VSE.Features.ConfigFile)

`string`



---


#### [Location](#Acars.Domain.VSE.Features.Location)

`System.Collections.Generic.List{number}`



---


#### [Heading](#Acars.Domain.VSE.Features.Heading)

`number`



---


#### [HeadingMagnetic](#Acars.Domain.VSE.Features.HeadingMagnetic)

`number`



---


#### [OnGround](#Acars.Domain.VSE.Features.OnGround)

`Boolean`



---


#### [ParkBrake](#Acars.Domain.VSE.Features.ParkBrake)

`Boolean`



---


#### [EngineType](#Acars.Domain.VSE.Features.EngineType)

`string`



---


#### [GearRetractable](#Acars.Domain.VSE.Features.GearRetractable)

`Boolean`



---


#### [UnlimitedFuel](#Acars.Domain.VSE.Features.UnlimitedFuel)

`Boolean`



---


#### [DecisionHeight](#Acars.Domain.VSE.Features.DecisionHeight)

`number`



---


#### [EstCruiseSpeed](#Acars.Domain.VSE.Features.EstCruiseSpeed)

`number`



---


#### [Paused](#Acars.Domain.VSE.Features.Paused)

`Boolean`



---


#### [PropMaxRpm](#Acars.Domain.VSE.Features.PropMaxRpm)

`number`



---


#### [EngineCount](#Acars.Domain.VSE.Features.EngineCount)

`number`



---


#### [FlapsCount](#Acars.Domain.VSE.Features.FlapsCount)

`number`



---


## Flight

#### [Id](#Acars.Domain.VSE.Flight.Id)

`string`



---


#### [Ident](#Acars.Domain.VSE.Flight.Ident)

`string`



---


#### [FlightNumber](#Acars.Domain.VSE.Flight.FlightNumber)

`number`



---


#### [FlightType](#Acars.Domain.VSE.Flight.FlightType)

`string`



---


#### [RouteCode](#Acars.Domain.VSE.Flight.RouteCode)

`string`



---


#### [RouteLeg](#Acars.Domain.VSE.Flight.RouteLeg)

`string`



---


#### [LoadFactor](#Acars.Domain.VSE.Flight.LoadFactor)

`System.Single`



---


#### [LoadFactorVariance](#Acars.Domain.VSE.Flight.LoadFactorVariance)

`System.Single`



---


#### [DepartureICAO](#Acars.Domain.VSE.Flight.DepartureICAO)

`string`



---


#### [ArrivalICAO](#Acars.Domain.VSE.Flight.ArrivalICAO)

`string`



---


#### [AltICAO](#Acars.Domain.VSE.Flight.AltICAO)

`string`



---


#### [Level](#Acars.Domain.VSE.Flight.Level)

`number`



---


#### [Route](#Acars.Domain.VSE.Flight.Route)

`string`



---


#### [DepartureTime](#Acars.Domain.VSE.Flight.DepartureTime)

`string`



---


#### [ArrivalTime](#Acars.Domain.VSE.Flight.ArrivalTime)

`string`



---


#### [FlightTime](#Acars.Domain.VSE.Flight.FlightTime)

`number`



---


#### [Distance](#Acars.Domain.VSE.Flight.Distance)

`number`



---


#### [Fields](#Acars.Domain.VSE.Flight.Fields)

`System.Collections.Generic.Dictionary{string,string}`



---


## FlightPlan

#### [_Points](#Acars.Domain.VSE.FlightPlan._Points)

`System.Collections.Generic.List{Acars.Models.RoutePoint}`



---


#### [FlightId](#Acars.Domain.VSE.FlightPlan.FlightId)

`string`



---


#### [SimbriefId](#Acars.Domain.VSE.FlightPlan.SimbriefId)

`string`



---


#### [FlightPlanType](#Acars.Domain.VSE.FlightPlan.FlightPlanType)

`string`



---


#### [DepartureAirport](#Acars.Domain.VSE.FlightPlan.DepartureAirport)

[`Airport`](#Acars.Domain.VSE.Airport)



---


#### [ArrivalAirport](#Acars.Domain.VSE.FlightPlan.ArrivalAirport)

[`Airport`](#Acars.Domain.VSE.Airport)



---


#### [AltICAO](#Acars.Domain.VSE.FlightPlan.AltICAO)

`string`



---


#### [LoadedFromFile](#Acars.Domain.VSE.FlightPlan.LoadedFromFile)

`Boolean`



---


#### [CruiseAlt](#Acars.Domain.VSE.FlightPlan.CruiseAlt)

`System.Single`



---


#### [TOC](#Acars.Domain.VSE.FlightPlan.TOC)

`Acars.Models.RoutePoint`



---


#### [TOD](#Acars.Domain.VSE.FlightPlan.TOD)

`Acars.Models.RoutePoint`



---


#### [FlightPlanFields](#Acars.Domain.VSE.FlightPlan.FlightPlanFields)

`Acars.Models.FieldCollection`



---


#### [PassengersCount](#Acars.Domain.VSE.FlightPlan.PassengersCount)

`number`



---


#### [CargoWeight](#Acars.Domain.VSE.FlightPlan.CargoWeight)

`number`



---


#### [CurrentPositionIdx](#Acars.Domain.VSE.FlightPlan.CurrentPositionIdx)

`number`



---


#### [PointCount](#Acars.Domain.VSE.FlightPlan.PointCount)

`number`



---


#### [Briefing](#Acars.Domain.VSE.FlightPlan.Briefing)

`string`



---


#### [CurrentPoint](#Acars.Domain.VSE.FlightPlan.CurrentPoint)

`Acars.Models.RoutePoint`



---


#### [NextPoint](#Acars.Domain.VSE.FlightPlan.NextPoint)

`Acars.Models.RoutePoint`



---


#### [Points](#Acars.Domain.VSE.FlightPlan.Points)

`System.Collections.Generic.List{Acars.Models.RoutePoint}`



---


#### [Route](#Acars.Domain.VSE.FlightPlan.Route)

`string`



---


#### [Distance](#Acars.Domain.VSE.FlightPlan.Distance)

`number`



---


## Gate

#### [Id](#Acars.Domain.VSE.Gate.Id)

`string`
The ID of the gate

##### Example

```js
console.log(pirep.ArrivalGate.Id)
```


---


#### [RadiusFeet](#Acars.Domain.VSE.Gate.RadiusFeet)

`number`
The radius of the gate area in feet

##### Example

```js
console.log(pirep.ArrivalGate.RadiusFeet);
```


---


#### [Location](#Acars.Domain.VSE.Gate.Location)

`System.Collections.Generic.List{number}`
Coordinates of this location (x, y)

##### Example

```js
const lat = pirep.ArrivalGate.Location[0]
const lng = pirep.ArrivalGate.Location[1]
```


---


#### [Type](#Acars.Domain.VSE.Gate.Type)

`string`
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

##### Example

```js
console.log(pirep.ArrivalGate.Type);
```


---


## RoutePoint

#### [Name](#Acars.Domain.VSE.RoutePoint.Name)

`string`: Name of the current active nav point



---


#### [Order](#Acars.Domain.VSE.RoutePoint.Order)

`number`: The order it's in



---


#### [Type](#Acars.Domain.VSE.RoutePoint.Type)

`number`: The type of nav point



---


#### [Location](#Acars.Domain.VSE.RoutePoint.Location)

`System.Collections.Generic.List{number}`: Latitude, Longitude



---


#### [Active](#Acars.Domain.VSE.RoutePoint.Active)

`Boolean`



---


#### [DistanceTo](#Acars.Domain.VSE.RoutePoint.DistanceTo)

`number`: Distance of player to this point



---


#### [DistanceToNext](#Acars.Domain.VSE.RoutePoint.DistanceToNext)

`number`: Distance to the next point in the series



---


## Runway

#### [Id](#Acars.Domain.VSE.Runway.Id)

`number`



---


#### [RunwayID](#Acars.Domain.VSE.Runway.RunwayID)

`string`



---


#### [Icao](#Acars.Domain.VSE.Runway.Icao)

`string`



---


#### [LengthFeet](#Acars.Domain.VSE.Runway.LengthFeet)

`number`



---


#### [LengthMetres](#Acars.Domain.VSE.Runway.LengthMetres)

`number`



---


#### [WidthFeet](#Acars.Domain.VSE.Runway.WidthFeet)

`number`



---


#### [WidthMetres](#Acars.Domain.VSE.Runway.WidthMetres)

`number`



---


#### [MagVar](#Acars.Domain.VSE.Runway.MagVar)

`number`



---


#### [HeadingMagnetic](#Acars.Domain.VSE.Runway.HeadingMagnetic)

`number`



---


#### [HeadingTrue](#Acars.Domain.VSE.Runway.HeadingTrue)

`number`



---


#### [Surface](#Acars.Domain.VSE.Runway.Surface)

`string`



---


#### [ThresholdLocation](#Acars.Domain.VSE.Runway.ThresholdLocation)

`System.Collections.Generic.List{number}`



---


#### [ThresholdOffsetFeet](#Acars.Domain.VSE.Runway.ThresholdOffsetFeet)

`number`



---


#### [ThresholdOffsetMetres](#Acars.Domain.VSE.Runway.ThresholdOffsetMetres)

`number`



---


#### [StartLocation](#Acars.Domain.VSE.Runway.StartLocation)

`System.Collections.Generic.List{number}`



---


#### [RunwayCenter](#Acars.Domain.VSE.Runway.RunwayCenter)

`System.Collections.Generic.List{number}`



---


#### [EndLocation](#Acars.Domain.VSE.Runway.EndLocation)

`System.Collections.Generic.List{number}`



---


#### [ClosedForLanding](#Acars.Domain.VSE.Runway.ClosedForLanding)

`Boolean`



---


#### [ClosedForTakeoff](#Acars.Domain.VSE.Runway.ClosedForTakeoff)

`Boolean`



---


#### [Bounds](#Acars.Domain.VSE.Runway.Bounds)

`System.Collections.Generic.List{System.Collections.Generic.List{number}}`



---


#### [DistanceNauticalMiles](#Acars.Domain.VSE.Runway.DistanceNauticalMiles)

`number`



---


#### [DistanceFeet](#Acars.Domain.VSE.Runway.DistanceFeet)

`number`



---


#### [DistanceMetres](#Acars.Domain.VSE.Runway.DistanceMetres)

`number`



---


#### [BearingToTrue](#Acars.Domain.VSE.Runway.BearingToTrue)

`number`



---


#### [BearingToMagnetic](#Acars.Domain.VSE.Runway.BearingToMagnetic)

`number`



---


#### [IsPlayerOnRunway](#Acars.Domain.VSE.Runway.IsPlayerOnRunway)

`Boolean`



---


#### [IsPlayerFacingRunwayDirection](#Acars.Domain.VSE.Runway.IsPlayerFacingRunwayDirection)

`Boolean`



---


#### [ApproachingRunway](#Acars.Domain.VSE.Runway.ApproachingRunway)

`Boolean`



---


#### [ApproachingRunwayDistance](#Acars.Domain.VSE.Runway.ApproachingRunwayDistance)

`number`



---


#### [Acars.Domain.VSE.](#)

See `Acars.Domain.VSE.`



---
