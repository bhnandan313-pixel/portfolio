document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('animated-tabs');
  if (!container) return;

  const tabs = Array.from(container.querySelectorAll('.tab'));
  const bg = container.querySelector('.animated-bg');
  if (!bg || tabs.length === 0) return;

  function updateBg(target) {
    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();
    const left = tRect.left - cRect.left;
    bg.style.transform = `translateX(${left}px)`;
    bg.style.width = `${Math.round(tRect.width)}px`;
  }

  // initialize on first tab
  updateBg(tabs[0]);

  tabs.forEach((t) => {
    t.addEventListener('mouseenter', () => updateBg(t));
    t.addEventListener('focus', () => updateBg(t));
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('text-zinc-950','dark:text-zinc-50'));
      t.classList.add('text-zinc-950','dark:text-zinc-50');
    });
  });

  window.addEventListener('resize', () => {
    const active = container.querySelector('.text-zinc-950') || tabs[0];
    updateBg(active);
  });

  // react to dark mode toggles
  const obs = new MutationObserver(() => {
    if (document.documentElement.classList.contains('dark')) {
      bg.style.background = 'rgba(255,255,255,0.06)';
    } else {
      bg.style.background = 'rgba(0,0,0,0.06)';
    }
  });
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});
