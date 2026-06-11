/* ═══════════════════════════════════════════════════════════════
   RAFAQAT CLINIC – PRELOADER (homepage only)
   ═══════════════════════════════════════════════════════════════ */

window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  if (!loader) return;

  /* Show loader for 3.4 s then fade out */
  setTimeout(() => {
    loader.classList.add('hide');
    /* Remove from DOM after transition */
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }, 3400);
});
