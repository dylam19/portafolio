const toggleMenuElement = document.getElementById("nav-toggle");
const mainMenuElement = document.getElementById("container-nav");
const blackScreen = document.getElementById("black-screen")
const sectionAll = document.querySelectorAll('section[id]');


let sideNav = false;
function showSideNav(){
    mainMenuElement.style.left = "0";
    blackScreen.style.display ="block";
    toggleMenuElement.lastElementChild.classList.replace('fa-bars', 'fa-times')
    sideNav = true;
}
function toggleSideNav(){
    mainMenuElement.style.left = "-350px";
    blackScreen.style.display ="none";
    toggleMenuElement.lastElementChild.classList.replace('fa-times', 'fa-bars');
    sideNav = false;
}

toggleMenuElement.addEventListener('click',()=>{
    if (sideNav == false){
        showSideNav()
    } else {
        toggleSideNav()
    }
});
blackScreen.addEventListener('click', ()=>{
    toggleSideNav()
});

if (window.matchMedia("(max-width: 600px)").matches) {
    mainMenuElement.addEventListener('click', ()=>{
    toggleSideNav()
    })
 }

 
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const sectionHeightFooter = document.getElementById('footer-area').offsetHeight;
    const sectionTopFooter = document.getElementById('footer-area').offsetTop;
    if (scrollY > sectionTopFooter - sectionHeightFooter - 250){
        mainMenuElement.lastElementChild.style.opacity="0%";
    }else{
        mainMenuElement.lastElementChild.style.opacity="100%";
    };
});

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});


