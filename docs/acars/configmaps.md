---
id: configmaps
title: Config Maps
---

Since developers often use custom offsets or datarefs, and not the defaults, having configmaps allows you to map an aircraft feature (landing lights, etc) to a "feature", which tells ACARS where to read the data for those features. They're stored in the `configmaps` directory.

The configmaps are downloaded by the client on startup from the [configmaps repository](https://github.com/phpvms/configmaps), so updates can be more easily pushed out.

:::note
Config maps are now only for FSX/P3D or X-Plane. A lot of developers use the default offsets or datarefs, so it may not be required to change anything
:::

If you create a configmap for an aircraft, please let me know, I can include it in ACARS to be distributed out. That would be much appreciated! **Always create a new file**, otherwise the defaults that are included with the distribution will be overwritten by an updates.

## Anatomy of a ConfigMap

A config map is an XML file which looks like this:

```xml title="configmaps/FlightFactorA320.xml (truncated)"
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
        - Each word is looked for and it's AND'd. In the example above, "FlightFactor" and "A320" must be present
        - For FSX/P3d, the value looked at is the aircraft title field, offset `0x3D00`
        - For X-Plane, the value looked at is `sim/aircraft/view/acf_descrip`
1. The feature (see below)
    - The maps - a group of datarefs or offsets which constitute that feature being "on" or "enabled"

In the above example, for the FlightFactor A320, the landing lights are controlled by two datarefs, both of which the values need to be 1 or 2 for the landing lights to be considered "on".

## Features

The base rules and rule types are available. This list may be expanded in the future.

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
    - `Mask` - Find a value in a bit mask
    - `String` - look for exactly matches
    - `IntArray`/`FloatArray` - (X-Plane) - where the DataRef returns an array of integers or floats
2. `Key` - This is where ACARS will look to get the value. 
    - `FS9/FSX/Prepar3d` - This is an FSUIPC offset. LVars aren't supported, though you can use LINDA and FSUIPC to map an LVAR to a custom offset, and read it here. This information is up to the aircraft developer to provide.
      - **NOTE** You can use "FSUIPC" and it will detect it for the Prepar3d/FS9/FSX family
    - `X-Plane`/`xplane` - This is the dataref value
    - `Microsoft Flight`/`MSFS` - Currently unused
3. Value specifier, must be one of:
    - `Value` - this is what value to look for, in the case of a non-boolean type. You can use the OR operator (`|`) to separate multiple values
    - `ValueGt`/`ValueGte` - Value greater than or greater than equal to, respectively
    - `ValueLt`/`ValueLte` - Value less than or less than or equal to, respectively
    - `ValueBtwn` - Value between; this must include two values like `0|1`, and will include the first value up to the first
4. `Index` (required for `IntArray` and `FloatArray`)
    - If using the above types, which index of the array to look for the value in (starts from 0)

:::note
A note for X-Plane: the `sim/cockpit/electrical` datarefs are usually not great to use - X-Plane emulates the electrical system, so the values may toggle between 0 and 1, for example, when the strobe light is blinking, the electrical will toggle between 0 and 1. These would show up as the strobe being on. You generally want to check any switches (see Debugging below)
:::

### Ignoring Features

To ignore a feature in the rules (for example, if a feature doesn't work properly), add `Ignored="True"` to the feature:

```xml
<LandingLights Ignored="True">
```

This will then ignore any landing light rules for that specific aircraft. You can also ignore a specific value, like if a switch has a 3 positions - 0 for off, 1 for on, and 3 for auto, you can ignore a rule with the value of 3:

```xml
<LandingLights IgnoreIf="3">
  <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>
  <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>
</LandingLights>
```
In this case, all of the `Key` values must match `3` in order for it to be ignored in any landing lights rules. In this next example, it's reading from an array of integers that's returned by the sim, looking at the 2nd index, and ignoring the value if it's a 3:

```xml
<StrobeLights IgnoreIf="3">
  <Key Type="IntArray" Index="1" Key="some/integer/array" Value="1|2"/>
</LandingLights>
```

### Flaps

You can also add the flaps naming to specific aircraft which might have different values. The flaps have an numeric index value that's reported and then a corresponding flap name:

```xml
<Rule Simulator="X-Plane" TitleContains="Some Aircraft Name">
  <Flaps>
    <Flap Index="0" Text="Up" />
    <Flap Index="1" Text="CONF 1+1" />
    <Flap Index="2" Text="CONF 2" />
    <Flap Index="3" Text="CONF 3" />
    <Flap Index="4" Text="CONF FULL" />
  </Flaps>
</Rule>
```

Then these flaps settings will be used over the generic aircraft ICAO flaps namings. You can also ignore a flap state if it's a "no-op" state:

```xml
<Rule Simulator="X-Plane" TitleContains="Some Aircraft Name">
  <Flaps>
    <Flap Index="0" Text="Up" />
    <Flap Index="1" Text="" Ignore="True" />
    <Flap Index="2" Text="CONF 2" />
    <Flap Index="3" Text="CONF 3" />
    <Flap Index="4" Text="CONF FULL" />
  </Flaps>
</Rule>
```

### Examples

In this example, both of the datarefs, in this last, the left and right landing lights, must have a value of `1` or `2` in order for the landing lights to be considered "on". This aircraft config also has differing flap names.

```xml
<Rule Simulator="X-Plane" TitleContains="Some Aircraft Name">
  <LandingLights>
      <Key Type="Int" Key="a320/Overhead/LightLandL" Value="1|2"/>
      <Key Type="Int" Key="a320/Overhead/LightLandR" Value="1|2"/>
  </LandingLights>
  <Flaps>
    <Flap Index="0" Text="Up" />
    <Flap Index="1" Text="CONF 1+1" />
    <Flap Index="2" Text="CONF 2" />
    <Flap Index="3" Text="CONF 3" />
    <Flap Index="4" Text="CONF FULL" />
  </Flaps>
</Rule>
```

In this example for FSUIPC, the offsets use a bitmask to consider the beacon lights being on:

```xml
<Rule Simulator="Prepar3d" TitleContains="Some Aircraft Name">
  <BeaconLights>
      <Key Type="Mask" Key="0x0D0C" Value="2"/>
  </BeaconLights>
</Rule>
```

For the remaining features, the X-Plane defaults will be used.

## Creating a config map

To create a config map, you can copy one of the existing files and modify it.

- The file must be in the `configmaps/` directory
- Name the file as specific as possible
- Don't edit existing ones, they'll get overwritten

## Debugging

To debug whether the lights are working or not, you can open the "Debug" window. To open it, go to the "Map" page, and double-click on "Flight Status". It will open up the debug window, then you can scroll down to the lights, and see the values for the lights being returned:

![](img/data-window.png)
