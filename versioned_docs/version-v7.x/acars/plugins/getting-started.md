---
id: getting-started
title: Getting Started
---

## Overview

The plugins and scripts for vmsACARS are written in Typescript, and then
transpiled to JS. Typescript ensures that the interfaces required are following,
and that the proper things are returned so ACARS can run them. While Typescript
isn't required, it's best to use it to ensure proper values are passed -
especially around enums.

This PDK includes build scripts to:

- Convert Typescript to JS, with type checking/linting
- Stamp the distribution package with versioning
- GitHub Actions to build and deploy
- Scripts to help with development

---

## The General Steps

First, fork the [acars-pdk](https://github.com/phpvms/acars-pdk) repository.
Follow the setup below. Then start editing the scripts in the `/src` directory,
depending on what you want to do. Then, you upload it, and phpVMS will
distribute it to all of your pilots.

- Complete the setup, including the `.env` file
- Disable downloading the latest updates
- Run `npm run dev` to then test in ACARS
- Run `npm run dist` to create the ZIP
- Upload this zip somewhere
- Update the phpVMS ACARS Admin to point to the above URL
- ???
- Profit!

---

## Setup

#### Required:

- nodejs/npm or pnpm
- Typescript
- Gulp

Run:

```shell
npm install
```

#### Customizing using the `.env` file:

Next, copy the `.env.default` to `.env`. Then edit this file to change the
profile name.

The available options:

- `ACARS_PROFILE_NAME` - The default profile to use for testing
- `ACARS_CONFIG_PATH` - The default usually works, but you can change this to
  the path where you put ACARS, if you did a local install
- `ACARS_SCRIPTS_PATH` - Uses the `ACARS_PROFILE_NAME` to build the path to
  where the scripts should be sent after a build
- `ACARS_DIST_ZIP` - The distribution filename

---

## Commands

Then there are multiple commands you can use:

### Build

This creates a `dist` directory, with all the JS files in it

```shell
npm run build
```

This doesn't copy it anywhere, just runs a compile and build

### Automatically build and copy to ACARS

This will set up a watch, and then automatically transpile and then copy the
contents of the `dist` folder into the `ACARS_PROFILE_PATH` directory that's
defined in the `.env` file.

```shell
npm run dev
```

### Packaging a distribution file

Running:

```shell
npm run dist
```

Creates a `dist.zip` (you can rename it in the `.env` file) after running a
build. You can modify the `gulpfile.mjs` to include other files - by default,
anything in the `dist` directory gets packaged. You can then configure GitHub
Actions to then upload this zip somewhere for ACARS to download.

---

### Disable Downloading Latest Defaults

Sometimes, it's just useful to disable downloading of the latest defaults, and
just edit the scripts that are included to see how they work. To do that, create
a file in your `Documents/vmsacars` directory, called `appsettings.local.json`,
and place the following:

```json filename="appsettings.local.json"
{
  "Config": {
    "App": {
      "DownloadConfig": false
    }
  },
  "Serilog": {
    "MinimumLevel": {
      "Default": "Verbose"
    }
  }
}
```

You can also adjust the log level to "Information", "Debug" or "Verbose"
("Debug" is recommended)
