const balanceDisplay = document.querySelector("#balance");
let balance = parseFloat(balanceDisplay.textContent) || 0;
let amount;

if (localStorage.getItem('balance')) {
    balance = parseFloat(localStorage.getItem('balance'));
    balanceDisplay.textContent = `₱${balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
// localStorage.getItem('balance');

let numInput = document.querySelector("#input-number");
let transactionDisplay = document.querySelector("#display");


const depositBtn = document.querySelector("#deposit");
const withdrawBtn = document.querySelector("#withdraw");
const cancelBtn = document.querySelector("#cancel");

const depositBalance = () => {
    amount = parseFloat(numInput.value);
    let decimalAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    // checking if the amount is an integer then the display will not show a decimal number
    if(Number.isInteger(amount)){
        decimalAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    // checking if the value is not a number
    if(isNaN(amount)){
        transactionDisplay.value = " ";
    } else{
        balance += amount;
        const finalBalance = balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

        balanceDisplay.textContent = `₱${finalBalance}`;
        transactionDisplay.textContent = `You've successfully deposited ₱${decimalAmount}`;
        numInput.value = "";
    }

}

const withdrawBalance = () => {
    amount = parseFloat(numInput.value);
    let decimalAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // checking if the amount is an integer then the display will not show a decimal number
    if(Number.isInteger(amount)){
        decimalAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    // checking if the value is not a number
    if(isNaN(amount)){
        transactionDisplay.value = " ";
    } else{
        balance -= amount;
        const finalBalance = balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

        balanceDisplay.textContent = `₱${finalBalance}`;
        transactionDisplay.textContent = `You've successfully withdrew ₱${decimalAmount}`;
        numInput.value = "";
    }
}

const cancel = () => {
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight;

    let elem = document.createElement("div");

    elem.textContent = "I miss you";
    elem.style.position = "absolute";
    elem.style.left = Math.round(Math.random() * fullWidth) + "px";
    elem.style.top = Math.round(Math.random() * fullHeight) + "px";
    elem.style.background = "red";
    elem.style.fontSize = "25px";

    document.body.appendChild(elem);

}

depositBtn.addEventListener("click", depositBalance);
withdrawBtn.addEventListener("click", withdrawBalance);
cancelBtn.addEventListener("click", cancel);


const x = 1 - "1" + "1";
console.log(x);
