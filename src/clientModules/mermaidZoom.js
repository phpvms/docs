/**
 * Click-to-zoom for Mermaid diagrams.
 *
 * Mermaid renders as inline <svg> inside `.docusaurus-mermaid-container`.
 * `medium-zoom` (used by docusaurus-plugin-image-zoom) only handles <img>,
 * so SVGs are unreachable. This module:
 *
 * 1. Marks each rendered Mermaid container as clickable (cursor + hint).
 * 2. On click, opens a fullscreen modal containing a clone of the SVG.
 * 3. Modal supports drag-to-pan and scroll-to-zoom on the SVG itself.
 * 4. ESC, backdrop click, or close button dismisses.
 *
 * No dependencies. CSS lives in src/css/custom.css.
 */

const MODAL_ID = 'mermaid-zoom-modal';
const CONTAINER_SELECTOR = '.docusaurus-mermaid-container';

let modalEl = null;
let stageEl = null;
let svgEl = null;

// Pan/zoom state (relative to the SVG inside the modal stage).
let scale = 1;
let tx = 0;
let ty = 0;
let dragging = false;
let dragStartX = 0;
let dragStartY = 0;

function applyTransform() {
  if (!svgEl) return;
  svgEl.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
}

function resetTransform() {
  scale = 1;
  tx = 0;
  ty = 0;
  applyTransform();
}

function ensureModal() {
  if (modalEl) return modalEl;

  modalEl = document.createElement('div');
  modalEl.id = MODAL_ID;
  modalEl.className = 'mermaid-zoom-modal';
  modalEl.setAttribute('role', 'dialog');
  modalEl.setAttribute('aria-modal', 'true');
  modalEl.setAttribute('aria-hidden', 'true');

  // Backdrop closes the modal.
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });

  const stage = document.createElement('div');
  stage.className = 'mermaid-zoom-stage';
  stageEl = stage;
  modalEl.appendChild(stage);

  // Toolbar: reset + close.
  const toolbar = document.createElement('div');
  toolbar.className = 'mermaid-zoom-toolbar';
  toolbar.innerHTML = `
    <button type="button" class="mermaid-zoom-btn" data-action="zoom-out" aria-label="Zoom out">−</button>
    <button type="button" class="mermaid-zoom-btn" data-action="reset" aria-label="Reset zoom">Reset</button>
    <button type="button" class="mermaid-zoom-btn" data-action="zoom-in" aria-label="Zoom in">+</button>
    <button type="button" class="mermaid-zoom-btn mermaid-zoom-close" data-action="close" aria-label="Close">×</button>
  `;
  toolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === 'close') closeModal();
    else if (action === 'reset') resetTransform();
    else if (action === 'zoom-in') zoomBy(1.25, null);
    else if (action === 'zoom-out') zoomBy(1 / 1.25, null);
  });
  modalEl.appendChild(toolbar);

  // Wheel on stage = zoom around cursor.
  stage.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      zoomBy(factor, e);
    },
    {passive: false},
  );

  // Drag-to-pan.
  stage.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    dragging = true;
    dragStartX = e.clientX - tx;
    dragStartY = e.clientY - ty;
    stage.classList.add('is-dragging');
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    tx = e.clientX - dragStartX;
    ty = e.clientY - dragStartY;
    applyTransform();
  });
  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove('is-dragging');
  });

  // Touch: single-finger pan, two-finger pinch zoom.
  let touchStart = null;
  stage.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches.length === 1) {
        touchStart = {
          mode: 'pan',
          x: e.touches[0].clientX - tx,
          y: e.touches[0].clientY - ty,
        };
      } else if (e.touches.length === 2) {
        const [a, b] = e.touches;
        touchStart = {
          mode: 'pinch',
          dist: Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY),
          startScale: scale,
        };
      }
    },
    {passive: true},
  );
  stage.addEventListener(
    'touchmove',
    (e) => {
      if (!touchStart) return;
      if (touchStart.mode === 'pan' && e.touches.length === 1) {
        tx = e.touches[0].clientX - touchStart.x;
        ty = e.touches[0].clientY - touchStart.y;
        applyTransform();
      } else if (touchStart.mode === 'pinch' && e.touches.length === 2) {
        const [a, b] = e.touches;
        const d = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
        scale = Math.min(
          8,
          Math.max(0.2, touchStart.startScale * (d / touchStart.dist)),
        );
        applyTransform();
      }
      e.preventDefault();
    },
    {passive: false},
  );
  stage.addEventListener('touchend', () => {
    touchStart = null;
  });

  // ESC closes.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('is-open')) {
      closeModal();
    }
  });

  document.body.appendChild(modalEl);
  return modalEl;
}

function zoomBy(factor, eventOrNull) {
  const newScale = Math.min(8, Math.max(0.2, scale * factor));
  if (newScale === scale) return;

  // If we have a pointer event, zoom around that point. Otherwise zoom
  // around the stage center (treats translation neutral).
  if (eventOrNull && stageEl) {
    const rect = stageEl.getBoundingClientRect();
    const px = eventOrNull.clientX - rect.left - rect.width / 2;
    const py = eventOrNull.clientY - rect.top - rect.height / 2;
    // Adjust translation so the point under cursor stays put across the
    // scale change: new_t = (old_t - p) * (newScale/oldScale) + p
    tx = (tx - px) * (newScale / scale) + px;
    ty = (ty - py) * (newScale / scale) + py;
  }
  scale = newScale;
  applyTransform();
}

function openModal(sourceContainer) {
  ensureModal();

  // Clone the rendered SVG so the original stays in the page.
  const sourceSvg = sourceContainer.querySelector('svg');
  if (!sourceSvg) return;

  // Strip any prior svg.
  if (svgEl) svgEl.remove();
  svgEl = sourceSvg.cloneNode(true);

  // Make sure the clone fills the stage at scale=1: kill any inline width/
  // height that mermaid set on the original (`useMaxWidth` etc.) and let
  // the viewBox govern aspect.
  svgEl.removeAttribute('style');
  svgEl.style.maxWidth = 'none';
  svgEl.style.maxHeight = 'none';
  svgEl.style.width = 'min(90vw, 1400px)';
  svgEl.style.height = 'auto';
  svgEl.style.transformOrigin = 'center center';

  stageEl.appendChild(svgEl);
  resetTransform();

  modalEl.classList.add('is-open');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.classList.add('mermaid-zoom-locked');
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove('is-open');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('mermaid-zoom-locked');
  if (svgEl) {
    svgEl.remove();
    svgEl = null;
  }
}

function attachToContainers() {
  document.querySelectorAll(CONTAINER_SELECTOR).forEach((c) => {
    if (c.dataset.zoomAttached === '1') return;
    // Wait until mermaid has actually rendered an svg inside.
    if (!c.querySelector('svg')) return;
    c.dataset.zoomAttached = '1';
    c.classList.add('mermaid-zoom-source');
    c.setAttribute('role', 'button');
    c.setAttribute('tabindex', '0');
    c.setAttribute('aria-label', 'Open diagram in zoom view');

    const handler = (e) => {
      // Don't hijack text-selection clicks etc.
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      openModal(c);
    };
    c.addEventListener('click', handler);
    c.addEventListener('keydown', handler);
  });
}

function scan() {
  // Mermaid renders async after route mount. Poll briefly until svgs appear.
  let attempts = 0;
  const tryAttach = () => {
    attachToContainers();
    attempts += 1;
    const containers = document.querySelectorAll(CONTAINER_SELECTOR);
    const allReady =
      containers.length > 0 &&
      Array.from(containers).every((c) => c.querySelector('svg'));
    if (!allReady && attempts < 20) {
      setTimeout(tryAttach, 150);
    }
  };
  tryAttach();
}

const clientModule = {
  onRouteDidUpdate() {
    requestAnimationFrame(() => requestAnimationFrame(scan));
  },
};

export default clientModule;
