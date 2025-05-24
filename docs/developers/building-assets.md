---
id: building-assets
title: Building Assets
---

The default CSS/Javascript is built and packaged using
[webpack](https://webpack.js.org/). The main Javascript files used are compiled
together into a single JS file, which is then minimized. While most settings are
exposed, you might still want to customize them.

---

## Source Layout

The "source" files for the assets are in one of two places:

#### Javascript

- `resources/js` - Has the JS files required for one of:
  - `admin` - JS files for the admin panel
  - `frontend` - JS files required for the frontend

#### CSS

The default skins use open-source free templates based on Bootstrap. The SASS
files are located in either:

- `resources/sass/admin` - The admin panel SASS files
- `resources/sass/now-ui` - The frontend SASS files

These are then compiled into CSS files, which are placed into their own
respective directories

#### Compiled Assets

The compiled assets are placed in 3 separate folders (by default):

```
public/assets/admin
public/assets/frontend
public/assets/global
```

Each of those folders have a `js` and `css` folder, and the respective assets
are placed in those folders. After building those assets, the files are placed
into there.

:::caution On an update, the files in `public/assets/*` will be overwritten, so
be careful when updating to make sure those files aren't overwritten. You can do
a diff against the original JS files in `resources/js` and then rebuild, to make
sure your changes are included :::

---

## Required Tools

nodejs and npm are required to build. Follow the
[instructions for your platform](https://nodejs.org/en/download/) to install
`nodejs`. After installing it, run the following in your phpVMS folder (the same
directory as the `package.json` file). This installs webpack and the associated
dependencies into `node_modules`.

```bash
npm install
```

Building both the CSS and Javascript use the same command.

---

## Building CSS

For the frontend and backend, the CSS is built from SASS templates, which are
based on bootstrap, with some pre-built templates.

The frontend template uses Bootstrap 4 built using
[now-ui](https://demos.creative-tim.com/now-ui-kit/index.html); the SASS is
located in `resources/sass/now-ui`.

The backend template is built using Bootstrap 3, with the template being based
on [paper-dashboard](https://www.creative-tim.com/product/paper-dashboard); the
SASS files are located in `resources/sass/admin`.

To build the CSS, run the build command:

```bash
npm run production
```

---

## Building JS

The Javascript files are divided into two types:

- `vendor.js` - This contains all of the vendor files that are compiled and
  minimized together
- `app.js` - These are the main Javascript files used by the frontend

To update the Javascript files (for example, if you update the livemap file,
etc), you need to rebuild the JS files:

```bash
npm run production
```

Then reupload the files from `public/assets`.
