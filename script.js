document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        showError("Both fields are required!");
    } else if (username !== "admin" || password !== "password123") {
        showError("Incorrect username or password!");
    } else {
        window.location.href = "welcome.html";  // Redirect to a different page upon successful login
    }
});

function showError(message) {
    const errorElement = document.getElementById("error-msg");
    errorElement.textContent = message;
}