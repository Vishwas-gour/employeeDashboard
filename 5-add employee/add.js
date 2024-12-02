let addbtn = document.querySelector("#btn");
addbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    // for chech all input are filled
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        if (!input.value) {
            alert("Please fill all fields");
            return;
        }
    }

    let url = "http://localhost:3000/employee1";
    let obj = fetch(url);
    let data = await (await obj).json();
    // JSON LENGTH***************************** 
    let sno = Object.keys(data).length + 1;
    // takeing data from form input
    let id;
    let name = document.querySelector("#name").value;
    let department = document.querySelector("#department").value;
    let salary = document.querySelector("#salary").value;
    // console.log(id, name, department, salary);
    try {
        let resposnse = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                sno: sno,
                id: id,
                name: name,
                department: department,
                salary: salary
            }),
            headers: {
                "Contect-Type": "application/json; charset=UTF-8"
            }
        });
        console.log(resposnse);
        let value = await resposnse.json();
        console.log("hey***", value);
        alert("Employee added succesfully");
        window.location.href = "../4-Employee detail/detail.html";
    } catch (error) {
        console.log(error);
        alert("something went wrong");
    }
});