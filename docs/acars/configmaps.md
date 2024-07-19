---
id: configmaps
title: Config Maps
---

Since developers often use custom offsets or datarefs, and not the defaults, having configmaps allows you to map an aircraft feature (landing lights, etc) to a "feature", which tells ACARS where to read the data for those features. They're stored in the `configmaps` directory.

If you create a configmap for an aircraft, please let me know, I can include it in ACARS to be distributed out. That would be much appreciated! **Always create a new file**, otherwise the defaults that are included with the distribution will be overwritten by an updates.

## Anatomy of a ConfigMap

A config map is a Javascript file which looks like this:

```javascript title="aircraft/_default_xplane.js (truncated)"
export default class DefaultXPlane {
  meta = {
    name: 'xplane default',
    enabled: true,
    priority: 1,
    sim: 'xplane',
  }

  features = {
    beaconLights: { 'sim/cockpit2/switches/beacon_on': 'bool' },
    // ...
  }

  match(title, icao, config_path) {
    return true
  }

  beaconLights(value) {
    return value === true
  }

  /// ...
}
```

The configuration is a class which has a few different components.

1. `meta`, which gives some general information about the configuration:
    - `name` - a name for this script
    - `sim` - The simulator it's for (either `xplane`, `fsuipc` or `msfs`)
    - `enabled`
      - `priority` - from 1 (lowest) to 10 (highest). If there are multiple rules which match this, 
        then which one takes priority. All the built-in rules are at a priority 1
2. `features`
    - MSFS - the lookups you enter are LVars
    - X-Plane - the looks ups are via datarefs
    - FSUIPC - the lookups are offsets
3. `match()`
    - A method (`match()`) which passes some information about the starting aircraft
        - For MSFS, it's the aircraft ICAO
        - For FSX/P3d, the value looked at is the aircraft title field, offset `0x3D00`
        - For X-Plane, the value looked at is `sim/aircraft/view/acf_descrip`
        - This method can be used to determine if this rule should match
4. Methods for the different features (see below)
    - The maps - a group of datarefs or offsets which constitute that feature being "on" or "enabled"

In the above example, for the FlightFactor A320, the landing lights are controlled by two datarefs, both of which the values need to be 1 or 2 for the landing lights to be considered "on".

## Features

Features are stored in a dictionary of dictionaries:

```javascript
features = {
  beaconLights: { 
    'sim/cockpit2/switches/beacon_on': 'bool' 
  },
  landingLights: { 
    'sim/cockpit2/switches/landing_lights_on': 'bool' 
  },
  logoLights: { 
    'sim/cockpit2/switches/logo_lights_on': 'bool' 
  },
  navigationLights: { 
    'sim/cockpit2/switches/navigation_lights_on': 'bool' 
  },
  strobeLights: { 
    'sim/cockpit2/switches/strobe_lights_on': 'bool' 
  },
  taxiLights: { 
    'sim/cockpit2/switches/taxi_light_on': 'bool' 
  },
  wingLights: { 
    'sim/cockpit2/switches/wing_lights_on': 'bool' 
  },
  flaps: {
    0: 'UP',
    1: '0',
    2: 'DIAL TO',
    3: '11',
    4: '15',
    5: '28',
    6: '40',
  },
}
```

The different features available are:

  - beaconLights
  - landingLights
  - logoLights
  - navigationLights
  - strobeLights
  - taxiLights
  - wingLights
  - flaps

The different features contain how to look up the value, and the type. You can have multiple variables to be 
read and looked at for a feature. Each feature then corresponds to a method which is called to return if
that feature is on or off. That method will have the equivalent number of arguments for each data reference

Example:

```javascript
export default class Example {
  features = {
    beaconLights: {
      'sample/dataref/1': 'bool',
      'sample/dataref/2': 'bool',
    }
  }

  beaconLights(dataref_1, dataref_2) {
    if (dataref_1 && dataref_2) {
      return true;
    }
    
    return false;
  }
}
```

### Ignoring Features

To ignore a feature in the rules (for example, if a feature doesn't work properly), set the feature to false:

```javascript
export default class Example {
  features = {
    beaconLights: {
      'sample/dataref/1': 'bool',
      'sample/dataref/2': 'bool',
    },
    landingLights: false
  }
}
```

### Mixed priorities

If there are two scripts which match a particular aircraft, and a feature is omitted, it will use the lower priority
one in place. For example:

```javascript
export default class Example {
  meta = {
    // ...
    priority: 1
  }
  
  features = {
    beaconLights: {
      'sample/dataref/1': 'bool',
      'sample/dataref/2': 'bool',
    },
    landingLights: {
      'sample/landing/light/1': 'bool',
      'sample/landing/light/2': 'bool',
    },
  }
}

export default class ExampleOverride {
  meta = {
    // ...
    priority: 10
  }

  features = {
    landingLights: {
      'override/landing/light/1': 'bool',
      'override/landing/light/2': 'bool',
    },
  }
}
```

In this case, the lookups used for the rules will be:

  - beaconLights - `sample/dataref/1|2`
  - landingLights - `override/landing/light/1|2`


### Flaps

You can also add the flaps naming to specific aircraft which might have different value. The `flaps()` method is 
passed an index.

```javascript
export default class Example {
  flaps(index) {
    if (index == 0) {
      return "UP"
    }
  }
}
```
