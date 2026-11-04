/* CD / real product motion — muted source recordings, no simulated UI.
   Deferred and viewport-gated; honors reduced motion and user pause. */
(() => {
  'use strict';
  const roots = [...document.querySelectorAll('[data-motion-root]')];
  if (!roots.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const slowNetwork = !!navigator.connection?.saveData;
  const localize = () => document.documentElement.lang === 'en' ? 'en' : 'es';
  const canAutoplay = () => !reduced.matches && !slowNetwork;

  function setButton(root) {
    const button = root.querySelector('[data-motion-toggle]');
    const video = root.querySelector('[data-motion-video]');
    if (!button || !video) return;
    const lang = localize();
    for (const element of root.querySelectorAll('[data-motion-es][data-motion-en]')) {
      element.textContent = lang === 'en' ? element.dataset.motionEn : element.dataset.motionEs;
    }
    if (video.dataset.motionAltEs) {
      video.setAttribute('aria-label', lang === 'en' ? video.dataset.motionAltEn : video.dataset.motionAltEs);
    }
    const isPlaying = !video.paused && !video.ended;
    const label = isPlaying
      ? (lang === 'en' ? 'Pause animation' : 'Pausar animación')
      : (lang === 'en' ? 'Play animation' : 'Reproducir animación');
    button.textContent = (isPlaying ? 'Ⅱ ' : '▷ ') + label;
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(isPlaying));
  }

  function eligible(root) {
    const panel = root.closest('[data-wb-panel]');
    return root.dataset.motionVisible === 'yes'
      && (!panel || !panel.hidden)
      && !document.hidden;
  }

  function ensureSource(video) {
    if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    }
  }

  async function start(root) {
    if (!eligible(root)) return;
    const video = root.querySelector('[data-motion-video]');
    if (!video) return;
    ensureSource(video);
    try {
      await video.play();
    } catch (_) {
      // Autoplay may be disabled by the browser. The poster and play button remain usable.
    }
    setButton(root);
  }

  function refresh(root) {
    const video = root.querySelector('[data-motion-video]');
    if (!video) return;
    if (!eligible(root)) {
      video.pause();
    } else if (canAutoplay() && root.dataset.userPaused !== 'yes') {
      start(root);
    } else {
      video.pause();
    }
    setButton(root);
  }

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        for (const entry of entries) {
          entry.target.dataset.motionVisible = entry.isIntersecting ? 'yes' : 'no';
          refresh(entry.target);
        }
      }, { threshold: 0.12 })
    : null;

  for (const root of roots) {
    const video = root.querySelector('[data-motion-video]');
    const button = root.querySelector('[data-motion-toggle]');
    if (!video || !button) continue;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    button.addEventListener('click', async () => {
      if (!video.paused) {
        root.dataset.userPaused = 'yes';
        video.pause();
      } else {
        root.dataset.userPaused = 'no';
        // Explicit user interaction permits playback even with reduced-motion preferences.
        if (eligible(root)) await start(root);
      }
      setButton(root);
    });
    for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, () => setButton(root));
    if (observer) observer.observe(root);
    else { root.dataset.motionVisible = 'yes'; refresh(root); }
    setButton(root);
  }

  document.addEventListener('visibilitychange', () => roots.forEach(refresh));
  reduced.addEventListener?.('change', () => roots.forEach(refresh));
  new MutationObserver(() => roots.forEach(refresh))
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  for (const panel of document.querySelectorAll('[data-wb-panel]')) {
    new MutationObserver(() => {
      panel.querySelectorAll('[data-motion-root]').forEach(refresh);
    }).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
  }
})();