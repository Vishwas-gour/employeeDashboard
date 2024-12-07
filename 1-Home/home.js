// <<<<<<<<<< SIDE-BAR-ARROW >>>>>>>>>>>>>
let downArrow = document.querySelector("#down_arrow");
let upArrow = document.querySelector("#up_arrow");
let sideBar = document.querySelector("#side-bar");
let body = document.querySelector("body");
console.log(body);
downArrow.addEventListener("click", () => {
   sideBar.style.width = "4rem";
   downArrow.style.display = "none";
   upArrow.style.display = "flex";

});
upArrow.addEventListener("click", () => {
   sideBar.style.width = "0";
   downArrow.style.display = "flex";
   upArrow.style.display = "none";
});


// TAKE THEME FROM LOCAL STORAGE AND ADD CLASS NAME
document.body.className = localStorage.theme;
