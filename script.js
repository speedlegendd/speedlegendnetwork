// Animate all sections with class 'section' when scrolled into view
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');

  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= windowHeight * 0.8) {
      // Animate image inside this section
      const image = section.querySelector('.image-spin');
      if (image) {
        image.style.animationPlayState = 'running';
      }
      // Show section & text
      section.classList.add('show');

      const text = section.querySelector('.text');
      if (text) {
        text.classList.add('show');
      }
    }
  });
});

// IP copy functionality (unchanged)
const ipBox = document.getElementById('ipBox');

ipBox.addEventListener('click', () => {
  const ipText = ipBox.textContent.replace('IP: ', '').trim();

  navigator.clipboard.writeText(ipText).then(() => {
    ipBox.classList.add('copied');
    setTimeout(() => {
      ipBox.classList.remove('copied');
    }, 1500);
  }).catch(err => {
    alert('Failed to copy IP: ' + err);
  });
});
