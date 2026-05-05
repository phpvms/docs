/**
 * Single sidebar split into three top-level audience sections, all expanded
 * by default so it reads as one continuous list with section headings.
 *
 *   phpVMS       — operators running a phpVMS install
 *   ACARS        — operators, pilots, and ACARS plugin developers
 *   Developers   — phpVMS core, addon, and theme authors
 */
module.exports = {
  docs: [
    // ---------------------------------------------------------------------
    // phpVMS — for VA operators running phpVMS
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'phpVMS',
      collapsed: false,
      collapsible: true,
      link: {type: 'doc', id: 'intro'},
      items: [
        {
          type: 'category',
          label: 'Introduction',
          items: ['requirements', 'download', 'help'],
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: ['guides/basics', 'guides/finances'],
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            'installation/uploading',
            'installation/vhost',
            'installation/installation',
            'installation/docker',
            'installation/cron',
            'installation/updating',
            'installation/legacy-upgrade',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'config/files',
            'config/email',
            'config/notifications',
            'config/backups',
            'config/optimizing',
          ],
        },
        {
          type: 'category',
          label: 'Layouts',
          items: ['customize/layouts'],
        },
        {
          type: 'category',
          label: 'OAuth',
          items: ['oauth/discord', 'oauth/ivao', 'oauth/vatsim'],
        },
      ],
    },

    // ---------------------------------------------------------------------
    // ACARS — unified: operators, pilots, and plugin developers
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'ACARS',
      collapsed: false,
      collapsible: true,
      link: {type: 'doc', id: 'acars/overview'},
      items: [
        {
          type: 'category',
          label: 'For Operators',
          items: ['acars/install-server'],
        },
        {
          type: 'category',
          label: 'For Pilots',
          items: [
            'acars/client/install',
            'acars/client/configuration',
            'acars/client/flying',
            'acars/client/debugging',
            'acars/customization',
          ],
        },
        {
          type: 'category',
          label: 'Plugin Development',
          items: [
            'acars/plugins/getting-started',
            'acars/plugins/tutorial',
            'acars/plugins/aircraftconfigs',
            'acars/plugins/rules',
            'acars/plugins/callbacks',
            'acars/plugins/reference',
          ],
        },
      ],
    },

    // ---------------------------------------------------------------------
    // Developers — phpVMS core, addon, and theme authors
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'Developers',
      collapsed: false,
      collapsible: true,
      link: {type: 'doc', id: 'developers/environment'},
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: ['developers/building-assets'],
        },
        {
          type: 'category',
          label: 'Theming',
          items: ['customize/theming', 'customize/maps'],
        },
        {
          type: 'category',
          label: 'Addons & Modules',
          link: {type: 'doc', id: 'developers/addons/overview'},
          items: [
            'developers/addons/overview',
            'developers/addons/routing-controllers',
            'developers/addons/database',
            'developers/addons/templating',
            'developers/addons/events',
            'developers/addons/patterns',
            'developers/addons/publishing',
            'developers/awards',
          ],
        },
        {
          type: 'category',
          label: 'REST API',
          items: ['api/overview', 'api/auth'],
        },
      ],
    },
  ],
};
