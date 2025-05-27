---
id: callbacks
title: Callback Scripts
---

## Callback scripts

The CallbackHook interface provides a framework for creating scripts that
interact with the ACARS system. There are three core methods that every script
implementing this interface must provide.

```typescript file=example.ts
import {PirepState} from '../defs';
import {CallbackHook, Meta} from '../types/callback';
import {Pirep, Telemetry} from '../types/types';

/**
 * This is an example script. It's not very useful, but it's a good example of
 * how to write a script and some of the functionality.
 */
export default class ExampleScript implements CallbackHook {
  meta: Meta = {
    id: 'example_script',
    name: 'Example Script',
    enabled: false,
  };

  setup() {
    Acars.Set('above_1k', false);
    Acars.Set('launched_message', false);
  }

  /**
   * This once a second.
   * @param pirep
   * @param data
   */
  run(pirep: Pirep, data: Telemetry): void {
    Acars.SetPirepField('Loaded', 'True');
    Acars.AddPirepLogOnce('loaded_msg', 'Example script loaded');

    // Example of setting a flag to check later on
    if (data.groundAltitude.Feet > 1000) {
      Acars.Set('above_1k', true);
      Acars.SetPirepField('Above 1000 feet', 'True');
    }

    /*
     * Just a silly example, if they crossed above 1000 feet and then they went
     * back below it, send a message about that
     */
    if (Acars.Get('above_1k') === true && data.groundAltitude.Feet < 1000) {
      Acars.AddPirepLog("Went above 1000', now back down");
    }
  }

  /**
   * Called on phase changes
   */
  phaseChange(
    pirep: Pirep,
    data: Telemetry,
    newPhase: PirepState,
    oldPhase: PirepState,
  ) {
    Acars.AddPirepLog(`Phase changed from ${oldPhase} to ${newPhase}`);

    if (newPhase == PirepState.Pushback) {
      Acars.PlayAudio('departure.mp3');
    }
  }
}
```

## Core Methods

### 1. `setup()`

#### Purpose

The method is called once when your script is initially loaded. This is the
ideal place to initialize any variables, state, or settings that your script
will use.

#### When It Runs

- Executes exactly once at script initialization
- Runs before any other methods in your script

#### Example Use Cases

- Setting initial state values using `Acars.Set()`
- Initializing flags or counters
- Setting up any pre-conditions required by your script

#### Example

```typescript
setup()
{
  Acars.Set('above_1k', false)
  Acars.Set('launched_message', false)
}
```

### 2. `run()`

```typescript
run(pirep
:
Pirep, data
:
Telemetry, previousData ? : Telemetry
):
void
```

#### Purpose

The `run()` method is the heart of your script's functionality. It executes at
regular intervals, allowing you to continuously monitor flight conditions and
perform actions based on that data.

#### When It Runs

- Executes approximately every 500ms (twice per second)
- Continues to run throughout the duration of the flight

#### Parameters

- : Contains information about the current Pilot Report `pirep`
- : Contains the current telemetry data including altitude, speed, position,
  etc. `data`
- (optional): Contains telemetry data from the previous execution `previousData`

#### Example Use Cases

- Monitoring altitude, speed, or position changes
- Triggering events based on specific flight conditions
- Updating flight logs
- Playing audio cues at appropriate times

````
### 3. `phaseChange()`
``` typescript
phaseChange(pirep: Pirep, data: Telemetry, newPhase: PirepState, oldPhase: PirepState): void
````

#### Purpose

The `phaseChange()` method is triggered whenever the flight transitions between
different operational phases (such as boarding, taxiing, in-flight, approach,
etc.).

#### When It Runs

- Executes whenever the flight phase/state changes
- May run multiple times during a flight, but only at phase transition points

#### Parameters

- : Contains information about the current Pilot Report `pirep`
- : Contains the current telemetry data at the moment of phase change `data`
- : The PirepState being transitioned to `newPhase`
- : The PirepState being transitioned from `oldPhase`

#### Example Use Cases

- Logging phase transitions
- Playing specific audio for different flight phases
- Performing checks or verification at critical flight stages
- Triggering phase-specific behaviors or requirements

#### Notes

- Don't call any timer functions here, they won't properly trigger

#### Example

```typescript
phaseChange(pirep
:
Pirep, data
:
Telemetry, newPhase
:
PirepState, oldPhase
:
PirepState
)
{
  Acars.AddPirepLog(`Phase changed from ${oldPhase} to ${newPhase}`)

  if (newPhase === PirepState.TaxiOut) {
    Acars.PlayAudio('departure.mp3')
  }

  if (newPhase === PirepState.Enroute) {
    Acars.SetPirepField('Reached Cruise', 'True')
  }
}
```

## Implementing Your Own Script

To create your own script, implement all three methods of the CallbackHook
interface, and don't forget to define the required property with a unique ID and
name for your script in the `meta` block

```typescript
export default class MyScript implements CallbackHook {
  meta: Meta = {
    id: 'my_unique_script_id',
    name: 'My Script Name',
    enabled: true,
  };

  setup() {
    // Initialize your script
  }

  run(pirep: Pirep, data: Telemetry, previousData?: Telemetry) {
    // Regular processing
  }

  phaseChange(
    pirep: Pirep,
    data: Telemetry,
    newPhase: PirepState,
    oldPhase: PirepState,
  ) {
    // Handle phase transitions
  }
}
```

### Sounds

Place your sounds, in mp3, 44100hz stereo format in the `src/sounds` directory (
create it if it doesn't exist). When you call `Acars.PlayAudio`, it will look in
this directory for them.
