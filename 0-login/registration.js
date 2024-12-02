// localStorage.clear();
document.getElementById("btn").addEventListener("click", add);

function add(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("psw").value;
    if (username == "" || email == "" || password == "" || cnfpsw == "") {
        alert("all fieild are mandetry");
        return;
    } else if (password !== cnfpsw) {
        alert("Password not match");
        return
    }
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    window.location.href = "login.html";

    alert("registration successfull");

}


let verify = document.getElementsByClassName("otp-button");
console.log(ver)
verify.addEventListener('click', function() {
 alert('Element clicked!');
});