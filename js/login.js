
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check credentials (replace with actual validation logic)
    if (username === "user" && password === "user") {
        window.location.href = "index_after-Login.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});




