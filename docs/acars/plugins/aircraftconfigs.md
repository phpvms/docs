---
id: aircraftconfigs
title: Aircraft Configs
---

Since developers often use custom offsets or datarefs, and not the defaults,
having configmaps allows you to map an aircraft feature (landing lights, etc) to
a "feature", which tells ACARS where to read the data for those features.
They're stored in the `configmaps` directory.

If you create a configmap for an aircraft, please let me know, I can include it
in ACARS to be distributed out. That would be much appreciated! **Always create
a new file**, otherwise the defaults that are included with the distribution
will be overwritten by an updates.

---

## Aircraft Configuration:

Aircraft rules are required to inherit the `AircraftConfig` abstract class. An
example class would look like:

```typescript
import {AircraftConfigSimType, AircraftFeature, FeatureType} from '../defs';
// Additional mports are left out for now

export default class FenixA320 extends AircraftConfig {
  meta: Meta = {
    id: 'fenix_a320',
    name: 'Fenix A320',
    sim: AircraftConfigSimType.MsFs,
    enabled: true,
    priority: 2,
  };

  features: FeatureAddresses = {
    // Aircraft feature
    [AircraftFeature.BeaconLights]: {
      'lvar name': FeatureType.Int,
    },
  };

  flapNames: FlapNames = {
    0: 'UP',
    1: 'CONF 1',
    2: 'CONF 1+F',
    3: 'CONF 2',
    4: 'CONF 3',
    5: 'FULL',
  };

  match(title: string, icao: string, config_path: string): boolean {
    // Check the aircraft title and return true/false if this matches
  }

  beaconLights(lvar_value: number): FeatureState {
    // Check the lvar_value if the
  }
}
```

The configuration is a class which has a few different components.

1. `meta`, which gives some general information about the configuration:

- `name` - a name for this script
- `sim` - The simulator it's for
  - `AircraftConfigSimType.XPlane`
  - `AircraftConfigSimType.Fsuipc`
  - `AircraftConfigSimType.MsFs`
  - `AircraftConfigSimType.MsFs20`
  - `AircraftConfigSimType.MsFs24`
- `enabled`
  - `priority` - from 1 (lowest) to 10 (highest).
    - If there are multiple rules that match this, then which one takes
      priority.
    - All the built-in rules are at a priority 1
    - Aircraft specifics rules are priority 2.
    - I recommend using a priority of 3 or higher. More on this below

2. `features` - this is the type `FeatureAddresses` - see `defs.ts` for the
   definitions

- MSFS - the lookups you enter are LVars
- X-Plane - the looks ups are via datarefs
- FSUIPC - the lookups are offsets

3. `flapNames` - see below
4. `match()`

- This needs to return a boolean
- A method (`match()`) which passes some information about the starting aircraft
  - For MSFS, it's the aircraft ICAO
  - For FSX/P3d, the value looked at is the aircraft title field, offset
    `0x3D00`
  - For X-Plane, the value looked at is `sim/aircraft/view/acf_descrip`
  - This method can be used to determine if this rule should match

5. Methods for the different features (see below)

- The maps - a group of datarefs or offsets which constitute that feature being
  "on" or "enabled"

In the above example, for the Fenix A320, the landing lights are controlled by
two datarefs, both of which the values need to be 1 or 2 for the landing lights
to be considered "on".

#### Targeting MSFS

There are 3 possible values for targetting MSFS in the configs:

- `AircraftConfigSimType.MsFs` - This will apply the configuration to both 2020
  and 2024
- `AircraftConfigSimType.MsFs20` - This will be for 2020 ONLY
- `AircraftConfigSimType.MsFs24` - This will be for 2024 ONLY

### Features

Features are essentially stored in a dictionary of dictionaries, of type
`FeatureAddresses`:

```typescript
features: FeatureAddresses = {
  // Aircraft feature
  [AircraftFeature.BeaconLights]: {
    'Lookup Address': FeatureType.Int,
  },
};
```

In the above example:

- `AircraftFeature.BeaconLights` is an enum value of the feature type. It's put
  in `[]` because it's a variable name
- It's set to an object, where the keys are the lookup address or lvar.
- `Lookup Address` is where to find this data:
- `FeatureType.Int` - is the type of value that's returned.

The different features available are:

- beaconLights
- landingLights
- logoLights
- navigationLights
- strobeLights
- taxiLights
- wingLights
- flaps

The different features contain how to look up the value, and the type. You can
have multiple variables to be read and looked at for a feature. Each feature
then corresponds to a method which is called to return if that feature is on or
off. That method will have the equivalent number of arguments for each data
reference

### Lookup Locations

- For FSUIPC, the lookup location is the offset
- For X-Plane, it's the DRef
- For MSFS, it's either the LVar name, or a Simvar:
  - Simvar has to be prefixed with `A:`, e.g, `A:LIGHT LOGO,bool`, and then the
    type

Examples:

```typescript
export default class Example extends AircraftConfig {
  features: FeatureAddresses = {
    // FSUIPC Offset Example:
    [AircraftFeature.NavigationLights]: {
      '0x0D0C': FeatureType.Int,
    },

    // MSFS LVar Example:
    [AircraftFeature.LogoLights]: {
      switch_116_a: FeatureType.Int,
    },

    // MSFS Simvar Example:
    [AircraftFeature.StrobeLights]: {
      'A:LIGHT STROBE,bool': FeatureType.Bool,
    },

    // X-Plane Example
    [AircraftFeature.BeaconLights]: {
      'sample/dataref/1': FeatureType.Bool,
      'sample/dataref/2': FeatureType.Bool,
    },
  };

  /**
   * An example of a method to check the beacon lights
   *
   * @param {boolean} The value of /sample/dataref_1
   * @param {boolean} The value of /sample/dataref_2
   * @returns {FeatureState}
   */
  beaconLights(dataref_1: boolean, dataref_2: boolean): FeatureState {
    if (dataref_1 && dataref_2) {
      return true;
    }

    return false;
  }
}
```

### Equality Checking

I recommend using `==` instead of `===` for equality comparisons, since the
types coming from the sim may not always match up or be cast properly (e.g, `1`
being returned instead of `true`)

### Ignoring Features

To ignore a feature in the rules (for example, if a feature doesn't work
properly), set the feature to false:

```typescript
import {AircraftFeature} from './defs';

features: FeatureAddresses = {
  // Aircraft feature
  [AircraftFeature.BeaconLights]: {
    'lvar name': FeatureType.Int,
  },
  [AircraftFeature.LandingLights]: false,
};
```

### Mixed priorities

If there are two scripts which match a particular aircraft, and a feature is
omitted, it will use the lower priority one in place. For example:

```typescript
import {FeatureAddresses} from './aircraft';

export default class Example extends AircraftConfig {
  meta: Meta = {
    // ...
    priority: 1,
  };

  features: FeatureAddresses = {
    [AircraftFeature.BeaconLights]: {
      'sample/dataref/1': FeatureType.Bool,
      'sample/dataref/2': FeatureType.Bool,
    },
    [AircraftFeature.LandingLights]: {
      'sample/landing/light/1': FeatureType.Bool,
      'sample/landing/light/2': FeatureType.Bool,
    },
  };
}

export default class ExampleOverride {
  meta: Meta = {
    // ...
    priority: 10,
  };

  features: FeatureAddresses = {
    [AircraftFeature.LandingLights]: {
      'override/landing/light/1': FeatureType.Bool,
      'override/landing/light/2': FeatureType.Bool,
    },
  };
}
```

In this case, the lookups used for the rules will be:

- beaconLights - `sample/dataref/1|2`
- landingLights - `override/landing/light/1|2`
