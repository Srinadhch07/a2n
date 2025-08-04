document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("loginMessage").textContent = "Login successful! Redirecting...";
    setTimeout(() => { window.location.href = "index.html"; }, 1500);
});

