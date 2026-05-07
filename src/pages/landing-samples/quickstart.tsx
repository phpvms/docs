/**
 * /landing-samples/quickstart — Flat icon grid composition.
 *
 * Inspiration: Tailwind docs + Supabase. Compact hero, then a large
 * flat grid of every major doc section. No audience split, no
 * hand-holding — just fast scan.
 *
 * Sections: compact hero · flat icon grid · featured topics · help.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from '../landing-samples.module.css';

const sections = [
  {icon: '⬇️', title: 'Download', to: '/8.x/installation/download'},
  {icon: '🐳', title: 'Docker', to: '/8.x/installation/docker'},
  {icon: '🚀', title: 'Installation', to: '/8.x/installation'},
  {icon: '🔄', title: 'Updating', to: '/8.x/installation/updating'},
  {icon: '⏱️', title: 'Cron', to: '/8.x/installation/cron'},
  {icon: '📚', title: 'Concepts', to: '/8.x/guides/basics'},
  {icon: '⚙️', title: 'Configuration', to: '/8.x/config/basics'},
  {icon: '✉️', title: 'Email', to: '/8.x/config/email'},
  {icon: '🔔', title: 'Notifications', to: '/8.x/config/notifications'},
  {icon: '💾', title: 'Backups', to: '/8.x/config/backups'},
  {icon: '🔐', title: 'OAuth', to: '/8.x/config/oauth/discord'},
  {icon: '🎨', title: 'Theming', to: '/8.x/customize/theming'},
  {icon: '🗺️', title: 'Maps', to: '/8.x/customize/maps'},
  {icon: '✈️', title: 'ACARS overview', to: '/8.x/acars/overview'},
  {icon: '🖥️', title: 'ACARS server', to: '/8.x/acars/install-server'},
  {icon: '👨‍✈️', title: 'ACARS client', to: '/8.x/acars/client/install'},
  {
    icon: '🔌',
    title: 'ACARS plugins',
    to: '/8.x/acars/plugins/getting-started',
  },
  {icon: '🧪', title: 'Dev environment', to: '/8.x/developers/environment'},
  {icon: '📦', title: 'Addons', to: '/8.x/developers/addons/overview'},
  {icon: '🛰️', title: 'REST API', to: '/8.x/api/overview'},
  {icon: '🏆', title: 'Awards', to: '/8.x/developers/awards'},
  {icon: '🆘', title: 'Help', to: '/8.x/help'},
];

const featured = [
  {
    title: "What's new in v8.x",
    desc: 'Release notes and migration guide',
    to: '/8.x/whats-new',
  },
  {
    title: 'Live demo',
    desc: 'Try phpvms with admin/admin',
    href: 'https://demo.phpvms.net',
  },
  {
    title: 'v7.x docs',
    desc: 'Stable version reference',
    to: '/',
  },
];

export default function QuickstartLanding(): JSX.Element {
  return (
    <Layout
      title="phpvms documentation"
      description="Documentation for phpvms — installation, ACARS, theming, and addons"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={styles.page}>
        {/* Compact hero */}
        <header className={`${styles.hero} ${styles.heroCompact}`}>
          <h1 className={styles.heroTitle}>phpvms documentation</h1>
          <p className={styles.heroSubtitle}>
            Installation, configuration, ACARS, theming, addons, and API
            reference for the open-source virtual airline platform.
          </p>
          <div className={styles.heroActions}>
            <Link to="/8.x/installation" className={styles.btnPrimary}>
              Install phpvms →
            </Link>
            <a
              href="https://demo.phpvms.net"
              className={styles.btnSecondary}
              target="_blank"
              rel="noreferrer"
            >
              Try the demo
            </a>
          </div>
        </header>

        {/* Flat grid */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>All sections</h2>
          </header>
          <div className={styles.flatGrid}>
            {sections.map((s) => (
              <Link
                to={s.to}
                key={s.to}
                className={`${styles.card} ${styles.browseCard}`}
              >
                <span className={styles.cardIcon} aria-hidden>
                  {s.icon}
                </span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured strip */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured</h2>
          </header>
          <div className={styles.featuredStrip}>
            {featured.map((f) => {
              const inner = (
                <>
                  <strong>{f.title} →</strong>
                  <span>{f.desc}</span>
                </>
              );
              return f.href ? (
                <a
                  key={f.title}
                  href={f.href}
                  className={styles.featuredItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <Link key={f.title} to={f.to} className={styles.featuredItem}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Help */}
        <section className={styles.section}>
          <div className={styles.helpBlock}>
            <div>
              <h2 className={styles.helpTitle}>Get help</h2>
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
