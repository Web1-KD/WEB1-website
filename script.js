// Fade-in on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with .animate
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Contact form fake handler
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});
