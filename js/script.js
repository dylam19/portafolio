const toggleMenuElement = document.getElementById("nav-toggle");
const mainMenuElement = document.getElementById("container-nav");
const mainMenuItems = document.getElementById("nav-items")
const blackScreen = document.getElementById("black-screen")
const toggleClass = document.querySelector('.fa-bars')
const cardImage = document.getElementsByClassName('project-card-image');
const projectCardElement = document.getElementsByClassName('project-card');
const projectTitleElement = document.getElementsByClassName('project-title')

console.log(projectTitleElement)

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
});

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const sectionHeight = document.getElementById('footer-area').offsetHeight;
    const sectionTop = document.getElementById('footer-area').offsetTop;

    if (scrollY > sectionTop - sectionHeight - 250){
        console.log('ye')
        mainMenuItems.style.opacity ="0%";
    }else{
        mainMenuItems.style.opacity ="100%";
    };
});


