document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(pass !== confirm){
        document.getElementById("msg").innerHTML = "Passwords do not match!";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    document.getElementById("msg").innerHTML = "Registered Successfully!";
});