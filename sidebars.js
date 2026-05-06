/**
 * Single sidebar split into three top-level audience sections, all expanded
 * by default so it reads as one continuous list with section headings.
 *
 *   phpvms       — operators running a phpvms install
 *   ACARS        — operators, pilots, and ACARS plugin developers
 *   Developers   — phpvms core, addon, and theme authors
 */
module.exports = {
  docs: [
    // ---------------------------------------------------------------------
    // phpvms — for VA operators running phpvms
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'phpvms',
      collapsed: false,
      collapsible: true,
      items: [
        'welcome',
        'requirements',
        'whats-new',
        {
          type: 'category',
          label: 'Concepts',
          items: ['guides/basics', 'guides/finances'],
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            {
              type: 'category',
              label: 'Get the Files',
              items: [
                'installation/download',
                'installation/vhost',
                'installation/docker',
              ],
            },
            'installation/installation',
            'installation/updating',
            'installation/cron',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'config/basics',
            'config/email',
            'config/notifications',
            'config/backups',
            'config/advanced',
            {
              type: 'category',
              label: 'OAuth',
              items: [
                'config/oauth/discord',
                'config/oauth/ivao',
                'config/oauth/vatsim',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Theming',
          items: ['customize/layouts', 'customize/theming', 'customize/maps'],
        },
        'help',
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
      items: [
        'acars/overview',
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
    // Developers — phpvms core, addon, and theme authors
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'Developers',
      collapsed: false,
      collapsible: true,
      items: [
        'developers/environment',
        {
          type: 'category',
          label: 'Addons',
          items: [
            'developers/addons/overview',
            'developers/addons/publishing',
            'developers/addons/routing-controllers',
            'developers/addons/database',
            'developers/addons/templating',
            'developers/addons/events',
            'developers/addons/patterns',
            'developers/building-assets',
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
