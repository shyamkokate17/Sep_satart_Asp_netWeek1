// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function registration() {

    var Firstname = document.getElementById("fname").value; var Lastname = document.getElementById("empid").value; var letters = /^[A-Za-z]+$/; var Email = document.getElementById("designation").value; var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2, 4})+$/; var Phone = document.getElementById("phone").value; var Username = document.getElementById("uname").value; var Password = document.getElementById("pass").value; var RePassword = document.getElementById("repass").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    if (Firstname == '') { alert('Warning:: First Name field cannot be empty...'); return false; } else if (!letters.test(Firstname)) { alert('First Name field required only alphabet characters'); } else if (Lastname == '') { alert('Warning:: Last Name field cannot be empty...'); return false; } else if (!letters.test(Lastname)) { alert('Last Name field required only alphabet characters'); }

    else if (Email == '') { alert('Warning:: Email field cannot be empty...'); return false; } else if (!filter.test(Email)) { alert('Incorrect email'); } else if (Phone == '') { alert('Please provide your contact number...'); return false; } else if (Username == '') { alert('Warning:: User Name field cannot be empty...'); return false; } else if (Password == '') { alert('Please enter the password...'); return false; } else if (RePassword == '') { alert('Please confirm the password...'); return false; } else if (!pwd_expression.test(Password)) { alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed'); } else if (Password != RePassword) { alert('Password not Matched'); } else if ((document.getElementById("pass").value.length < 6) || (document.getElementById("pass").value.length > 12)) { alert('Warning:: Password must be having characters beetween 6 to 12...'); } else { alert('Thank you for registration...'); return true; }
}


