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

