// 📧 Email Popup
const emailIcon = document.getElementById('emailIcon');
const emailBox = document.getElementById('emailBox');
const closeEmailBtn = document.getElementById('closeEmailBtn');

// 📱 Contact Popup
const contactBtn = document.getElementById('contactPopupBtn');
const contactBox = document.getElementById('contactBox');
const closeContactBtn = document.getElementById('closeContactBtn');

// 🔲 Blur Overlay
const overlay = document.getElementById('overlay');

// ⬆️ Scroll Button
const scrollBtn = document.getElementById('scrollBtn');

// 📩 Show Email Box
emailIcon.addEventListener('click', (e) => {
  e.preventDefault();
  emailBox.classList.add('active');
  overlay.classList.add('active');
});

// ❌ Close Email
closeEmailBtn.addEventListener('click', () => {
  emailBox.classList.remove('active');
  overlay.classList.remove('active');
});

const emailIconInPopup = document.getElementById('contactPopupEmailIcon');

emailIconInPopup.addEventListener('click', (e) => {
  e.preventDefault();
  contactBox.classList.remove('active'); // Close contact popup
  emailBox.classList.add('active');      // Show email popup
  overlay.classList.add('active');       // Show blur background
});


// 📱 Show Contact Box
contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contactBox.classList.add('active');
  overlay.classList.add('active');
});

// ❌ Close Contact
closeContactBtn.addEventListener('click', () => {
  contactBox.classList.remove('active');
  overlay.classList.remove('active');
});

// 💥 Close All Popups When Clicking Outside
overlay.addEventListener('click', () => {
  emailBox.classList.remove('active');
  contactBox.classList.remove('active');
  overlay.classList.remove('active');
});

// ⬆️ Scroll To Top Logic
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const footer = document.querySelector('.site-footer');
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const windowHeight = window.innerHeight;

  // Show/hide scroll button
  if (scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }

  // Push scroll button up if near footer
  if (scrollY + windowHeight >= footerTop) {
    scrollBtn.style.bottom = '80px';
  } else {
    scrollBtn.style.bottom = '20px';
  }
});

// 🔝 Scroll To Top Click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 🍔 Toggle Hamburger Navigation
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
