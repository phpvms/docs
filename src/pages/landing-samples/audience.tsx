/**
 * /landing-samples/audience — Pick-your-path composition.
 *
 * Inspiration: Vercel + Docker hybrid. The phpvms sidebar already groups
 * content into three audiences, so this layout leans hard into that
 * audience split.
 *
 * Sections: hero · 3 audience cards · browse-by-area icon grid ·
 * common questions · help/community.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from '../landing-samples.module.css';

const audiences = [
  {
    icon: '🏢',
    title: 'For operators',
    desc: 'Run a virtual airline. Install phpvms, configure your fleet, set up flights, and onboard pilots.',
    links: [
      {label: 'Installation', to: '/8.x/installation'},
      {label: 'Configuration', to: '/8.x/config/basics'},
      {label: 'Theming', to: '/8.x/customize/theming'},
    ],
  },
  {
    icon: '✈️',
    title: 'For pilots & ACARS',
    desc: 'Track flights with vmsACARS. Install the client, connect to your VA, and file PIREPs automatically.',
    links: [
      {label: 'Install the client', to: '/8.x/acars/client/install'},
      {label: 'Configure simulators', to: '/8.x/acars/client/configuration'},
      {label: 'Flying with ACARS', to: '/8.x/acars/client/flying'},
    ],
  },
  {
    icon: '🛠️',
    title: 'For developers',
    desc: 'Build addons, themes, and ACARS plugins. Extend phpvms with new routes, events, and integrations.',
    links: [
      {label: 'Addon overview', to: '/8.x/developers/addons/overview'},
      {label: 'ACARS plugin tutorial', to: '/8.x/acars/plugins/tutorial'},
      {label: 'REST API', to: '/8.x/api/overview'},
    ],
  },
];

const browseAreas = [
  {
    icon: '⚙️',
    title: 'Configuration',
    desc: 'Email, backups, OAuth, advanced',
    to: '/8.x/config/basics',
  },
  {
    icon: '🎨',
    title: 'Theming',
    desc: 'Layouts, theming, maps',
    to: '/8.x/customize/theming',
  },
  {
    icon: '📚',
    title: 'Concepts',
    desc: 'Basics, glossary, deeper dive',
    to: '/8.x/guides/basics',
  },
  {
    icon: '🔌',
    title: 'Addons',
    desc: 'Routes, events, database',
    to: '/8.x/developers/addons/overview',
  },
  {
    icon: '🛰️',
    title: 'REST API',
    desc: 'Endpoints and auth',
    to: '/8.x/api/overview',
  },
  {
    icon: '🐳',
    title: 'Docker',
    desc: 'Containerised deployment',
    to: '/8.x/installation/docker',
  },
  {
    icon: '🔐',
    title: 'OAuth',
    desc: 'Discord, IVAO, VATSIM',
    to: '/8.x/config/oauth/discord',
  },
  {
    icon: '🏆',
    title: 'Awards',
    desc: 'Build custom awards',
    to: '/8.x/developers/awards',
  },
];

const questions = [
  {q: 'How do I install phpvms?', to: '/8.x/installation'},
  {q: 'How do I update an existing install?', to: '/8.x/installation/updating'},
  {q: 'How do I set up email?', to: '/8.x/config/email'},
  {q: 'How do I install the ACARS client?', to: '/8.x/acars/client/install'},
  {q: 'How do I build a custom theme?', to: '/8.x/customize/theming'},
  {q: 'How do I write an addon?', to: '/8.x/developers/addons/overview'},
];

export default function AudienceLanding(): JSX.Element {
  return (
    <Layout
      title="phpvms — run, fly, and build virtual airlines"
      description="Documentation for phpvms, the open-source virtual airline platform"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={styles.page}>
        {/* Hero */}
        <header className={styles.hero}>
          <span className={styles.eyebrow}>v8.x · Documentation</span>
          <h1 className={styles.heroTitle}>
            Run, fly, and build virtual airlines.
          </h1>
          <p className={styles.heroSubtitle}>
            phpvms is the open-source platform for virtual airlines. Install it
            on your own server, fly with vmsACARS, and extend it with addons.
            These docs cover everything from your first install to shipping a
            plugin.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://demo.phpvms.net"
              className={styles.btnPrimary}
              target="_blank"
              rel="noreferrer"
            >
              View the demo →
            </a>
            <Link to="/8.x/installation" className={styles.btnSecondary}>
              Install phpvms
            </Link>
          </div>
        </header>

        {/* Audience cards */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Find your path</h2>
            <p className={styles.sectionLead}>
              The docs are split into three audiences. Pick the one that matches
              what you're trying to do.
            </p>
          </header>
          <div className={styles.audienceGrid}>
            {audiences.map((a) => (
              <div
                key={a.title}
                className={`${styles.card} ${styles.audienceCard}`}
              >
                <span className={styles.cardIcon} aria-hidden>
                  {a.icon}
                </span>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDesc}>{a.desc}</p>
                <ul className={styles.cardLinks}>
                  {a.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to}>{l.label} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by area */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Browse by area</h2>
            <p className={styles.sectionLead}>Jump directly into a topic.</p>
          </header>
          <div className={styles.browseGrid}>
            {browseAreas.map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className={`${styles.card} ${styles.browseCard}`}
              >
                <span className={styles.cardIcon} aria-hidden>
                  {b.icon}
                </span>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
              </Link>
            ))}
          </div>
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

        {/* Help / community */}
        <section className={styles.section}>
          <div className={styles.helpBlock}>
            <div>
              <h2 className={styles.helpTitle}>Need help?</h2>
              <p className={styles.helpDesc}>
                Stuck on something or want to share what you've built? The
                community is active on the forum and GitHub.
              </p>
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
                Help docs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
