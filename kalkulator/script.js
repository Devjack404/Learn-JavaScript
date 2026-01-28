let inputPrevious = '';
let inputOperator = '';
let inputCurrent = '';

function updateDisplay() {
    document.getElementById('display').value =`${inputPrevious} ${inputOperator} ${inputCurrent}`.trim();
    console.log(`${inputPrevious} ${inputOperator} ${inputCurrent}`)
}

function clearButton () {
    inputPrevious = '';
    inputOperator = '';
    inputCurrent = '';
    updateDisplay();
}


function appendNumber(number){
    inputCurrent += number;
    updateDisplay();
}

function appendOperators (operator) {
    if (inputCurrent === "") return;
    inputPrevious = inputCurrent;
    inputOperator = operator;
    inputCurrent = "";
    updateDisplay();
    
}


function calculate(){
    let prev = Number(inputPrevious);
    let curr = Number(inputCurrent); 
    let result;

    switch (inputOperator) {
        case "/":
            if(curr === 0){
                alert("Cannot divide by zero !!")
                return;
            }
            result = prev / curr;
            break;
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "X":
            result = prev * curr;
            break;
        default :
            return;
    }

    inputOperator = result;
    inputPrevious = '';
    inputCurrent = '';
    updateDisplay();
}

function equal(hasil){
    console.log(calculate())
}
