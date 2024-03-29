---
id: rules
title: Custom Rules
---

For users with Premium, you can create their own rules, in Javascript. See [Custom Packaging](./packaging.mdx) on how to create a distribution for your VA, which can include rules, sounds and callbacks.

---

## How Rules Work

- The rules are evaluated once every second
- The `meta` field is required
- The `evaluate()` method is passed 3 peices of information:
  1. The `Pirep` object - this contains all of the data about the PIREP, along with some additional information
  1. The `Acars` object - contains current "sensor" information about the aircraft
  1. The `PreviousAcars` object - contains the previous sensor information

You can also store data from point in time for comparisons.

#### Meta Object

- `name` - A name is required for your rule. Somewhat descriptive is good
- `enabled` - `true` or `false` - whether this rule gets run or not (default: true)
- `message` - When the rule is violated, this is the message put into the log
- `phases` - A list of phases in which this rule will run. If it's blank, that means all phases
  - "pushback"
  - "taxi out",
  - "takeoff"
  - "enroute",
  - "approach"
  - "final"
  - "landed"
  - "taxi in"
  - "on block"
  - "arrived"
  - "paused"
- `repeatable` - If this rule can be violated multiple times or not (default: false)
- `cooldown` - How much time, in seconds, between violations (default: 60)
- `max_count` - If `repeatable`, how many times can it be violated (default: 3)

Fields with a default value can be omitted.

#### PIREP Object Fields

-

#### ACARS Object Fields

```json
{
  "Id": "fefiaxrpbwf",
  "Paused": false,
  "Replay": false,
  "Latitude": 30.19957,
  "Longitude": -97.67124,
  "Pitch": 0.1,
  "Bank": 0,
  "Heading": 0,
  "HeadingMagnetic": 6,
  "MagVar": 6.83,
  "GroundAltitude": 0,
  "PlaneAltitude": 549.72,
  "GroundSpeed": 0,
  "AirspeedIndicated": 0,
  "AirspeedRedline": 0,
  "VerticalSpeed": 0,
  "VerticalSpeedDbl": 0,
  "VerticalSpeedTouchdown": 0,
  "UnlimitedFuel": false,
  "FuelQuantity": 34923.32,
  "TotalWeight": 148763.32,
  "PayloadWeight": 0,
  "ZeroFuelWeight": 113840,
  "OnGround": true,
  "ParkBrake": false,
  "SimRate": 0,
  "SimRateDbl": 1,
  "SimGroundSpeed": 1,
  "SlewActive": false,
  "GearUp": false,
  "OverspeedWarning": false,
  "StallWarning": false,
  "GForce": 0,
  "GForceDbl": 0.9983974358974359,
  "GForceTouchDown": 1.001602564102564,
  "EngineType": 1,
  "EngineCount": 2,
  "EngineN2Percent": [
    54.93,
    54.93
  ],
  "EngineFuelFlow": [
    763.75,
    763.75
  ],
  "N1Percent": 0,
  "Throttles": null,
  "EngineRpm": 0,
  "EngineMaxRpm": 0,
  "ThrottlePct": 0,
  "Engine1ThrottlePct": 0,
  "Engine2ThrottlePct": 0,
  "Engine3ThrottlePct": 0,
  "Engine4ThrottlePct": 0,
  "Flaps": 0,
  "BeaconLights": false,
  "NavigationLights": false,
  "StrobeLights": false,
  "LandingLights": false,
  "LogoLight": true,
  "TaxiLights": false,
  "WingLights": true,
  "TransponderCode": 1200,
  "DateTime": "2024-03-18T00:21:07Z",
  "DateTimeClient": "2024-03-17T23:21:47.1523743Z"
}
```
---

## Rule Definitions

A rule looks like:

```js title=rules/myrule.js
/**
 * Rules are contained in a class. The class needs to be called Rule
 */
export default class MyRule {
    /**
     * This is required
     * @type {{name: string, message: string, enabled: boolean, phases: string[]}}
     */
    meta = {
        // A unique identifier
        'name': 'Your Rule Name',

        // Should this be run?
        'enabled': true,

        // This is the message that will show up in the log
        'message': 'Your lights should have been on',

        // The phases in which this rule should be run
        'phases': ['takeoff', 'enroute'],
    }

    /**
     * This is called to evaluate the rule. This should return the number of points
     * that should be deducted
     *
     * @param {Object.<string, any>} pirep
     * @param {Object.<string, any>} data
     * @param {Object.<string, any>} previousData
     *
     * @returns {number}
     */
    evaluate(pirep, data, previousData) {
        return 0
    }
}
```

- `meta` - This is required so ACARS knows some basic information about your script
- `evaluate` - Called with the current PIREP information, and the current ACARS data. This needs to return an integer value.

#### General Notes

- There are no `setTimeout` or `async`/`await` calls

---

## Methods Available

You can also browse the built-in methods available in the `mocks.js` file. They're all accessed using the `Acars` namespace, which is injected into the global namespace.

#### log/debug/error/trace

On the `console` object, only a few methods are available. This will log out to the ACARS log

```js
const some_var = 'x'
console.log('This is some information', x)
console.debug('This is a debug')
console.error('...')
console.trace('...')  // this will also show a stack trace
```

##### once

A `console.once(key, ...args)` is available; since the rules run pretty high frequency.

```
console.once(string key, ...arguments to log)
console.log('pirep', pirep)
```

The `key` parameter is used to determine if it's been logged out laready or not.

#### ViolatedAfterDelay(name, timeout, callback)

- name: This is the name of the rule
- timeout: In milliseconds, after how long it should be considered as violated
- callback: The function that checks for the violation

```js
return Acars.ViolatedAfterDelay("landing_lights_on", 5000, () => {
  if (data.GroundAltitude > 10000 && data.LandingLights) {
    return -10;
  }

  return 0;
})
```

#### Acars.Get(name) / Acars.Set(name, value)

This can be used to store some data which will be persisted across crashes or stops/starts. This will be emptied on every new flight

- `name`: string
- `value`: string. You can use JSON.stringify() to store objects, but I recommend only smaller items

```js
const some_obj = {
  foo: 'bar'
}

Acars.Set('myobj', JSON.stringify(some_obj))

// ...
var retrieved_obj = JSON.parse(Acars.Get('myobj'))
```

---

## Testing

What I do is create a tests folder, so it looks like this:

```
rules/
  tests/
    lights.test.js  < will be created below
  lights.js
  package.json < will created below
manifest.json
```

Create a `package.json` file in the root of the `rules` folder, so it looks like:

```json
{
  "name": "VA Rules",
  "version": "1.0.0",
  "author": "Your Name",
  "type": "module",
  "scripts": {
    "tests": "tap"
  }
}
```

Next, grab the `mocks.js` file from here. This is used to mock the methods that ACARS provides, so that in the tests, there are faked versions available. If you cloned the sample repository, this file is already there.

Then, install [tap](https://node-tap.org) using:

```bash
npm install --save-dev tap
```

Next, create a `tests/lights.test.js`. The example shown above is the `Rule` class that's being assumed to be used. The important parts are commented:

```js
import t from 'tap'
import * as Lights from '../lights.js'
import {createMocks} from "./mocks.js"

t.before(createMocks)

t.test('Test the lights function', t => {
    const rule = new Lights.Rule()
    // You can pass the data that is only relevent to your rule here in the PIREP and Data objects
    t.equal(rule.evaluate({}, {}), 0)
    t.end()
})
```

:::note

You can use webpack and babel to create a smaller distribution, which you can then create a packaged, minimized build, which then can be used by ACARS. So you're welcome to create your rules using Typescript and transpile them.

:::

Then you can finally run your tests:

```bash
cd rules
npm run tests
```

:::note

You can use [the clock plugin](https://node-tap.org/plugins/clock) to fast forward time - call your rule, advance the clock, call it again and check for violations

:::
