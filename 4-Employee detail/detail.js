// <<<<<<<<<<<<<<<<<<<< ALERT WHILE ADD-MEMBER >>>>>>>>>>>>>>>>>>>> 

// --------> CRUD-BUTTONS
let addBtn = document.getElementById("addBtn");
let updateBtn = document.getElementById("updateBtn");
let deleteBtn = document.getElementById("deleteBtn");
let saveBtn = document.getElementById("saveBtn");
// -------------------------------------------------------
console.log(addBtn);
console.log(updateBtn);
console.log(deleteBtn);
addBtn.addEventListener("click", () => {
    alert("you want to add New member")
});
let id = 1;
async function addToData() {
    let url = "http://localhost:3000/employee1"
    let obj = await fetch(url);
    let data = await obj.json();
    console.log(data);
    let form = document.querySelector("#form");

    console.log(form)
    // <<<<<<<<<<<<<<<<<<<< GETTING DATA TO FORM >>>>>>>>>>>>>>>>>>>> 
    data.map((key) => {
        let ul = `<ul class = "about-employee field" id = ${key.id}>
               <li class = "li d_sno">  <input type="number" readonly  value = ${key.sno}    id = d_sno-${key.id}> </li>
               <li class = "li d_id">  <input type="text" readonly   value = ${key.id}    id = d_id-${key.id} ></li>
               <li class = "li d_name">  <input type="text" readonly  value = ${key.name}    id = d_name-${key.id}> </li>
               <li class = "li d_department">  <input type="text" readonly   value =${key.department}    id = d_department-${key.id}> </li>
               <li class = "li d_salary">  <input type="number" readonly  value = ${key.salary}     id = d_salary-${key.id}> </li>`
        ul += `</ul>`
        form.innerHTML += ul;
    });
}
addToData();

// <<<<<<<<<<<<<<<<<<<< UPDATE(--put--)DATA IN FORM >>>>>>>>>>>>>>>>>>>> 
async function saveData(id) {
    console.log(id);
    let snoP = document.getElementById(`d_sno-${id}`).value;
    let idP = document.getElementById(`d_id-${id}`).value;
    let nameP = document.getElementById(`d_name-${id}`).value;
    let departmentP = document.getElementById(`d_department-${id}`).value;
    let salaryP = document.getElementById(`d_salary-${id}`).value;
    let urlId = `http://localhost:3000/employee1/${id}`;
    let responseObj = await fetch(urlId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sno: snoP,
            id: idP,
            name: nameP,
            salary: salaryP,
            department: departmentP
        }),
    });
    alert("data have successfully updated");
}



updateBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    alert("click the member that you want to update")
    let form = document.querySelector("#form");
    form.addEventListener("click", async (e) => {
        let id = e.target.id
        let parentId = e.target.closest(".field").id;
        // console.log(parentId)

        let urlId = `http://localhost:3000/employee1/${id}`;
        // console.log("url-id", urlId);

        if (id != `d_department-${parentId}` && id != `d_salary-${parentId}`) {
            alert("you could only change department and salary");
            return;
        }
        // ---------> remove attribute
        let target = document.getElementById(`${id}`).removeAttribute("readonly");
        let value = document.getElementById(`${id}`).value;
        let check = value;
        console.log("value is -->", value)
        // ---------> BY KEY PRESS EVENT
        window.addEventListener("keypress", (e) => {
            // if(e.key)
            // console.log(e.key);
            if (e.key == "Enter") {
                saveData(parentId);
                return;
            }

        })
        saveBtn.addEventListener("click", (e) => {
            saveData(parentId);
        });

    })

});
// ------------------------------------------------------------------------------------------------------
// <<<<<<<<<<<<<<<<<<<< REMOVE MEMBER >>>>>>>>>>>>>>>>>>>> 

async function recDel(id) {
    let urlId = `http://localhost:3000/employee1/${id}`;

    let responseObj = await fetch(urlId, {
        method: "DELETE",
    });
    console.log(responseObj);

    let data = await responseObj.json();
    console.log(data);
    alert("data successfully deleted");
}

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("click the member that you want to Remove");
    form.addEventListener("click", async (e) => { 
        let parentId = e.target.closest(".field").id;
        recDel(parentId);

    })
});