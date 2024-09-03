let input = document.querySelector("#input");
let inputBtn = document.querySelector(".button");
let lists = document.querySelector(".lists");
let xIcon = document.querySelector("#x-icon");



// let list = [] || storedList;
// const storedList = JSON.parse(localStorage.getItem("task"));

const storedList = JSON.parse(localStorage.getItem("task")) || [];
let list = [...storedList];

inputBtn.addEventListener("click", creatingList = () =>{
    
    //creating a list
    const createList = document.createElement("li");
    const listNode = document.createTextNode(input.value);
    createList.appendChild(listNode);

    //creating a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_btn";
    const createIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    createIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" id="x-icon"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
    deleteBtn.appendChild(createIcon);


    //delete the selected list everytime the delete button is clicked
    deleteBtn.addEventListener("click", () => {
        const index = list.indexOf(listNode.textContent);
        if (index !== -1) {
            list.splice(index, 1);
            createList.remove();
            localStorage.setItem("task", JSON.stringify(list));
        } else{
            console.log("ERROR");
        }
    });
    //if the input is null, do nothing
    if(input.value == ""){
        input.value = "";
    } else{
        lists.appendChild(createList);
        list.push(input.value);
        createList.appendChild(deleteBtn);
        localStorage.setItem("task", JSON.stringify(list));
        console.log(list);
        input.value = "";
        
    }
});

