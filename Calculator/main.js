let display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear-button");
const backBtn = document.querySelector("#backspace-button");
const equals = document.querySelector("#equals");

function inputValue(val){
    display.value += val;
}

function clr(){
    display.value = "";
}
function bspace(){
    display.value = display.value.slice(0, -1); 
}

function solve(){
    try {
        const answer = eval(display.value);
        display.value = answer;
    }catch(error){
        display.value = "ERROR";
    }
}

clearBtn.addEventListener("click", clr);
backBtn.addEventListener("click", bspace);
equals.addEventListener("click", solve);