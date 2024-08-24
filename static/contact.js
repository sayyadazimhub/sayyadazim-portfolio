    document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object to easily handle form data
    const formData = new FormData(this);

    // Construct the email data
    const emailData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Use a service like EmailJS or Formspree to handle email sending
    // Here, we just simulate the action for demo purposes
    sendEmail(emailData)
        .then(response => {
            document.getElementById('response-message').textContent = 'Your message has been sent successfully!';
        })
        .catch(error => {
            document.getElementById('response-message').textContent = 'There was an error sending your message.';
        });
});

function sendEmail(emailData) {
    // Simulate an email sending operation
    // Replace this with a call to your email service API
    return new Promise((resolve, reject) => {
        // Simulate a successful email sending
        setTimeout(() => resolve('Success'), 1000);
    });
}