---
id: install-client
title: Installation (Client)
---

---
## Simulator Configuration

### FSX/Prepar3d Configuration

To use FSX/Prepar3d, you need to install:

- [FSUIPC](http://www.fsuipc.com) - the licensed version isn't required.
- [MakeRwys](http://fsuipc.simflight.com/beta/MakeRwys.zip)

After installing both, run `MakeRwys`. `MakeRwys` also needs to be re-run whenever there are scenery changes (if you want gates/runways to be updated).


### X-Plane Configuration

X-Plane uses a custom plugin. Open the `X-Plane` folder, and copy the `AcarsConnect` folder into  your `Resources\plugins` folder.

![](img/plugin-copy.png)

---

## Client Config

### Get the URL and API Key

You can either enter your URL and API key manually, or download the settings config file from your phpVMS profile. To download the config file, visit your VA and go to your profile:

![](img/profile-config-download.png)

And place it a folder called `My Documents/phpVMS`:

![](img/mydocs-settingsxml.png)

### Client Settings

After downloading the latest ACARS version, on startup, you'll be brought to the configuration/settings page:

![](img/cli-setup.png)

### Sim Selection

After entering your URL and API key, select the simulator, and then select the path to the simulator (for Prepar3d or X-Plane)

:::info
FSX/Prepar3d requires the `MakeRwys.exe` file, which can be downloaded from the [FSUIPC Page](http://fsuipc.simflight.com/beta/MakeRwys.zip). It needs to be placed in the same directory as FSX/Prepar3d, and it will create the required files needed to scan.
:::

After selecting the directory, click `Re-Scan Scenery`. This will load the scenery database into ACARS for it to run/load later

---

## Hardware Configuration

If you're using hardware to control the sim, ACARS heavily relies on several offsets with FSUIPC, particularly the parking brake. Ensure that the offset `0x0BC8` gets set
