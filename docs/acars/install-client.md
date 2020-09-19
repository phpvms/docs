---
id: install-client
title: Installation (Client)
---

## 1. Client Config

After downloading the latest ACARS version, on startup, you'll be brought to the configuration/settings page:

![](img/cli-setup.png)

### Download the config file:

You can either download the settings config file from your phpVMS profile, or just enter it manually. To download the config file, visit your VA and go to your profile:

![](img/profile-config-download.png)

And place it a folder called `My Documents/phpVMS`:

![](img/mydocs-settingsxml.png)

---

## 2. Sim Selection

After entering your URL and API key, select the simulator, and then select the path to the simulator (for Prepar3d or X-Plane)

:::info
FSX/Prepar3d requires the `MakeRwys.exe` file, which can be downloaded from the [FSUIPC Page](http://fsuipc.simflight.com/beta/MakeRwys.zip). It needs to be placed in the same directory as FSX/Prepar3d, and it will create the required files needed to scan.
:::

After selecting the directory, click `Re-Scan Scenery`. This will load the scenery database into ACARS for it to run/load later
