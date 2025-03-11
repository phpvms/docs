---
id: rules
title: Custom Rules
---

For users with Premium, you can create their own rules, in Javascript. See [Custom Packaging](./packaging.md) on how to create a distribution for your VA, which can include rules, sounds and callbacks.

See the documentation at the [acars-pdk repository](https://github.com/phpvms/acars-pdk) on how to create aircraft configs, rules, and package them for distribution

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
