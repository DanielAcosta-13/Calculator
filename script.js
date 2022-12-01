//--- --- --- Calculator --- --- ---
const process = document.getElementById("process");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button")
const del = document.getElementById("del");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

let operation = ""

function displayProcess(button) {
    process.textContent = process.textContent + button.innerHTML
    operation = operation + button.innerHTML
    operation = operation.replace("\u{02212}", "-")
    operation = operation.replace("\u{000d7}", "*")
    operation = operation.replace("\u{000f7}", "/")
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if ((result.textContent).length != 0) {
            process.textContent = result.textContent
            operation = result.textContent
            result.textContent = ""
        }
        displayProcess(button)
    })
});

del.onclick = function(a) {
    process.textContent = (process.textContent).slice(0, -1)
    operation = operation.slice(0, -1)
    result.textContent = ""
};

clear.onclick = function(a) {
    process.textContent = ""
    result.textContent = ""
    operation = ""
};

equal.onclick = function() {
    result.textContent = eval(operation)
};


//--- --- --- Light Mode --- --- ---
const body = document.querySelector("body");
const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener('click', () => {
    body.classList.toggle("lightmode")
    body.style.transition = '0.5s'
});
