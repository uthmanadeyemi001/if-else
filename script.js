
let total = 0;
let currentOperator = null;

function calculateNum(operator) {
    const inputElement = document.querySelector('#input');
    const num = parseFloat(inputElement.value);

    if (isNaN(num)) return;

    if (currentOperator === null) {
        total = num;
    } else {
        applyOperator(num);
    }

    currentOperator = operator;
    inputElement.value = '';
    updateDisplay(total);
}

function equals() {
    const inputElement = document.querySelector('#input');
    const num = parseFloat(inputElement.value);

    if (currentOperator === null || isNaN(num)) return;

    applyOperator(num);
    inputElement.value = '';
    currentOperator = null;
    updateDisplay(total);
}

function applyOperator(num) {
    if (currentOperator === '+') total += num;
    if (currentOperator === '-') total -= num;
    if (currentOperator === '*') total *= num;
    if (currentOperator === '/') total /= num;
    if (!Number.isFinite(total)) total = 0;
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}