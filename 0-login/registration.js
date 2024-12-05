// localStorage.clear();
let submit = document.querySelector("#submit-btn");
let generate = document.querySelector("#generate-btn");
let otpInput = document.querySelector("#otp");
console.log(submit, generate, otpInput)
generate.addEventListener("click", async (e) => {
    e.preventDefault();

    generate.style.display = "none";
    otpInput.style.display = "inline";
    submit.style.width = "40%";
    submit.style.display = "block";

    let otp = "";
    for (let i = 0; i < 4; i++) {
        otp += Math.trunc(Math.random() * 4);
    }
    localStorage.setItem("otp", otp);
    console.log(otp);

    // let pr = prompt("asdf");

    let email = document.getElementById("email").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("confirm-password").value;
    if (firstName == "" || email == "" || password == "" || cnfpsw == "") {
        alert("all fieild are mandetry");
        return;
    } else if (password !== cnfpsw) {
        alert("Password not match");
        return
    }
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    submit.addEventListener("click", (e) => {
        console.log(otpInput.value);
        if (otpInput.value != localStorage.otp) {
            alert("Wrong OTP try again");
            return;
        }
        alert("registration successfull");

    })

});

