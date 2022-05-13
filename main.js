// get all elements
//images array
let allImgs = document.querySelectorAll(".landing img")
//bullets array
let bullets = document.querySelectorAll(".landing ul li")
let slideCount = allImgs.length;
let currentSlide = 2;
//buttons
let leftButton = document.querySelector(".direct_left");
let rightButton = document.querySelector(".direct-right")
//default efficts at home
allImgs[currentSlide].classList.add("active-img");
bullets[currentSlide].classList.add("dark");
//auto slider
setInterval(function () {
    unactive();
    currentSlide++;
    if (currentSlide === 5) {
      currentSlide = 0;
    }
    allImgs[currentSlide].classList.add("active-img");
    bullets[currentSlide].classList.add("dark");
},6000)
//next and previous buttons events
leftButton.onclick = function () {
    unactive();
    currentSlide--;
    console.log(currentSlide)
    if (currentSlide === -1) {
        currentSlide = 4;
    }
    allImgs[currentSlide].classList.add("active-img");
    bullets[currentSlide].classList.add("dark")
}
rightButton.onclick = function () {
    unactive()
    currentSlide++;
    console.log(currentSlide)
    if (currentSlide === 5) {
      currentSlide = 0;
    }
    allImgs[currentSlide].classList.add("active-img");
    bullets[currentSlide].classList.add("dark");
}
// function to remove active class
function unactive() {
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].classList.remove("active-img");
    }
    for (let j = 0; j < bullets.length; j++){
        bullets[j].classList.remove("dark")
    }
}
//*===================================================
// navigation line
let liOfNav = document.querySelectorAll(".menu-bar li");
//set data to all li
for (let i = 0; i < liOfNav.length; i++){
    liOfNav[i].setAttribute("data-index",i)
}
// home efficts
liOfNav[0].classList.add("line")
//add line class when click
liOfNav.forEach((e)=>{
    e.onclick = function () {
        noLines();
        liOfNav[parseInt(e.getAttribute("data-index"))].classList.add("line");
        console.log("done")
    
}
})
function noLines() {
    for (let i = 0; i < liOfNav.length; i++){
        liOfNav[i].classList.remove("line")
    }
}