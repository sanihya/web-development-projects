
const users = [
    { username: "user123", password: "pass123" },
    { username: "admin", password: "admin123" },
    { username: "guest", password: "guest123" }
];

const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const usernameInput = document.getElementById("username");


window.onload = () => {
    if(localStorage.getItem("rememberedUser")) {
        usernameInput.value = localStorage.getItem("rememberedUser");
        document.getElementById("rememberMe").checked = true;
    }
};

togglePassword.addEventListener("click", () => {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
});


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;


    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";

    
        if(rememberMe) {
            localStorage.setItem("rememberedUser", username);
        } else {
            localStorage.removeItem("rememberedUser");
        }

        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);

    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
});


document.getElementById("forgotPassword").addEventListener("click", () => {
    alert("Password reset link sent to your email (simulation).");
});