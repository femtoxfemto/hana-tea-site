const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// プロフィール画像を 5回に1回 p2.png に差し替える
document.addEventListener("DOMContentLoaded", function() {
  const profileImg = document.querySelector(".about-thumb img");
  if (profileImg) {
    const random = Math.floor(Math.random() * 5) + 1; // 1〜5の乱数
    if (random === 1) {
      profileImg.src = "img/p2.png";
    }
  }
});

// ===== Fade-in Observer =====
(function () {
  const targets = document.querySelectorAll('[data-fade]');
  if (!targets.length) return;

  // IO 未対応ブラウザは即時表示
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      // スタッガー（遅延）設定: data-fade-delay="120" など
      const delay = parseInt(el.getAttribute('data-fade-delay') || '0', 10);
      if (delay) el.style.transitionDelay = `${delay}ms`;

      el.classList.add('is-visible');
      obs.unobserve(el); // 一度だけ
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px', // 下端に来る前に発火
    threshold: 0.2
  });

  targets.forEach(el => io.observe(el));
})();

