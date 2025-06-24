  function toggleLearnMore() {
    const content = document.querySelector('.hero');
    const button = document.getElementById('about');

    // Toggle 'visible' class to control visibility via CSS (do NOT use inline style.display)
    content.classList.toggle('visible');

    // Update button text
    if (content.classList.contains('visible')) {
      button.textContent = 'See Less';
    } else {
      button.textContent = 'Learn More';
    }
  }
