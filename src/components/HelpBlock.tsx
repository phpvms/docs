/**
 * Reusable "Need help?" block. Used on the landing page and rendered
 * after the paginator on every doc page (see src/theme/DocItem/Paginator).
 */
import React from 'react';
import Link from '@docusaurus/Link';

type Props = {
  /** Heading text (default: "Need help?") */
  title?: string;
  /** Body text under heading */
  description?: string;
};

export default function HelpBlock({
  title = 'Need help?',
  description = "Stuck on something or want to share what you've built? The community is active on the forum and GitHub.",
}: Props): JSX.Element {
  return (
    <div className="lp-help-block">
      <div>
        <h2 className="lp-help-title">{title}</h2>
        <p className="lp-help-desc">{description}</p>
      </div>
      <div className="lp-help-links">
        <a
          href="https://forum.phpvms.net"
          className="lp-btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden>💬</span> Forum
        </a>
        <a
          href="https://github.com/nabeelio/phpvms"
          className="lp-btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden>🐙</span> GitHub
        </a>
        <Link to="/8.x/help" className="lp-btn-secondary">
          <span aria-hidden>🆘</span> Help
        </Link>
      </div>
    </div>
  );
}
