(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const countdown = document.querySelector('#countdown');
  const tripStart = new Date('2027-04-22T00:00:00-04:00');

  function updateCountdown() {
    if (!countdown) return;
    const now = new Date();
    const diff = tripStart - now;

    if (diff <= 0) {
      countdown.textContent = 'We’re in Barbados';
      return;
    }

    const days = Math.ceil(diff / 86400000);
    countdown.textContent = `${days} day${days === 1 ? '' : 's'}`;
  }

  updateCountdown();
  setInterval(updateCountdown, 60 * 60 * 1000);
})();
