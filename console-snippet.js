/* ============================================================
   CONSOLE SNIPPET — Maestro Guide
   Tempel seluruh isi file ini ke DevTools Console (F12 → Console),
   lalu Enter. Semua CSS terakhir disuntikkan langsung ke halaman
   yang sedang terbuka, tanpa perlu reload atau mengubah file.

   Jalankan ulang berkali-kali aman: injeksi lama dihapus dulu.
   Untuk membatalkan:  __guideStyles.remove()
   ============================================================ */
(() => {
  // Bersihkan injeksi sebelumnya supaya tidak menumpuk
  document.getElementById('guide-console-styles')?.remove();

  const css = `
/* ── 1. PALETTE OKLCH ───────────────────────────────────────
   Kanvas netral sejuk, satu aksen kuat, semantik chroma rendah. */
:root {
  --bg: oklch(0.977 0.003 280);
  --surface: oklch(1 0 0);
  --surface-2: oklch(0.965 0.004 280);
  --border: oklch(0.912 0.006 280);
  --border-soft: oklch(0.948 0.004 280);

  --text: oklch(0.24 0.017 280);
  --text-muted: oklch(0.52 0.014 280);
  --text-light: oklch(0.66 0.012 280);

  --indigo: oklch(0.55 0.213 275);
  --indigo-strong: oklch(0.47 0.205 275);
  --indigo-soft: oklch(0.72 0.145 275);
  --indigo-light: oklch(0.968 0.021 275);
  --indigo-mid: oklch(0.86 0.075 275);

  --violet: oklch(0.62 0.22 315);

  --red: oklch(0.58 0.19 22);
  --red-light: oklch(0.972 0.016 22);
  --red-border: oklch(0.885 0.062 22);

  --amber: oklch(0.66 0.145 68);
  --amber-light: oklch(0.975 0.026 78);
  --amber-border: oklch(0.885 0.078 78);

  --emerald: oklch(0.62 0.128 166);
  --emerald-light: oklch(0.972 0.026 166);
  --emerald-border: oklch(0.878 0.068 166);

  --teal: oklch(0.63 0.115 218);
  --teal-light: oklch(0.972 0.024 218);
  --teal-border: oklch(0.878 0.062 218);

  --shadow-xs: 0 1px 2px oklch(0.24 0.017 280 / 0.05);
  --shadow-sm:
    0 1px 3px oklch(0.24 0.017 280 / 0.06),
    0 1px 2px oklch(0.24 0.017 280 / 0.04);
  --shadow:
    0 8px 24px -10px oklch(0.24 0.017 280 / 0.15),
    0 2px 6px -2px oklch(0.24 0.017 280 / 0.07);
}

/* ── 2. KETERANGAN DI ATAS PILL DAFTAR ISI (khusus cover) ── */
.tocfab-hint {
  position: absolute;
  bottom: calc(100% + 0.3rem);
  left: 0.75rem;
  display: none;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--indigo);
  white-space: nowrap;
  pointer-events: none;
}

.tocfab.show-hint .tocfab-hint {
  display: inline-flex;
  animation: tocfabHintIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}

.tocfab.show-hint {
  top: calc(var(--topbar-h, 54px) + clamp(1.5rem, 4vh, 2.2rem));
}

.tocfab-hint-arrow {
  font-size: 0.8rem;
  line-height: 1;
  animation: tocfabHintBob 2.4s ease-in-out infinite;
}

@keyframes tocfabHintIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: none; }
}

@keyframes tocfabHintBob {
  0%, 100% { transform: translateY(0);   opacity: 0.75; }
  50%      { transform: translateY(2px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .tocfab-hint-arrow { animation: none; }
}
`;

  const style = document.createElement('style');
  style.id = 'guide-console-styles';
  style.textContent = css;
  document.head.appendChild(style);

  // Sisipkan elemen hint bila belum ada di DOM
  const fab = document.getElementById('tocFab');
  if (fab && !fab.querySelector('.tocfab-hint')) {
    const hint = document.createElement('span');
    hint.className = 'tocfab-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML = 'Semua halaman ada di sini <span class="tocfab-hint-arrow">↓</span>';
    fab.prepend(hint);
  }

  // Tinggi topbar → dipakai untuk posisi vertikal pill
  const bar = document.querySelector('.topbar');
  if (bar) {
    const apply = () => document.documentElement.style
      .setProperty('--topbar-h', bar.getBoundingClientRect().height + 'px');
    apply();
    addEventListener('resize', apply);
  }

  // Hint hanya tampil di halaman 0 — ikut berubah saat pindah slide
  const syncHint = () => {
    const onCover = document.getElementById('slide-0')?.classList.contains('is-active');
    fab?.classList.toggle('show-hint', !!onCover);
  };
  syncHint();
  if (fab) {
    new MutationObserver(syncHint).observe(document.getElementById('slide-0'), {
      attributes: true, attributeFilter: ['class'],
    });
  }

  window.__guideStyles = style;
  console.log('%c✓ Style tersuntik', 'color:#5b57e8;font-weight:700',
    '— jalankan __guideStyles.remove() untuk membatalkan.');
})();
