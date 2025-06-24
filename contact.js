
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual submission

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    let isValid = true;

    // Get input elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Validation rules
    if (name.value.trim() === '') {
      showError(name, 'Full name is required.');
      isValid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === '') {
      showError(email, 'Email address is required.');
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      isValid = false;
    }

    if (message.value.trim() === '') {
      showError(message, 'Message cannot be empty.');
      isValid = false;
    }

    if (isValid) {
      this.submit(); // If valid, allow form submission
    }
  });

  function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '13px';
    error.style.marginTop = '5px';
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

