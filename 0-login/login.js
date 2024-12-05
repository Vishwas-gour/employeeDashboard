// localStorage.clear();
let create = document.querySelector("#btn");
let sign = document.querySelector("#sign-up");
let forget = document.querySelector(".forget-password");
let submit = document.querySelector("#submit-btn");
let generate = document.querySelector("#generate-btn");
let otpInput = document.querySelector("#otp");
let emailF = document.querySelector("#emailF");
console.log(create);
console.log(sign);
create.addEventListener("click", login);
sign.addEventListener("click", (e) => {
    window.location.href = "registration.html";
});
// <<<<<<<<<--OTP-Forget-->>>>>>>>>>>>>>
forget.addEventListener("click", () => {
    console.log("i am in ");
    
    generate.addEventListener("click", (e) => {
        generate.style.display = "none";
        otpInput.style.display = "inline";
        submit.style.width = "40%";
        submit.style.display = "block";

        let otp = "";
        for (let i = 0; i < 4; i++) {
            otp += Math.trunc(Math.random() * 4);
        }
        localStorage.setItem("forgetOtp", otp);
        console.log(otp);
            // <<<<<<<<<--submit-Forget-OTP->>>>>>>>>>>>>>

        submit.addEventListener("click", (e) => {
            console.log(otpInput.value);
            console.log(localStorage.forget-otp)
            if (otpInput.value != localStorage.forgetOtp) {
                alert("Wrong OTP try again");
                return;
            }
            alert(`Your password => ${localStorage.password}`);
    
        })

    })
})

function login(e) {
    console.log(e.target)
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
        e.preventDefault();
        console.log(localStorage.email, localStorage.password)
        let result = confirm("You haven't account, do you want to create");
        if (result) window.location.href = "registration.html";
        else return;
    }
    else {
        alert("congratulation you are succesfuly log in ")
        window.location.href = "../index.html";
    }
}
