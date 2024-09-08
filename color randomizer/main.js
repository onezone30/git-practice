const container = document.querySelector(".container");

for(let i = 0; i < 30; i++){
    const newBox = document.createElement("div");
    const textBox = document.createTextNode("12312312");
    newBox.appendChild(textBox);
    newBox.classList.add("box"); 
    container.appendChild(newBox); 
}

const boxes = document.querySelectorAll(".box");

const randomColor = () => {
    const charCode = "0123456789abcdef"
    const charLength = 6;

    let code = "";

    for(let k = 0; k < charLength; k++){
        const randomChar = Math.floor(Math.random() * charCode.length);
        code += charCode.substring(randomChar, randomChar + 1);
    }

    return code;
}

function generateBackgroundColor(){
    boxes.forEach((boxes) => {
        const newColorCode = randomColor();
        boxes.style.background = `#${newColorCode}`;
        boxes.innerText = "#" + newColorCode;
    })

}

generateBackgroundColor();