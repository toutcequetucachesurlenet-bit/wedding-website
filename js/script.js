document.addEventListener('DOMContentLoaded', () => {

  // --- 1. SPA Navigation & Hash Routing ---
  const pages = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-link');
  const navMenu = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');

  function navigateTo(targetId) {
    const cleanId = targetId.replace('#', '') || 'home';
    
    pages.forEach(page => {
      if (page.id === cleanId) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${cleanId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close Mobile Menu if open
    navMenu.classList.remove('active');
    
    // Scroll smoothly to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });

  // Initial load navigation setup
  navigateTo(window.location.hash || '#home');

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


  // --- 2. Countdown Timer ---
  const weddingDate = new Date('September 18, 2027 16:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById('countdown').innerHTML = "<p>The wedding is today!</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days < 10 ? `0${days}` : days;
    document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();


  // --- 3. Accordion (FAQs) ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.classList.toggle('open');
    });
  });


  // --- 4. Interactive RSVP Form ---
  const rsvpForm = document.getElementById('rsvpForm');
  const formMessage = document.getElementById('formMessage');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate submission UX
      formMessage.style.color = '#C5A059';
      formMessage.textContent = "Sending your response...";

      setTimeout(() => {
        formMessage.textContent = "Thank you! Your RSVP has been successfully received.";
        rsvpForm.reset();
      }, 1200);
    });
  }

});
