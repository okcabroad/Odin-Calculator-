const display = document.getElementById('display')

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = " "
}
//three variables: first number, operator, second number 
let firstNum = ""
let operator = ""
let secondNum = ""

//function that takes an operator and 2 numbers 
function operate(firstNum, operator, secondNum){
    let result = "0";
    //check if second number is zero for division
    if (operator === '/' && secondNum === 0) {
        return "Error: Cannot divide by zero";
    }
    switch(operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        default:
            return "Error..."
    }
    return result;

}





