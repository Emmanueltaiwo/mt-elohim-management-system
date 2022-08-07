let email = document.getElementById("email")
let password = document.getElementById("password")
let login = document.getElementById("login")
let notification = document.getElementById("notification")

let adminEmail = "admin@mtelohimhospital.org"
let adminPassword = "mtelohim"

login.addEventListener("click", function() {
    if (email.value === adminEmail && password.value === adminPassword) {
        window.location = "dashboard.html";
    }
    
    else {
        notification.textContent = "Incorrect password or e-mail"
    }
})

