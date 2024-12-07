console.log("link");
let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
console.log(toggle);
toggle.addEventListener("click",()=>{
    //  if no class name exist return false else true
    let check = body.classList.toggle("dark-mode");
    if(check){
        localStorage.setItem("theme", "dark-mode" );
    }else{
        localStorage.setItem("theme", "light-mode" );
    }

    console.log(body);
});
document.body.className = localStorage.theme;


// <<<<<<<<<< SIDE-BAR-ARROW >>>>>>>>>>>>>
let downArrow = document.querySelector("#down_arrow");
let upArrow = document.querySelector("#up_arrow");
let sideBar = document.querySelector("#side-bar");
downArrow.addEventListener("click",()=>{
  sideBar.style. width = "4rem";
   downArrow.style.display = "none";
   upArrow.style.display = "flex";

});
upArrow.addEventListener("click",()=>{
    sideBar.style. width = "0";
    downArrow.style.display = "flex";
    upArrow.style.display = "none";

 });


 