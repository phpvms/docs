module.exports = {
  mainSidebar: {
    'Getting Started': {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/requirements',
        'getting-started/download',
      ],
    },
    'Installation': [
      'installation/uploading',
      'installation/vhost',
      'installation/installation',
      'installation/cron',
      'installation/importing',
      'installation/upgrading',
    ],
    'Configuration': [
      'config/files',
      'config/optimizing',
    ],
    'Themes and Layouts': [
      'customize/layouts',
      'customize/theming',
      'customize/building-assets',
    ],
    'Developers': [
      'developers/environment',
      'developers/addons',
      'developers/awards',
    ],
    'API': [
      'api/overview',
      'api/auth',
      'api/apis',
    ],
    'ACARS': [
      'acars/install-server',
    ],
    'Help': [
      'help/getting-help',
    ]
  },
};