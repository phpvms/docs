/**
 * /landing-samples/use-cases — Goal-driven composition.
 *
 * Inspiration: Stripe docs landing. Lead with what users want to do
 * (run a VA / fly / extend) rather than who they are. Each use case is
 * a horizontal panel with a paragraph and bulleted product links.
 *
 * Sections: hero · 3 use-case panels · browse by product · common
 * questions · help.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from '../landing-samples.module.css';

const useCases = [
  {
    title: 'Run a virtual airline',
    desc: 'Stand up a phpvms instance, configure your fleet and routes, onboard pilots, and process flight reports. Everything you need to operate a VA from day one.',
    links: [
      {label: 'Installation', to: '/8.x/installation'},
      {label: 'Docker setup', to: '/8.x/installation/docker'},
      {label: 'Configuration', to: '/8.x/config/basics'},
      {label: 'Email & notifications', to: '/8.x/config/email'},
      {label: 'OAuth providers', to: '/8.x/config/oauth/discord'},
      {label: 'Backups', to: '/8.x/config/backups'},
    ],
  },
  {
    title: 'Fly with vmsACARS',
    desc: 'Track flights automatically. Install the desktop client, connect to your VA, and let ACARS file PIREPs while you fly in MSFS, X-Plane, or P3D.',
    links: [
      {label: 'ACARS overview', to: '/8.x/acars/overview'},
      {label: 'Install the client', to: '/8.x/acars/client/install'},
      {label: 'Configure simulators', to: '/8.x/acars/client/configuration'},
      {label: 'Flying with ACARS', to: '/8.x/acars/client/flying'},
      {label: 'Customization', to: '/8.x/acars/customization'},
      {label: 'Debugging', to: '/8.x/acars/client/debugging'},
    ],
  },
  {
    title: 'Extend phpvms',
    desc: 'Build addons, themes, ACARS plugins, and integrations. phpvms is fully extensible through Laravel-style routes, events, and a REST API.',
    links: [
      {label: 'Dev environment', to: '/8.x/developers/environment'},
      {label: 'Addon overview', to: '/8.x/developers/addons/overview'},
      {
        label: 'Routes & controllers',
        to: '/8.x/developers/addons/routing-controllers',
      },
      {label: 'Events', to: '/8.x/developers/addons/events'},
      {label: 'ACARS plugin tutorial', to: '/8.x/acars/plugins/tutorial'},
      {label: 'REST API', to: '/8.x/api/overview'},
    ],
  },
];

const productGroups = [
  {
    label: 'phpvms',
    items: [
      {icon: '🚀', title: 'Installation', to: '/8.x/installation'},
      {icon: '⚙️', title: 'Configuration', to: '/8.x/config/basics'},
      {icon: '🎨', title: 'Theming', to: '/8.x/customize/theming'},
      {icon: '📚', title: 'Concepts', to: '/8.x/guides/basics'},
    ],
  },
  {
    label: 'ACARS',
    items: [
      {icon: '🖥️', title: 'Server install', to: '/8.x/acars/install-server'},
      {icon: '👨‍✈️', title: 'Client install', to: '/8.x/acars/client/install'},
      {icon: '🔌', title: 'Plugins', to: '/8.x/acars/plugins/getting-started'},
      {icon: '🧰', title: 'Customization', to: '/8.x/acars/customization'},
    ],
  },
  {
    label: 'Developers',
    items: [
      {icon: '📦', title: 'Addons', to: '/8.x/developers/addons/overview'},
      {icon: '🛰️', title: 'REST API', to: '/8.x/api/overview'},
      {icon: '🏆', title: 'Awards', to: '/8.x/developers/awards'},
      {icon: '🧪', title: 'Environment', to: '/8.x/developers/environment'},
    ],
  },
];

const questions = [
  {
    q: 'What are the system requirements?',
    to: '/8.x/installation/requirements',
  },
  {q: 'How do I migrate from v7 to v8?', to: '/8.x/whats-new'},
  {q: 'How do I install the ACARS client?', to: '/8.x/acars/client/install'},
  {q: 'How do I write a custom theme?', to: '/8.x/customize/theming'},
  {q: 'How do I authenticate with the API?', to: '/8.x/api/auth'},
];

export default function UseCasesLanding(): JSX.Element {
  return (
    <Layout
      title="phpvms — build, fly, and extend virtual airlines"
      description="Documentation for phpvms by use case"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={styles.page}>
        {/* Hero */}
        <header className={styles.hero}>
          <span className={styles.eyebrow}>v8.x · Documentation</span>
          <h1 className={styles.heroTitle}>
            Build a virtual airline. Fly the routes. Extend the platform.
          </h1>
          <p className={styles.heroSubtitle}>
            phpvms is the open-source platform for virtual airlines. Pick what
            you're trying to do below — the docs are organised around the three
            things people actually use phpvms for.
          </p>
          <div className={styles.heroActions}>
            <Link to="/8.x/installation" className={styles.btnPrimary}>
              Get started →
            </Link>
            <a
              href="https://demo.phpvms.net"
              className={styles.btnSecondary}
              target="_blank"
              rel="noreferrer"
            >
              View the demo
            </a>
          </div>
        </header>

        {/* Use-case panels */}
        <section className={styles.section}>
          {useCases.map((uc) => (
            <article key={uc.title} className={styles.useCasePanel}>
              <div>
                <h2 className={styles.useCaseTitle}>{uc.title}</h2>
                <p className={styles.useCaseDesc}>{uc.desc}</p>
              </div>
              <ul className={styles.useCaseLinks}>
                {uc.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Browse by product */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Browse by product</h2>
            <p className={styles.sectionLead}>
              The same docs grouped by product surface.
            </p>
          </header>
          {productGroups.map((g) => (
            <div key={g.label} style={{marginBottom: '1.5rem'}}>
              <h3
                style={{
                  fontFamily: 'var(--ifm-heading-font-family)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--ifm-color-emphasis-700)',
                  margin: '0 0 0.85rem',
                }}
              >
                {g.label}
              </h3>
              <div className={styles.browseGrid}>
                {g.items.map((b) => (
                  <Link
                    to={b.to}
                    key={b.to}
                    className={`${styles.card} ${styles.browseCard}`}
                  >
                    <span className={styles.cardIcon} aria-hidden>
                      {b.icon}
                    </span>
                    <h4 className={styles.cardTitle}>{b.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Common questions */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Common questions</h2>
          </header>
          <ul className={styles.questions}>
            {questions.map((q) => (
              <li key={q.to}>
                <Link to={q.to}>{q.q}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Help */}
        <section className={styles.section}>
          <div className={styles.helpBlock}>
            <div>
              <h2 className={styles.helpTitle}>Need help?</h2>
              <p className={styles.helpDesc}>Forum, GitHub, and help docs.</p>
            </div>
            <div className={styles.helpLinks}>
              <a
                href="https://forum.phpvms.net"
                className={styles.btnSecondary}
                target="_blank"
                rel="noreferrer"
              >
                Forum
              </a>
              <a
                href="https://github.com/nabeelio/phpvms"
                className={styles.btnSecondary}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <Link to="/help" className={styles.btnSecondary}>
                Help
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
