// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll cue
document.getElementById('scrollCue').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Search-bar typing effect
const phrases = [
  'senior java backend engineer',
  'spring boot microservices',
  'ai-augmented engineering',
  'claude code + mcp',
  'hire omkar warghade'
];
const searchText = document.getElementById('searchText');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    searchText.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    searchText.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}

if (prefersReducedMotion) {
  let i = 0;
  searchText.textContent = phrases[0];
  setInterval(() => {
    i = (i + 1) % phrases.length;
    searchText.textContent = phrases[i];
  }, 2200);
} else {
  typeLoop();
}
