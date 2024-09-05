const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let today = Date.now()
let targetDate = new Date('2025-01-01T00:00:00.000Z');


intervalId = setInterval(() => {
    let timeDiff = targetDate - Date.now();
    let getDays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    let getHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let getMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000 / 60);
    let getSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    days.textContent = getDays;
    hours.textContent = getHours;
    minutes.textContent = getMinutes;
    seconds.textContent = getSeconds;
  }, 1000);





