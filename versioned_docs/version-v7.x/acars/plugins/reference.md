---
id: reference
title: Reference
---

There are several core files/interfaces that are included:

## Types

### `src/global.d.ts`

This describes the globally available functions, including the logging methods
available through `console` and `Acars`.

### `src/types.d.ts`

This contains all the base types:

- `Pirep` - data that's available about a PIREP, and it's associated interfaces
  (`Airport`, `Runway`, etc.)
- `Telemetry` - telemetry information that's come out of the simulator
- `User` - information about the current user

It also includes other detailed type information, for example `Length`, so you
can retrieve that type of information.

---
