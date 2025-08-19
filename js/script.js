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
