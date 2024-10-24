// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('invitationForm');
    const successMessage = document.getElementById('successMessage');
    const sendAnotherLink = document.getElementById('sendAnother');

    // Form submission handler
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent page refresh

        // Simulate form processing (add your real functionality here if needed)
        console.log('Form submitted successfully!');

        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
    });

    // Send another invitation
    sendAnotherLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Reset form and show it again
        form.reset();
        form.style.display = 'block';
        successMessage.classList.add('hidden');
    });
});
