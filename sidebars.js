module.exports = {
  docs: [
    'intro',
    'requirements',
    'download',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/basics',
        'guides/finances',
      ]
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/uploading',
        'installation/vhost',
        'installation/installation',
        'installation/cron',
        'installation/importing',
        'installation/updating',
        'installation/issues',
      ]
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'config/files',
        'config/language',
        'config/email',
        'config/optimizing',
        'config/notifications',
        'config/backups',
      ]
    },
    {
      type: 'category',
      label: 'Themes and Layouts',
      items: [
        'customize/layouts',
        'customize/theming',
        'customize/maps',
      ]
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/environment',
        'developers/building-assets',
        'developers/addons',
        'developers/awards',
      ]
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/auth',
        'api/apis',
      ]
    },
    {
      type: 'category',
      label: 'ACARS',
      items: [
        'acars/overview',
        'acars/eula',
        'acars/install-server',
        'acars/user-guide',
        'acars/customization',
        'acars/configmaps',
      ]
    },
    'help',
  ]
};
