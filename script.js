//makes the display equal to the input box of the calculator 
const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function operate() {
    const input = display.value.trim();
const pattern = /(-?\d+(\.\d+)?)([-+*/])(-?\d+(\.\d+)?)/;
    const match = input.match(pattern);

    if (match) {
        const firstNum = match[1];
        const operator = match[3];
        const secondNum = match[4];
        const result = calculate(firstNum, operator, secondNum);
        display.value = result;
    } else {
        display.value = 'Invalid input';
    }
}

function calculate(firstNum, operator, secondNum) {
    let result = 0;

    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);

    if (operator === '/' && secondNum === 0) {
        return 'Error: Cannot divide by zero';
    }

    switch (operator) {
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
            return 'Error: Invalid operator';
    }
    return result;
}


