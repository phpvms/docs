module.exports = {
  docs: [
    'intro',
    'requirements',
    'download',
    {
      type: 'category',
      label: 'Concepts',
      items: [   
        'concepts/basics',
        'concepts/finances',
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
        'installation/upgrading',
      ]
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'config/files',
        'config/optimizing',
      ]
    },
    {
      type: 'category',
      label: 'Themes and Layouts',
      items: [
        'customize/layouts',
        'customize/theming',
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
        'acars/install-server',
        'acars/install-client',
        'acars/flight',
      ]
    },
    'help',
  ]
};