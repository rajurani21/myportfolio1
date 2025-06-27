// ParticleJS config
particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('particles.js loaded - callback');
});

// Navigation menu toggle for mobile
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});
navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show-menu
