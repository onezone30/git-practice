const menuBtn = document.querySelector("#menu-button");
const sidebarMenuBtn = document.querySelector("#sidebar-menu-button");
const mainNav = document.querySelector(".main-nav");
const sidebar = document.querySelector(".sidebar");

let isSidebarOn = false;


const sidebarAppear = () => {
    if(!isSidebarOn){
        sidebar.classList.add("active");
        sidebar.classList.remove("notActive");
        mainNav.style.visibility = "hidden"
        isSidebarOn = true;
    } else{
        sidebar.classList.remove("active");
        sidebar.classList.add("notActive");
        isSidebarOn = false;
        mainNav.style.visibility = "visible";

    }
}

menuBtn.addEventListener("click", sidebarAppear);
sidebarMenuBtn.addEventListener("click", sidebarAppear);


const navi = document.querySelector("#nav");
const home = document.querySelector(".home");


window.addEventListener("scroll", function(){
    if (window.scrollY > home.offsetTop + 100) {
        navi.style.opacity = 0.5;
      } else {
        navi.style.opacity = 1; //
      }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show-left-right");

        } else {
            entry.target.classList.remove("show-left-right");
        }
    });
});



const hiddenLeftElement = document.querySelectorAll(".hidden-left");
const hiddenRightElement = document.querySelectorAll(".hidden-right");
hiddenLeftElement.forEach((el) => observer.observe(el));
hiddenRightElement.forEach((el) => observer.observe(el));