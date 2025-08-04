document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const message = document.getElementById("registerMessage");
    message.textContent = "Registration successful! Redirecting...";
    setTimeout(() => { window.location.href = "login.html"; }, 1500);
});
