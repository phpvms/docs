---
id: aircraftconfigs
title: Aircraft Configs
---

Since developers often use custom offsets or datarefs, and not the defaults, having configmaps allows you to map an aircraft feature (landing lights, etc) to a "feature", which tells ACARS where to read the data for those features. They're stored in the `configmaps` directory.

If you create a configmap for an aircraft, please let me know, I can include it in ACARS to be distributed out. That would be much appreciated! **Always create a new file**, otherwise the defaults that are included with the distribution will be overwritten by an updates.

See the documentation at the [acars-pdk repository](https://github.com/phpvms/acars-pdk) on how to create aircraft configs, rules, and package them for distribution
