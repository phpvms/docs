/**
 * Sliding active-bar for the right-side TOC and the left sidebar guide rails.
 *
 * Docusaurus swaps `.table-of-contents__link--active` (TOC) and
 * `.menu__link--active` (sidebar) between different <a> elements as the
 * reader scrolls or navigates. A pseudo-element bar anchored to the active
 * link teleports — it can't be CSS-transitioned across DOM nodes.
 *
 * This module injects a single absolutely-positioned bar inside each
 * railed container and uses MutationObserver to track which link is active,
 * then translates the bar to match. CSS transition handles the easing.
 *
 * Two flavors:
 * - TOC bar: one per `.theme-doc-toc-desktop`, anchored to active TOC link
 * - Sidebar bar: one per expanded railed <ul> in the sidebar, anchored to
 *   the active <li> directly under that rail. Only one rail contains the
 *   active link at any time; siblings hide their bar.
 */

let observers = new WeakMap();

function setupTocBar(toc) {
  if (toc.dataset.barInjected === '1') return;
  toc.dataset.barInjected = '1';

  // Container needs to be a positioning context for the bar.
  const cs = getComputedStyle(toc);
  if (cs.position === 'static') {
    toc.style.position = 'relative';
  }

  const bar = document.createElement('span');
  bar.className = 'toc-active-bar';
  toc.appendChild(bar);

  const update = () => {
    const active = toc.querySelector('.table-of-contents__link--active');
    if (!active) {
      bar.style.opacity = '0';
      return;
    }
    const tocBox = toc.getBoundingClientRect();
    const linkBox = active.getBoundingClientRect();
    // Top of the bar relative to the TOC container, with small inset so it
    // hugs the text rather than the row's padding.
    const top = linkBox.top - tocBox.top + 4;
    const height = linkBox.height - 8;
    bar.style.opacity = '1';
    bar.style.height = `${Math.max(height, 8)}px`;
    bar.style.transform = `translateY(${top}px)`;
  };

  // Observe class changes anywhere inside the TOC (active swap fires here).
  const obs = new MutationObserver(update);
  obs.observe(toc, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true,
  });
  observers.set(toc, obs);

  // Initial paint + window resize repositions the bar (line wrap changes height).
  // Two RAFs let layout settle on first paint.
  requestAnimationFrame(() => requestAnimationFrame(update));
  window.addEventListener('resize', update);
}

/**
 * Sidebar rail bars. The rail is `border-left` on each expanded railed <ul>
 * (see custom.css). We inject one `.sidebar-active-bar` per railed <ul> and
 * slide it to the active direct-child <li>. Only the rail whose subtree
 * contains the active link shows its bar; others fade out.
 *
 * Selector matches the same rule that draws the rail border in CSS, so
 * every rail gets a bar regardless of nesting depth.
 */
const RAILED_UL_SELECTOR = [
  '.theme-doc-sidebar-item-category-level-2:not(.menu__list-item--collapsed) > .menu__list',
  '.theme-doc-sidebar-item-category-level-3:not(.menu__list-item--collapsed) > .menu__list',
].join(', ');

function setupSidebarBar(ul) {
  if (ul.dataset.barInjected === '1') return;
  ul.dataset.barInjected = '1';

  const cs = getComputedStyle(ul);
  if (cs.position === 'static') {
    ul.style.position = 'relative';
  }

  const bar = document.createElement('span');
  bar.className = 'sidebar-active-bar';
  ul.appendChild(bar);
}

function updateSidebarBars(sidebar) {
  // Docusaurus marks every link in the active page's ancestor chain with
  // `--active` (e.g. category-1 + category-2 + leaf). Pick the DEEPEST one —
  // last in DOM order = innermost. Walking up from there finds the right rail.
  const actives = sidebar.querySelectorAll('.menu__link--active');
  const active = actives.length ? actives[actives.length - 1] : null;
  let activeUl = null;
  if (active) {
    let el = active.parentElement;
    while (el && el !== sidebar) {
      if (el.matches('ul.menu__list') && el.dataset.barInjected === '1') {
        activeUl = el;
        break;
      }
      el = el.parentElement;
    }
  }

  sidebar.querySelectorAll('ul.menu__list[data-bar-injected="1"]').forEach((ul) => {
    const bar = ul.querySelector(':scope > .sidebar-active-bar');
    if (!bar) return;
    if (ul !== activeUl) {
      bar.style.opacity = '0';
      return;
    }
    // Find the direct-child <li> of this <ul> that contains the active link.
    const li = active.closest('li');
    let directLi = li;
    while (directLi && directLi.parentElement !== ul) {
      directLi = directLi.parentElement.closest('li');
    }
    if (!directLi) {
      bar.style.opacity = '0';
      return;
    }
    // Measure against the link row (first .menu__link inside the <li>), not
    // the whole <li> — otherwise the bar stretches over nested children.
    const row = directLi.querySelector(':scope > .menu__link, :scope > .menu__list-item-collapsible > .menu__link') || directLi;
    const ulBox = ul.getBoundingClientRect();
    const rowBox = row.getBoundingClientRect();
    const top = rowBox.top - ulBox.top;
    const height = rowBox.height;
    bar.style.opacity = '1';
    bar.style.height = `${height}px`;
    bar.style.transform = `translateY(${top}px)`;
  });
}

function setupSidebar(sidebar) {
  const tick = () => {
    // New rails may have appeared (category expanded). Inject bars first,
    // then reposition the active one.
    sidebar.querySelectorAll(RAILED_UL_SELECTOR).forEach(setupSidebarBar);
    updateSidebarBars(sidebar);
  };

  if (sidebar.dataset.barObserverAttached === '1') {
    // Re-scan for newly expanded rails on route change. Run multiple times
    // to catch the layout-settling race (active class may apply after our
    // first tick).
    tick();
    requestAnimationFrame(() => requestAnimationFrame(tick));
    return;
  }
  sidebar.dataset.barObserverAttached = '1';

  const obs = new MutationObserver(tick);
  obs.observe(sidebar, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true,
    childList: true,
  });
  observers.set(sidebar, obs);

  // Multi-stage init: initial pass + RAFs + a couple of late retries to
  // catch async hydration where Docusaurus applies `--active` after mount.
  tick();
  requestAnimationFrame(() => requestAnimationFrame(tick));
  setTimeout(tick, 100);
  setTimeout(tick, 400);
  window.addEventListener('resize', tick);
}

function scan() {
  document.querySelectorAll('.theme-doc-toc-desktop').forEach(setupTocBar);
  document.querySelectorAll('.theme-doc-sidebar-menu').forEach(setupSidebar);
}

/**
 * Move the unreleased-version banner so it renders directly under the page
 * <h1>, instead of above the breadcrumbs / title block where Docusaurus puts
 * it by default. Idempotent: skips if banner is already in the right spot.
 */
function relocateVersionBanner() {
  const banner = document.querySelector('.theme-doc-version-banner');
  if (!banner) return;

  // Find the doc's <h1>. The markdown container holds the header.
  const markdown = document.querySelector('.theme-doc-markdown');
  if (!markdown) return;
  const header = markdown.querySelector(':scope > header');
  if (!header) return;

  // Already moved? header.nextElementSibling is the banner.
  if (header.nextElementSibling === banner) return;

  // Insert banner immediately after the <header>.
  header.insertAdjacentElement('afterend', banner);
}

const clientModule = {
  onRouteDidUpdate() {
    // Defer past Docusaurus's own DOM mount.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      scan();
      relocateVersionBanner();
    }));
  },
};

export default clientModule;
