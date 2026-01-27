let inputPrevious = '';
let inputOperator = '';
let inputCurrent = '';


function clearButton () {
    inputCurrent = '';
    inputOperator = '';
    inputCurrent = '';
    document.getElementsByClassName()
}


function appendNumber(number){
    document.getElementById('display').value = `${inputPrevious} ${inputOperator} ${inputCurrent}`;
    inputCurrent += number;
}