// Create an intersection observer to detect when the section is visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'show' class to the whole section
      entry.target.classList.add('show');

      // Trigger animations for image and text
      const img = entry.target.querySelector('.image-spin');
      const text = entry.target.querySelector('.text');

      // Resume image animation
      if (img) {
        img.style.animationPlayState = "running";
        img.classList.add('show');
      }

      // Show text
      if (text) {
        text.classList.add('show');
      }
    }
  });
}, { threshold: 0.3 });

// Observe each section with class 'section'
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

