// localStorage.clear();
let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", login);

function login(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let form = document.getElementById("form");
    console.log(form, email, password)
    if (email == "" || password == "") {
        e.preventDefault();
        alert("all fieild are mandetry");
        return;
    }
    else if (email != localStorage.email || password != localStorage.password) {
        let result = confirm("user have't account you want to create");
        if (result)window.location.href = "registration.html";
        else return;
    }
    else {
        alert("congratulation you are succesfuly log in ")
        window.location.href = "../1-Home/home.htm";
    }
}