function navigateTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    updateActiveNav(sectionId);
  }
}

function updateActiveNav(sectionId) {
  document.querySelectorAll('nav a').forEach(function (link) {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector('nav a[href="#' + sectionId + '"]');
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  updateActiveNav(current);
});

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', function () {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

const copyEmailBtn = document.getElementById('copyEmailBtn');
copyEmailBtn.addEventListener('click', function () {
  const email = 'aakashgnsn@gmail.com';
  navigator.clipboard.writeText(email).then(function () {
    const originalText = copyEmailBtn.textContent;
    copyEmailBtn.textContent = '✅ Copied!';
    setTimeout(function () {
      copyEmailBtn.textContent = originalText;
    }, 2000);
  });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thank you, ' + name + '! Your message has been received.\n\nI will get back to you at ' + email + ' soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all the fields!');
  }
});