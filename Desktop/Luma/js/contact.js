function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.id;

    switch(fieldName) {
        case 'name':
            if (value === '') {
                alert('Please enter your full name');
                return false;
            }
            break;

        case 'email':
            if (value === '') {
                alert('Please enter your email address');
                return false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                alert('Please enter a valid email address');
                return false;
            }
            break;

        case 'subject':
            if (value === '') {
                alert('Please select a subject');
                return false;
            }
            break;

        case 'message':
            if (value === '') {
                alert('Please enter your message');
                return false;
            }
            if (value.length < 10) {
                alert('Message must be at least 10 characters long');
                return false;
            }
            break;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const fields = ['name', 'email', 'subject', 'message'];

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('change', function() {
            validateField(this);
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        }
    });
});