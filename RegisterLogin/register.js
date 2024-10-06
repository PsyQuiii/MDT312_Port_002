window.onload = pageLoad;

function pageLoad() {
    document.getElementById("myRegister").onsubmit=validateForm;
}

function validateForm() {
   
    var firstname = document.forms["myRegister"]["firstname"].value;
    var lastname = document.forms["myRegister"]["lastname"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var birthday = document.forms["myRegister"]["bday"].value;
    var email = document.forms["myRegister"]["bday"].value;
    var username = document.forms["myRegister"]["username"].value;
    var password = document.forms["myRegister"]["password"][0].value;
    var retypepassword = document.forms["myRegister"]["password"][1].value;
    var errorMsg = document.getElementById("errormsg");

    
    if (!firstname || !lastname || !gender || !birthday || !email || !username || !password || !retypepassword) {
        errorMsg.innerHTML = "Please fill in all required fields.";
        return false;
    }

    
    if (password !== retypepassword) {
        errorMsg.innerHTML = "Passwords do not match. Please try again.";
        return false;
    }
    
    alert("Register successful!");
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


    
    return true;
}
