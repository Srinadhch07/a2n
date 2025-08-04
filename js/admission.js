document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('confirmationMessage').innerText = "Thank you! You’re registered. We’ll contact you soon.";
    this.reset();
});
