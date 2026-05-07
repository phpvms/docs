/**
 * /landing-samples — index page that links to and describes the four
 * sample landing-page compositions. This is the entry point for
 * comparing them in the running dev server.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from '../landing-samples.module.css';

const samples = [
  {
    num: '01',
    title: 'Pick your path — audience split',
    href: '/landing-samples/audience',
    badge: 'Vercel + Docker',
    desc: 'Hero, three big audience cards (Operators / ACARS / Developers), browse-by-area icon grid, common questions. Best fit for a project with multiple distinct user types.',
  },
  {
    num: '02',
    title: 'Get started in 5 minutes — install-led',
    href: '/landing-samples/install',
    badge: 'Tailwind + Astro',
    desc: 'Numbered install steps inline on the landing page, then a smaller browse grid. Aggressive, optimised for first-time installers.',
  },
  {
    num: '03',
    title: 'Flat icon grid — quickstart',
    href: '/landing-samples/quickstart',
    badge: 'Tailwind docs',
    desc: 'Compact hero, then a large flat grid of every major doc section. No audience split. Fast scan, less hand-holding.',
  },
  {
    num: '04',
    title: 'Goal-driven — use cases',
    href: '/landing-samples/use-cases',
    badge: 'Stripe',
    desc: 'Three horizontal use-case panels (Run a virtual airline / Fly with ACARS / Extend phpvms), each with a paragraph and bulleted product links.',
  },
];

export default function LandingSamplesIndex(): JSX.Element {
  return (
    <Layout
      title="Landing page samples"
      description="Compare four documentation-landing compositions for phpvms"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={styles.page}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>Sketches · internal</span>
          <h1 className={styles.heroTitle}>Landing page sketches</h1>
          <p className={styles.heroSubtitle}>
            Four compositions explored while picking a direction for the phpvms
            documentation landing page. Kept here for reference. Compare against
            the current <Link to="/">landing page</Link>.
          </p>
        </header>

        <ul className={styles.sampleIndexList}>
          {samples.map((s) => (
            <li key={s.href}>
              <Link to={s.href} className={styles.sampleIndexCard}>
                <span className={styles.sampleIndexNum}>{s.num}</span>
                <div>
                  <h2 className={styles.sampleIndexTitle}>{s.title}</h2>
                  <p className={styles.sampleIndexDesc}>{s.desc}</p>
                </div>
                <span className={styles.sampleIndexBadge}>{s.badge}</span>
              </Link>
            </li>
          ))}
        </ul>

        <section
          className={styles.section}
          style={{marginTop: '4rem'}}
          aria-label="Baseline"
        >
          <h2 className={styles.sectionTitle}>Baseline for comparison</h2>
          <p className={styles.sectionLead}>
            The current landing page is <Link to="/">/</Link> (welcome.md) — a
            short paragraph and a screenshot. Each sample above replaces that
            with a richer, navigable landing.
          </p>
        </section>
      </main>
    </Layout>
  );
}
