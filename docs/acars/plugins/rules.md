---
id: rules
title: Custom Rules
---

For users with Premium, you can create their own rules, in Javascript. See
[Custom Packaging](./packaging.md) on how to create a distribution for your VA,
which can include rules, sounds and callbacks.

See the documentation at the
[acars-pdk repository](https://github.com/phpvms/acars-pdk) on how to create
aircraft configs, rules, and package them for distribution

---

## Rules Configuration

A rule looks like this:

```typescript
export default class ExampleRule implements Rule {
  meta: Meta = {
    id: 'ExampleRule',
    name: 'An Example Rule',
    enabled: true,
    message: 'A example rule!',
    states: [],
    repeatable: false,
    cooldown: 60,
    max_count: 3,
  };

  violated(
    pirep: Pirep,
    data: Telemetry,
    previousData?: Telemetry,
  ): RuleValue {}
}
```

A rule also has several components:

- Needs to implement the `Rule` interface
- Has a `meta`, section, hich gives some general information about the
  configuration:
  - `id` - A unique ID for this rule
  - `name` - a name for this rule, it's used as the reference
  - `enabled`
  - `message` - a default message when the rule is violated
  - `states` - a list of `PirepState` of when this rule is to be run
  - `repeatable` - if it can be violated multiple times
  - `cooldown` - The amount of time, in seconds, between violations
  - `max_count` - if it's repeatable, how many times it can maximally be
    vioalted
- A `violated()` method, which returns a `RuleValue`
  - Passed the `pirep` and the `data` (`Telemetry` type)

### Looking at aircraft feature states

To lookup the state of an aircraft feature, look at the `data.Features`
dictionary. The following rule is evaluated during pushback, and checks that the
battery is on:

```typescript
import {AircraftFeature, PirepState} from './defs';

export default class BatteryOnDuringPushback implements Rule {
  meta: Meta = {
    id: 'ExampleRule',
    name: 'An Example Rule',
    enabled: true,
    message: 'A example rule!',
    states: [PirepState.Pushback],
    repeatable: false,
    cooldown: 60,
    max_count: 3,
  };

  violated(pirep: Pirep, data: Telemetry, previousData?: Telemetry): RuleValue {
    // First check that the battery is declared as part of the aircraft's feature set
    if (
      AircraftFeature.Battery in data.features &&
      // And then check its value to see if it's on or off
      data.features[AircraftFeature.Battery] == false
    ) {
      return ['The battery must be on during pushback'];
    }
  }
}
```

### Returning a `RuleValue`

The return value has multiple possible values, sending on

```typescript
export type RuleValue = undefined | boolean | [string?, number?];
```

If a rule is passing/hasn't been violated:

```typescript
return;
return false;
```

If a rule has been violated:

```typescript
return true;
```

Or, if you want to return a custom message:

```typescript
return ['message'];
```

Or, if you want to return a message and points:

```typescript
return ['message', points];
```

If you want to return just the points, you can return:

```typescript
return ['', points];
```

`points` and `message` are optional - if omitted, they're pulled from the `meta`
block

### Helper Methods

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

Create a `package.json` file in the root of the `rules` folder, so it looks
like:

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

Next, grab the `mocks.js` file from here. This is used to mock the methods that
ACARS provides, so that in the tests, there are faked versions available. If you
cloned the sample repository, this file is already there.

Then, install [tap](https://node-tap.org) using:

```bash
npm install --save-dev tap
```

Next, create a `tests/lights.test.js`. The example shown above is the `Rule`
class that's being assumed to be used. The important parts are commented:

```js
import t from 'tap';
import * as Lights from '../lights.js';
import {createMocks} from './mocks.js';

t.before(createMocks);

t.test('Test the lights function', (t) => {
  const rule = new Lights.Rule();
  // You can pass the data that is only relevent to your rule here in the PIREP and Data objects
  t.equal(rule.evaluate({}, {}), 0);
  t.end();
});
```

:::note

You can use webpack and babel to create a smaller distribution, which you can
then create a packaged, minimized build, which then can be used by ACARS. So
you're welcome to create your rules using Typescript and transpile them.

:::

Then you can finally run your tests:

```bash
cd rules
npm run tests
```

:::note

You can use [the clock plugin](https://node-tap.org/plugins/clock) to fast
forward time - call your rule, advance the clock, call it again and check for
violations

:::
