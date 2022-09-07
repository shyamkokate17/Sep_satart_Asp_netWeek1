// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function validation() {

    alert('Function call successfully');

    var filter = /^([a-zA-Z0-9_\.\-])+\(([a-zA-Z0-9\.-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!^$&*-])/;

    var Name = document.getElementById("name").value;
    var Username = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("pass").value;
    var RePassword = document.getElementById("repass").value;

    if (Name == '') {
        alert('Warning::Name field cannot be empty...');
        return false;
    }
    else if (Username == '') {
        alert('Warning:: USername field cannot be empty...');
        return false;
    }
    else if (Email == '') {
        alert('Warning:: Email field cannot be empty...');
        return false;
    }
    else if (!filter.test(Email)) {
        alert('Incorrect email');
    }
    else if (Password == '') {
        alert('Please enter the password...');
        return false;
    }
    else if (RePassword == '') {
        alert('Please confirm the password...');
        return false;
    }
    else if (!pwd_expression.test(Password)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if (Password != RePassword) {
        alert('Password not Matched');
    }
    else if ((document.getElementById("pass").value.length < 6) || (document.getElementById("pass").value.length > 12)) {
        alert('Warning:: Password must be having characters beetween 6 to 12...');
    }
    else {
        alert('Thank you for Registration...')
        return true;
    }

}

//const container = document.querySelector(".container"),
//    pwShowHide = document.querySelectorAll(".showHidePw"),
//    pwFields = document.querySelectorAll(".password"),
//    signUp = document.querySelector(".signup-link"),
//    login = document.querySelector(".login-link");

////   js code to show/hide password and change icon
//pwShowHide.forEach(eyeIcon => {
//    eyeIcon.addEventListener("click", () => {
//        pwFields.forEach(pwField => {
//            if (pwField.type === "password") {
//                pwField.type = "text";

//                pwShowHide.forEach(icon => {
//                    icon.classList.replace("uil-eye-slash", "uil-eye");
//                })
//            } else {
//                pwField.type = "password";

//                pwShowHide.forEach(icon => {
//                    icon.classList.replace("uil-eye", "uil-eye-slash");
//                })
//            }
//        })
//    })
//})

//// js code to appear signup and login form
//signUp.addEventListener("click", () => {
//    container.classList.add("active");
//});
//login.addEventListener("click", () => {
//    container.classList.remove("active");
//});
