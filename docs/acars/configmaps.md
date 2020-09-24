---
id: configmaps
title: Config Maps
---

Since developers often use custom offsets or datarefs, I can't always know which ones they are. Having configmaps allows you to map an aircraft feature (landing lights, etc) to a "Feature", which is read by ACARS. They're stored in the `configmaps` directory.

:::note
Config maps are now only for FSX/P3D or X-Plane.
:::

## Anatomy of a ConfigMap

A config map is an XML file which looks like this:

```xml title=configmaps/FlightFactorA320.xml
<?xml version="1.0" encoding="utf-8" ?>
<Rules>
  <Rule Simulator="X-Plane" TitleContains="FlightFactor A320">
    <!-- ... -->
    <LandingLights>
      <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>
      <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>
    </LandingLights>
    <!-- ... -->
  </Rule>
</Rules>
```

A rule defines:

1. Who the rule is for
    - The simulator it's for (either `X-Plane` or `FSX/Prepar3d`)
    - The aircraft title contains. This is how it's filtered. It must be broad but also specific to make sure it "catches" the right plane type. 
1. The feature (see below)
    - The maps - a group of datarefs or offsets which constitute that feature being "on" or "enabled"


## Features

The base rules and rule types are in the `configmaps/ConfigMap.xml` file. This list may be expanded in the future.

- BeaconLights
- LandingLights
- NavigationLights
- StrobeLights
- TaxiLight
- WingLight

### Mapping data to a feature

Each `Key` consists a `Type`, `Key` and a `Value`. These are all "AND" together, so every value in the feature must evaluate to true.

```xml title=Example Rule
<Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>
```

1. `Type`, which can be:
    - `Bool` - a `Value` is not required, the sim returns a `1` or `0` for this value
    - `Byte`
    - `Number`/`Double`/`Float`
    - `Int`
    - `Short`
    - `Mask`
2. `Key` - This is where ACARS will look to get the value. 
    - `FSX/Prepar3d` - This is an FSUIPC offset. LVars aren't supported, though you can use LINDA and FSUIPC to map an LVAR to a custom offset, and read it here. This information is up to the aircraft developer to provide.
    - `X-Plane` - This is a dataref value
3. `Value` 
    - This is what value to look for, in the case of a non-boolean type. You can use the OR operator (`|`) to separate multiple values

#### Examples

In this example, both of the datarefs, in this last, the left and right landing lights, must have a value of `1` or `2` in order for the landing lights to be considered "on"

```xml
<LandingLights>
    <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>
    <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>
</LandingLights>
```

In this example for FSUIPC, the offsets use a bitmask to consider the beacon lights being on:

```xml
<BeaconLights>
    <Key Type="Mask" Key="0x0D0C" Value="2"/>
</BeaconLights>
```

## Creating a config map

To create a config map, you can copy one of the existing files and modify it.

- Name the file as specific as possible
- Don't edit existing ones, they'll get overwritten