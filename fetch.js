
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch('api.php?action=contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.success);
            this.reset(); // Clear form
        } else {
            alert(data.error || 'An error occurred');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
});

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('api.php?action=register_student', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.success);
            this.reset();
        } else {
            alert(data.error || 'Something went wrong!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to register student.');
    });
});


