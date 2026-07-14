// publication filters
const buttons = document.querySelectorAll('.f');
const pubs = document.querySelectorAll('.pubs li');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.f;
    pubs.forEach(p => {
      p.hidden = !(f === 'all' || p.dataset.t.split(' ').includes(f));
    });
  });
});

// scroll reveal
const targets = document.querySelectorAll('section > *, .hero-text, .portrait, .stats');
targets.forEach(t => t.classList.add('reveal'));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px' });

targets.forEach(t => io.observe(t));
