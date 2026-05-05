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
              path: '8.x',
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
          trackingID: 'G-DW1H3QQJ5B',
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
            // Legacy path (no longer exists in any version) → v7.x user guide
            from: '/acars/install-client',
            to: '/acars/user-guide',
          },
        ],
        // When v8.x ships as the released version, set the
        // PHPVMS_DOCS_V8_RELEASED env var (or flip the default below to
        // true) and also change `lastVersion` in the docs preset to 'v8.x'.
        // This will rewrite every URL like /8.x/foo to /foo (the new
        // canonical root path), keeping legacy /8.x/* links working.
        createRedirects(existingPath) {
          const v8Released =
            process.env.PHPVMS_DOCS_V8_RELEASED === 'true' || false;
          if (!v8Released) {
            return undefined;
          }
          // After v8.x is released, the v8 docs live at the site root ('/').
          // Map root paths to their /8.x/* equivalents so old links resolve.
          if (
            existingPath !== '/' &&
            !existingPath.startsWith('/v7.x/') &&
            !existingPath.startsWith('/8.x/')
          ) {
            return [`/8.x${existingPath}`];
          }
          return undefined;
        },
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
