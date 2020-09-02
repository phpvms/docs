module.exports = {
  title: 'phpVMS Docs',
  url: 'https://docs.phpvms.net',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'phpvms',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'phpVMS Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        // src: 'img/logo_blue_bg.svg',
      },
      items: [],
    },
    prism: {
      additionalLanguages: ['bash', 'http', 'php'],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} phpvms`,
    },
    googleAnalytics: {
      trackingID: 'UA-100567975-3',
      anonymizeIP: true,
    },
    links: [
      {
        href: 'https://forum.phpvms.net',
        prependBaseUrlToHref: false,
        label: 'Forum',
        position: 'right',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'getting-started/intro',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/phpvms/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
