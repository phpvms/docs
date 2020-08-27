---
id: building-assets
title: Building Assets
---

The default CSS/Javascript is built and packaged using [webpack](https://webpack.js.org/).

## Required Tools

nodejs and yarn are required to build. Follow the [instructions for your platform](https://nodejs.org/en/download/) to install `nodejs` and then install `yarn`. After installing it, run the following in your phpVMS folder (the same directory as the `package.json` file). This installs webpack and the associated dependencies into `node_modules`

```sh
yarn install
```

---

## Building CSS

For the frontend and backend, the CSS is built from SASS templates, which are based on bootstrap, with some pre-built templates.

The frontend template uses Bootstrap 4 built using [now-ui](https://demos.creative-tim.com/now-ui-kit/index.html); the SASS is located in `resources/sass/now-ui`.

The backend template is built using Bootstrap 3, with the template being based on [paper-dashboard](https://www.creative-tim.com/product/paper-dashboard); the SASS files are located in `resources/sass/admin`.

---

## Building JS

To update the Javascript files (for example, if you update the livemap file, etc), you need to rebuild the JS files:

```
yarn run production
```

Then reupload the files from `public/assets`