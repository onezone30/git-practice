const startingMinutes = 2;
let time = startingMinutes * 60;
let isRunning = false; 
const timerEl = document.querySelector("#timer");

let intervalId;

function start() {
    if(!isRunning){
        intervalId = setInterval(() => {
            isRunning = true
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
        
            seconds = seconds < 10 ? '0' + seconds : seconds;
        
            timerEl.innerHTML = `${minutes}: ${seconds}`;
            time--;
            i
            if (time == 0) {
              clearInterval(intervalId);
              alert("Time's up");
            }
          }, 1000);
    }
}

function stop(){
    if(isRunning){
        clearInterval(intervalId);
        isRunning = false;
    }
}

function reset(){
    clearInterval(intervalId);
    time = startingMinutes * 60;

    timerEl.innerHTML = `${startingMinutes}: 00`;
    
}