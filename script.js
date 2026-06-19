
let total = 0;
let currentOperator = null;

function calculateNum(operator) {
    // Get the input value and turn it into a number
    const num = parseFloat(document.querySelector('#input').value);

    // If there's no input, don't do anything
    if (isNaN(num)) return;

    // If this is the first operation, just store the number
    if (currentOperator === null) {
        total = num;
    } else {
        // Otherwise, perform the previous operation
        if (currentOperator === '+') total += num;
        if (currentOperator === '-') total -= num;
        if (currentOperator === '*') total *= num;
        if (currentOperator === '/') total /= num;
    }

    // Store the new operator and clear the input
    currentOperator = operator;
    document.querySelector('#input').value = '';
    
    // Show the current total on the display
    document.getElementById('display').innerText = total;
}

function equals() {
    // Get the input value
    const num = parseFloat(document.querySelector('#input').value);

    // If there's no operator or input, don't do anything
    if (currentOperator === null || isNaN(num)) return;

    // Perform the final operation
    if (currentOperator === '+') total += num;
    if (currentOperator === '-') total -= num;
    if (currentOperator === '*') total *= num;
    if (currentOperator === '/') total /= num;

    // Update display and reset
    document.getElementById('display').innerText = total;
    document.querySelector('#input').value = '';
    currentOperator = null;
}

function clearCalc() {
    // Reset everything
    total = 0;
    currentOperator = null;
    document.querySelector('#input').value = '';
    document.getElementById('display').innerText = '0';
}