// Intersection Observer to animate section on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      const img = entry.target.querySelector('.image-spin');
      const text = entry.target.querySelector('.text');

      if (img) {
        img.style.animationPlayState = "running";
        img.classList.add('show');
      }

      if (text) {
        text.classList.add('show');
      }
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Copy IP to clipboard on click
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
