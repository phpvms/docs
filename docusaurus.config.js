module.exports = {
  title: 'phpVMS Docs',
  url: 'https://docs.phpvms.net',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'phpvms',
  projectName: 'docs',
  themeConfig: {
    algolia: {
      apiKey: 'dcc8192acd61e5e79696dcae190a1d0f',
      indexName: 'phpvms',
      contextualSearch: true
    },
    navbar: {
      title: 'phpVMS Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        // src: 'img/logo_blue_bg.svg',
      },
      items: [
        {
          href: 'https://forum.phpvms.net',
          label: 'Forum',
          position: 'right',
        },
        {
          href: 'https://discord.gg/wvAmMnd',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/nabeelio/phpvms',
          //label: 'GitHub',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      //additionalLanguages: ['php'],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} phpvms`,
    },
    gtag: {
      trackingID: 'UA-100567975-3',
      anonymizeIP: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
        docs: {
          id: 'intro',
          // homePageId: 'intro',
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/phpvms/docs/tree/master/',
          // disableVersioning: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
