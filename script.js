// Copy IP box text on click, show temporary 'Copied!' effect
document.addEventListener('DOMContentLoaded', () => {
  const ipBox = document.getElementById('server-ip');

  ipBox.addEventListener('click', () => {
    const ipText = ipBox.textContent;
    navigator.clipboard.writeText(ipText).then(() => {
      ipBox.classList.add('copied');
      ipBox.textContent = 'Copied!';
      setTimeout(() => {
        ipBox.classList.remove('copied');
        ipBox.textContent = ipText;
      }, 2000);
    }).catch(() => {
      alert('Failed to copy IP.');
    });
  });

  // Scroll animation for sections and text
  const sections = document.querySelectorAll('.section');

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom) {
        section.classList.add('show');
        const text = section.querySelector('.text');
        if (text) {
          text.classList.add('show');
        }
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // initial check in case already scrolled
});
