// Establishing calculator class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // As soon as calculator class is created, call the clear function to start on a clean slate.
        this.clear();
    }

    // function to clear the text element.
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // function to delete a single number on the current operand text element.
    delete() {

    }

    // function to keep adding number to current oprand text element as user types in the words
    appendNumber(number) {
        this.currentOperand = number;
    }

    // function to get what operation was chosen
    chooseOperation(operation) {

    }

    // function to compute what the final result of the output
    compute() {

    }

    // function to then update the display of the calculator
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

// Grabbing HTML element and assigning them variables.
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Creating calculator object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Applying logic when a button is pressed
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

