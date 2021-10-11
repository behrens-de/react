let numb1 = null;
let numb2 = null;
let operator = null;
let result = null;

function updateDisplay(input) {


    input.replace(",", ".");
    console.log(numb1)

    const display = document.querySelector('.display');
    const dispalyFrstNumb = display.innerText[0];

    if(input === "AC"){
        numb1 = null;
        numb2 = null;
        operator = null;
        result = null;
        display.innerText = 0; 
        return
    }

    if (dispalyFrstNumb === "0") {
        display.innerText = "";
    }

    if (input === "/" || input === "*" || input === "=" || input === "-" || input === "+") {

        if (numb1 === null) {
            numb1 = Number(display.innerText);
            operator = input;
        } else {
            numb2 = Number(display.innerText);
        }

        if (numb2 !== null) {
            if (operator === '*') {
                result = numb1 * numb2;
            }
            if (operator === '/') {
                result = numb1 / numb2;
            }

            if (operator === '-') {
                result = numb1 - numb2;
            }
            if (operator === '+') {
                result = numb1 + numb2;
            }

            display.innerText = result;

            if (result !== null) {
                numb1 = null;
                numb2 = null;
                operator = null;
                result = null;
            }

        } else {
            display.innerText = 0; 
        }

    } else {
        display.innerText += input;
    }




}


function handelClick(e) {
    updateDisplay(this.innerText.replace(',','.'));
}

function handelInput() {

    const numbs = document.querySelectorAll('li');

    numbs.forEach(numb => {
        numb.addEventListener('click', handelClick);
    })
}

handelInput();