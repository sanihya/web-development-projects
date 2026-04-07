document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPass = localStorage.getItem("userPass");

    if(email === storedEmail && pass === storedPass){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").innerHTML = "Invalid Email or Password!";
    }
});