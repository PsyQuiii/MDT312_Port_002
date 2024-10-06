window.onload = loginLoad;

function loginLoad() {
    document.getElementById("myLogin").onsubmit=checkLogin;
}

function checkLogin() {
    
    const loginUsername = document.forms["myLogin"]["username"].value;
    const loginPassword = document.forms["myLogin"]["password"].value;

    
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");
        return true; 
    } else {
        alert("Invalid username or password. Please try again.");
        return false; 
    }
}
