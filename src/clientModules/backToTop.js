/**
 * Append a "Back to Top" link inside each desktop TOC, separated from the
 * link list by a thin horizontal rule.
 *
 * Pure DOM injection — no swizzling. Runs on page load + after route
 * changes (Docusaurus is a SPA). Idempotent: skips TOCs already
 * processed via dataset flag.
 *
 * Markup injected:
 *   <div class="toc-back-to-top-divider"></div>
 *   <a href="#" class="toc-back-to-top">
 *     <svg>...up arrow...</svg>
 *     <span>Back to Top</span>
 *   </a>
 *
 * Styling lives in src/css/custom.css.
 */

const SVG_ARROW =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';

function inject(toc) {
  if (toc.dataset.backToTopInjected === '1') return;
  toc.dataset.backToTopInjected = '1';

  const divider = document.createElement('div');
  divider.className = 'toc-back-to-top-divider';

  const link = document.createElement('a');
  link.href = '#';
  link.className = 'toc-back-to-top';
  link.innerHTML = `${SVG_ARROW}<span>Back to Top</span>`;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
    // Clear the hash so the URL stays clean.
    if (window.history && window.history.replaceState) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      );
    }
  });

  toc.appendChild(divider);
  toc.appendChild(link);
}

function scan() {
  document.querySelectorAll('.theme-doc-toc-desktop').forEach(inject);
}

// Initial pass.
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }

  // Re-scan on Docusaurus route changes — the TOC is replaced per page.
  const observer = new MutationObserver(() => scan());
  if (document.body) {
    observer.observe(document.body, {childList: true, subtree: true});
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, {childList: true, subtree: true});
    });
  }
}

export function onRouteDidUpdate() {
  // Belt-and-suspenders: Docusaurus calls this after navigation.
  setTimeout(scan, 0);
}
