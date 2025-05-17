// Animate image and text on scroll into view
window.addEventListener('scroll', () => {
  const section = document.getElementById('lifesteal-section');
  const image = document.querySelector('.image-spin');
  const text = document.querySelector('.text');

  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8) {
    image.style.animationPlayState = 'running';
    section.classList.add('show');
    text.classList.add('show');
  }
});

// IP copy functionality
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
