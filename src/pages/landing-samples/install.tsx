/**
 * /landing-samples/install — Install-led composition.
 *
 * Inspiration: Tailwind + Astro install pages. Lead with the actual
 * setup steps inline. Best when most readers are first-time installers.
 *
 * Sections: hero · numbered steps · what's next · browse grid · help.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from '../landing-samples.module.css';

const steps = [
  {
    title: 'Download phpvms',
    body: (
      <>
        <p>
          Grab the latest release from GitHub or clone the repo. Drop it into
          your web root and make the <code>storage/</code> and{' '}
          <code>bootstrap/cache/</code> directories writable.
        </p>
      </>
    ),
    code: 'git clone https://github.com/nabeelio/phpvms.git',
  },
  {
    title: 'Configure your virtual host',
    body: (
      <p>
        Point your web server at the <code>public/</code> directory. Apache and
        nginx configs are documented for both shared hosting and bare VPS
        setups.
      </p>
    ),
    code: 'DocumentRoot /var/www/phpvms/public',
  },
  {
    title: 'Run the install wizard',
    body: (
      <p>
        Visit your domain in a browser. The web installer walks you through the
        database connection, admin account, and initial configuration.
      </p>
    ),
    code: 'https://your-domain.example.com/install',
  },
  {
    title: 'Set up the cron job',
    body: (
      <p>
        phpvms runs scheduled tasks (PIREP processing, backups, etc.) via a
        single cron entry that triggers Laravel's scheduler every minute.
      </p>
    ),
    code: '* * * * * php /path/to/phpvms/artisan schedule:run',
  },
  {
    title: "You're flying",
    body: (
      <p>
        Log in to the admin panel and start adding your fleet, airports, and
        routes. The next steps below cover the most common follow-up tasks.
      </p>
    ),
    code: null,
  },
];

const whatsNext = [
  {
    icon: '✉️',
    title: 'Configure email',
    desc: 'Wire up SMTP so pilots get account and PIREP emails.',
    to: '/8.x/config/email',
  },
  {
    icon: '🛫',
    title: 'Add your fleet',
    desc: 'Create aircraft subfleets and assign them to ranks.',
    to: '/8.x/guides/basics',
  },
  {
    icon: '🎨',
    title: 'Theme it',
    desc: 'Match your VA branding with a custom theme.',
    to: '/8.x/customize/theming',
  },
];

const browseAreas = [
  {icon: '⚙️', title: 'Configuration', to: '/8.x/config/basics'},
  {icon: '🐳', title: 'Docker', to: '/8.x/installation/docker'},
  {icon: '✈️', title: 'ACARS', to: '/8.x/acars/overview'},
  {icon: '🔌', title: 'Addons', to: '/8.x/developers/addons/overview'},
  {icon: '🛰️', title: 'REST API', to: '/8.x/api/overview'},
  {icon: '🆘', title: 'Help', to: '/8.x/help'},
];

export default function InstallLanding(): JSX.Element {
  return (
    <Layout
      title="Install phpvms in five minutes"
      description="Step-by-step installation guide for phpvms"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={styles.page}>
        {/* Hero */}
        <header className={styles.hero}>
          <span className={styles.eyebrow}>Quickstart · v8.x</span>
          <h1 className={styles.heroTitle}>
            Install phpvms in under five minutes.
          </h1>
          <p className={styles.heroSubtitle}>
            phpvms runs on PHP 8.2+ with MySQL or MariaDB. Follow these five
            steps and you'll have a working virtual airline ready to accept your
            first pilot.
          </p>
          <div className={styles.heroActions}>
            <Link to="/8.x/installation/download" className={styles.btnPrimary}>
              Download phpvms →
            </Link>
            <Link
              to="/8.x/installation/requirements"
              className={styles.btnSecondary}
            >
              Check requirements
            </Link>
          </div>
        </header>

        {/* Numbered steps */}
        <section className={styles.section}>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <article className={styles.step} key={s.title}>
                <span className={styles.stepNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <div className={styles.stepBody}>{s.body}</div>
                  {s.code && (
                    <pre className={styles.codeBlock}>
                      <code>{s.code}</code>
                    </pre>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What's next */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What's next</h2>
            <p className={styles.sectionLead}>
              Common follow-up tasks once your install is up and running.
            </p>
          </header>
          <div className={styles.whatsNextRow}>
            {whatsNext.map((w) => (
              <Link
                to={w.to}
                key={w.to}
                className={`${styles.card} ${styles.browseCard}`}
              >
                <span className={styles.cardIcon} aria-hidden>
                  {w.icon}
                </span>
                <h3 className={styles.cardTitle}>{w.title}</h3>
                <p className={styles.cardDesc}>{w.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Browse the docs</h2>
          </header>
          <div className={styles.browseGrid}>
            {browseAreas.map((b) => (
              <Link
                to={b.to}
                key={b.to}
                className={`${styles.card} ${styles.browseCard}`}
              >
                <span className={styles.cardIcon} aria-hidden>
                  {b.icon}
                </span>
                <h3 className={styles.cardTitle}>{b.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Help */}
        <section className={styles.section}>
          <div className={styles.helpBlock}>
            <div>
              <h2 className={styles.helpTitle}>Stuck during install?</h2>
              <p className={styles.helpDesc}>
                The forum and GitHub issues are the fastest way to get
                unblocked. Most install questions have already been answered.
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
                href="https://github.com/nabeelio/phpvms/issues"
                className={styles.btnSecondary}
                target="_blank"
                rel="noreferrer"
              >
                GitHub issues
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
