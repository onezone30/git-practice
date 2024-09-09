let addBtn = document.querySelector("#add-note");
let notes = document.querySelector(".notes");


// creating notes
addBtn.addEventListener("click", () => {
    let note = document.createElement("div");
    note.classList.add("note");
    let textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Empty Note");
    textarea.classList.add("textarea");
    
    note.appendChild(textarea);


    note.addEventListener("dblclick", (event) => {
        if (event.target === textarea) {
          console.log("TNAGINMA MOAS");
        }

    });


    notes.insertBefore(note, addBtn);

});

