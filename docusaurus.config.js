const {themes} = require('prism-react-renderer');

module.exports = {
  title: 'phpVMS Docs',
  url: 'https://docs.phpvms.net',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'phpvms',
  projectName: 'docs',
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    imageZoom: {
      selector: '.markdown img',
      options: {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.7)',
        scrollOffset: 0,
      },
    },
    algolia: {
      appId: 'A3V8IXF4VF',
      apiKey: '0dc12617e3ca951eb79977c8733b0fe2',
      indexName: 'phpvms',
      contextualSearch: true,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'phpvms, vmsacars, virtual airline, virtual airline management system, phpvms documentation, phpvms user guide, phpvms installation guide',
      },
    ],
    navbar: {
      title: 'phpVMS Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        // src: 'img/logo_blue_bg.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
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
      theme: themes.github,
      additionalLanguages: ['php', 'bash'],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} phpvms`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: false,
        docs: {
          // homePageId: 'intro',
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/phpvms/docs/tree/master/',
          disableVersioning: false,
          lastVersion: 'v7.x',
          versions: {
            current: {
              label: 'v8.x',
              path: 'next',
              banner: 'unreleased',
            },
            'v7.x': {
              label: 'v7.x',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-100567975-3',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/acars/install-client',
            to: '/acars/user-guide',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 400,
        min: 200,
        steps: 2,
        disableInDev: false,
      },
    ],
    'plugin-image-zoom',
    /*
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#2196f3',
          },
        ],
      },
    ],
    */
  ],
};
