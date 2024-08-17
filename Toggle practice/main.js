// let toggle = document.querySelector(".toggles");
// let darkIcon = document.querySelector(".dark");
// let lightIcon = document.querySelector(".light");
// let isDark = false;

// function changingTheme(){
//     if(isDark === false){
//         darkIcon.style.display = "none";
//         darkIcon.classList.add("fade-out");
//         darkIcon.classList.remove("fade-in");

//         lightIcon.style.display = "block";
//         lightIcon.classList.add("fade-in");
//         lightIcon.classList.remove("fade-out");

//         document.body.classList.add("darkmode");
//         isDark = true;
//     } else {
//         darkIcon.style.display = "block";
//         darkIcon.classList.add("fade-in");
//         darkIcon.classList.remove("fade-out");

//         lightIcon.style.display = "none";
//         lightIcon.classList.add("fade-out");
//         lightIcon.classList.remove("fade-in");

//         document.body.classList.remove("darkmode");
//         document.body.classList.add("lightmode");
//         isDark = false;

//     } 

// }

// toggle.addEventListener("click", changingTheme);

let toggle = document.querySelector(".toggles");
let darkIcon = document.querySelector(".dark");
let lightIcon = document.querySelector(".light");
let isDark = false;

function changingTheme(){
    if(isDark === false){
        lightIcon.classList.remove("fade-out");
        lightIcon.classList.add("fade-in");
        darkIcon.classList.remove("fade-in");
        darkIcon.classList.add("fade-out");
        setTimeout(function() {
            darkIcon.style.display = "none";
            lightIcon.style.display = "block";
          
        }, 500); // wait for the transition to complete
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
        isDark = true;
    } else {
        
        lightIcon.classList.remove("fade-in");
        lightIcon.classList.add("fade-out");
        darkIcon.classList.remove("fade-out");
        darkIcon.classList.add("fade-in");
        setTimeout(function() {
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";

        }, 500); // wait for the transition to complete
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode");
        isDark = false;
    } 
}

toggle.addEventListener("click", changingTheme);