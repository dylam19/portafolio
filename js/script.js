const toggleMenuElement = document.getElementById("nav-toggle");
const mainMenuElement = document.getElementById("container-nav");
const blackScreen = document.getElementById("black-screen")
const toggleClass = document.querySelector('.fa-bars')
let boolean = false;

toggleMenuElement.addEventListener('click',()=>{
    if (boolean == false){
        mainMenuElement.style.left = "0";
        blackScreen.style.display ="block";
        toggleClass.classList.replace('fa-bars', 'fa-times');
        boolean = true;
    } else {
        mainMenuElement.style.left = "-350px";
        blackScreen.style.display ="none";
        toggleClass.classList.replace('fa-times', 'fa-bars');
        boolean = false;
    }
});
blackScreen.addEventListener('click', ()=>{
    mainMenuElement.style.left = "-350px";
    blackScreen.style.display ="none";
    toggleClass.classList.replace('fa-times', 'fa-bars');
    boolean = false;
})