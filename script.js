// Establishing calculator class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // As soon as calculator class is created, call the clear function to start on a clean slate
        this.clear();
    }

    // function to clear all text element.
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // function to delete a single number on the current operand text element
    delete() {
        // Slicing the last number of the string
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    // function to keep adding number to current oprand text element as user types in the words
    appendNumber(number) {
        // Wanna make sure only one period is entered. If more, do not run this function
        if (number === '.' && this.currentOperand.includes('.')) return;
        // Converting to string because we want to append and not add
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    // function when an operation is chosen
    chooseOperation(operation) {
        // check if current operand has no value this function will not run
        if (this.currentOperand === '') return;
        // if the previous operand value exists, run the compute function
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    // function to compute what the final result of the output
    compute() {
        // Empty final computated variable
        let computation;
        // Have all numbers be a float so that an operation can be done
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // Make sure both previous operand and current operand exists, if not exit function
        if (isNaN(prev) || isNaN(current)) return;

        // Switch operation for each operation
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;

            case '-':
                computation = prev - current;
                break;

            case '÷':
                computation = prev / current;
                break;

            case 'X':
                computation = prev * current;
                break;

            // When nothing is selected, return from function
            default: return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    // function to then update the display of the calculator
    updateDisplay() {
        // The text in current operand will be the value passed on by the currentOperand variable
        this.currentOperandTextElement.innerText = this.currentOperand;
        // if an operation exists, add the operation to the end of the previous operand display
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

// Grabbing HTML element and assigning them variables.
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Creating calculator object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Applying logic when a number button is pressed
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

// Applying logic to when a operation button is pressed
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

// Applying button logic when equal button is pressed. Calculate operations
equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

// Applying button logic when AC button is pressed, clear the output display
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

// Applying button logic when delete button is pressed, chop the last number entered
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})