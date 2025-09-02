// Mobile nav toggle and small helpers
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
// Dynamic year
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

