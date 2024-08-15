const display = document.querySelector(".clock");
const startBtn = document.getElementById("start-button")
const stopBtn = document.getElementById("stop-button")
const resetBtn = document.getElementById("reset-button")

console.log("Hello world");

let startTime = 0; 
let timer = null;
let elapsedTime = 0;
let isRunning = false;



function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}
function stop(){
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}
function reset(){
    
    clearInterval(timer);
    startTime = 0; 
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");milliseconds

    display.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);