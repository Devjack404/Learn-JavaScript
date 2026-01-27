let inputPrevious = '';
let inputOperator = '';
let inputCurrent = '';

function updateDisplay() {
    document.getElementById('display').value =`${inputPrevious} ${inputOperator} ${inputCurrent}`.trim();
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