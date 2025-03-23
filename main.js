// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
  mirror: true
});

// Floating Quotes
const quotes = [
  "Code is the poetry of logic",
  "Full-stack solutions, end-to-end excellence",
  "Building tomorrow's technology today",
  "Where creativity meets functionality",
  "Transforming ideas into digital reality"
];

let currentQuote = 0;
const quoteElement = document.querySelector('.floating-quote');

function updateQuote() {
  quoteElement.style.opacity = 0;
  setTimeout(() => {
      quoteElement.textContent = quotes[currentQuote];
      quoteElement.style.opacity = 1;
      currentQuote = (currentQuote + 1) % quotes.length;
  }, 500);
}
setInterval(updateQuote, 5000);

// Initialize Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// Add this to existing smooth scroll function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Add form submission logic here
  alert('Message sent successfully!');
});