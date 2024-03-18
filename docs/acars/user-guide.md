---
id: user-guide
title: User Guide
---

# Installation (Client)

---
## .NET 6.0 Runtime

If you don't have this installed, ACARS will prompt you to download it. But if you want to download ahead of time, visit the [Download Page from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime), and select the x64 version for Desktop apps

![](img/runtime-path-dn6.png)

## ACARS Client

After downloading the zip, just extract the client into a folder (e.g, on your desktop into a folder called `ACARS`). Then you can create a desktop shortcut from the `acars.exe` for easier access.

---

## Simulator Configuration

---

### FSX/Prepar3d Configuration

To use FSX/Prepar3d, you need to install:

- [FSUIPC](http://www.fsuipc.com) - the licensed version isn't required.
- [MakeRwys](http://fsuipc.simflight.com/beta/MakeRwys.zip)

After installing both, run `MakeRwys`. `MakeRwys` also needs to be re-run whenever there are scenery changes (if you want gates/runways to be updated).


### X-Plane Configuration

X-Plane uses a custom plugin. Open the `X-Plane` folder, and copy the `AcarsConnect` folder into  your `Resources\plugins` folder.

![](img/plugin-copy.png)


### MSFS Configuration

#### WASM Module

If you're using Microsoft Flight Simulator, then to read the LVars from the sim, you need the `FSUIPC WASM Module (Version) + WAPI (Version)` from [FSUIPC](http://www.fsuipc.com/)

After downloading, open the zip, there is a zip file called `fsuipc-lvar-module.zip`. In it, there is a folder called `fsuipc-lvar-module` - place that in your `Community` folder.

#### Scenery
:::caution
Due to an MSFS limitation, sceneries purchased through the MSFS store can't be read because they're encrypted. Only sceneries purchased outside of the store and manually placed in the `Community` directory can be read
:::

To use MSFS, select "Microsoft Flight Simulator" from the simulator list and you will have two options:

    - "Native" - this will try to scan all of the scenery folders and BGL files. 
    - "MakeRwys" - this will use the MakeRwys output (same as P3D). The files output by `MakeRwys` need to be placed in the root of the `Community` folder

#### Permission Denied Errors

If you're getting a permission denied error, see [this thread](https://forum.navigraph.com/t/faq-navigraph-navdata-center-could-not-find-access-simulator/2104)

---

## Client Config

---

### Get the URL and API Key

You can either enter your URL and API key manually, or download the settings config file from your phpVMS profile. To download the config file, visit your VA and go to your profile:

![](img/profile-config-download.png)

And place it a folder called `My Documents/phpVMS`:

![](img/mydocs-settingsxml.png)

### Client Settings

After downloading the latest ACARS version, on startup, you'll be brought to the configuration/settings page:

![](img/cli-setup.png)

### Sim Selection

After entering your URL and API key, select the simulator, and then select the path to the simulator's root folder (for Fs9/FsX/Prepar3d or X-Plane)

:::info
FSX/Prepar3d requires the `MakeRwys.exe` file, which can be downloaded from the [FSUIPC Page](http://fsuipc.simflight.com/beta/MakeRwys.zip). It needs to be placed in the same directory as FSX/Prepar3d, and it will create the required files needed to scan.
:::

After selecting the directory, click `Re-Scan Scenery`. This will load the scenery database into ACARS for it to run/load later

---

### Mac/Linux Configuration

To run ACARS with X-Plane on the Mac or Linux, you have to run Windows in a VM. On the Mac, I use [VMWare Fusion](https://www.vmware.com/products/fusion.html), which is free for personal use. The procedure below will be similar for Parallels or Virtual Box, which is roughly:

1. Add the X-Plane folder as a shared folder/mount to the Windows VM
1. Copy the `AcarsConnect` plugin to the `Resources\plugin` folder (see above)
1. Set the IP address in ACARS to the IP of the host

In order to get the scenery scanning working properly, add X-Plane as a shared folder:

![](img/vmware-sharing.png)

Then click "Open In Guest", and you can follow the above instructions for then installing the plugin. Then, in ACARS, properly set the "Scenery Path" and IP to your Mac machine:

:::info
If you configure it to point to the X-Plane root, the default share path for VMWare Fusion would be `\\vmware-host\Shared Folders\X-Plane 11`.
:::

![](img/vmware-acars-config.png)

Then you can launch/run ACARS as usual.

---

### Hardware Configuration

If you're using hardware to control the sim, ACARS heavily relies on several offsets with FSUIPC, particularly the parking brake. Ensure that the offset `0x0BC8` gets set

---

## Flight Planning

There are several ways to configure flight:

1. Enter everything manually
2. Load a flight from the flight search


### Entering everything manually

This is simple, just type in everything for your flight, referring to your VA site.

### Flight Search or Bids

To load a flight from the search or bids, in the menu, select flight search. If your VA has search enabled, you can click search. If you click on "Bids", it will show your available bids.

If there is a SimBrief flight plan also loaded with the bid from the site, it will show up as "Yes" in that column.

### Flight Plans

In order for the route map to show all of your waypoints, you need to load a flight plan. vmsACARS does not have/contain any navigation information on its own, it's all loaded from a loaded flight plan. The follow flight plan types are supported:

1. FSX/P3D (`.pln`)
1. X-Plane (`.fms`) 
1. MSFS (`.pln`) 
1. Simbrief (`.xml`, exported from the SimBrief site or the SimBrief Downloader. There is a "phpVMS" flight plan type that's available)

The routes/navpoints are then loaded from the flight plan, along with the TOD (from MSFS/Simbrief), and filed along with your PIREP.

---

## Lights and Aircraft Features

Lights and other features for aircraft may not work on all aircraft, due to the way developers differently implement the on/off switches/flags for these (for example, PMDG implements their lights differently for each aircraft). There is a `ConfigMap.xml` file that can be edited (make sure to create backups before updated - enhancements to this coming soon) which uses the aircraft name/title to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to detect those features.

---

## Flight Phases

ACARS defines multiple flight phases, and the transitions between them are detailed below. These rules are attemped to strike a balance between detecting the phases properly for both IFR and VFR flights.

#### Boarding

- You must be on the ground to be able to start a flight. The parking brake should also be on

##### Notes

- The players starting position (gate, parking or runway) is attempted to be found. Otherwise, it's recorded as "Unknown"

#### Pushback

- Your aircraft has started moving, and is under 5kts
- If you started the flight with the brakes on and they are released

#### Notes

- The "Blocks Off" time is recorded
- For helicopters, this phase is recorded but is essentially bypassed once you leave the ground

#### Taxi Out

- The ground speed is above 5

#### Notes

- The "Taxi Out" timer is started
- For helicopters, this phase is recorded but is essentially bypassed once you leave the ground

#### Takeoff

- If you're detected to be on a runway, and your ground speed is over 30
- If you haven't been detected on a runway, your ground speed is over 80 (rolling)
- You're no longer on the ground

##### Notes

- For helicopters, this phase is recorded but is essentially bypassed once you leave the ground

#### Enroute

- You're 500' AGL or above (to attempt to catch the earlier point) OR the gear are up (if they are retractable)
- More than 3 miles from the airport

#### Approach

- If you're at the TOD
    - If a flight plan is loaded and has a "TOD" waypoint (SimBrief, MSFS), that will be used
    - Otherwise, the TOD is calculated using [this method](https://www.flyingmag.com/technique/tip-week/calculating-top-descent/) (`TOD = (Plane Alt - Field Alt) / 3`)
- If you went above 10k' and are now below it

#### Final

- Below 3000' AGL
- Gear are down (if they are retractable)
- Flaps are down

#### Landing

- You're on the ground

##### Notes:

- The "End Flight" button shows up

#### Taxi In

- You're off of the runway and your ground speed is < 30

##### Notes

- The "End Flight" button shows up

#### Arrived

- The "End Flight" button must be clicked to set the flight to arrived
- Once "End Flight" is clicked, a button to file the PIREP will show

##### Notes

- The "End Flight" button shows up
- The parking/gate you're at will be attempted to be figured out

--

## Debugging

To debug whether the lights are working or not, you can open the "Debug" window. To open it, go to the "Map" page, and double-click on "Flight Status". It will open up the debug window, then you can scroll down to the lights, and see the values for the lights being returned:

![](img/data-window.png)
