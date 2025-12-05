document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});

// Hakee elementit
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

// Klikkaus: näyttää / piilottaa valikon
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

