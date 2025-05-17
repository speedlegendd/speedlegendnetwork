// Animate fade-in on scroll
function handleScroll() {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add('fade-in');
    }
  });
}

// IP copy to clipboard with feedback
const ipBox = document.getElementById('server-ip');
ipBox.addEventListener('click', () => {
  const ip = ipBox.textContent.trim();
  navigator.clipboard.writeText(ip).then(() => {
    ipBox.textContent = 'Copied: ' + ip;
    ipBox.style.background = '#4caf50';
    ipBox.style.color = '#fff';
    setTimeout(() => {
      ipBox.textContent = ip;
      ipBox.style.background = 'linear-gradient(45deg, #fdbb2d, #22c1c3)';
      ipBox.style.color = '#0a0a0a';
    }, 1500);
  });
});

window.addEventListener('scroll', handleScroll);

// Initial check in case some sections are visible on load
handleScroll();
