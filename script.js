let screen = document.getElementById('screen');
let screen2 = document.getElementById('screen2');
let buttons = document.querySelectorAll('[id^=button');
let operators = document.querySelectorAll('[id^=operator]');
let equal = document.getElementById('calculate=');
let clearAll = document.getElementById('clearAll');
let newNumber = true;
let previousNumber = 0;
let currentOperator = null;


// screen starting state
screen.textContent = 0;
screen2.textContent = '0';

// buttons treatment (AC, Equals, Digits and Operators)
clearAll.addEventListener('click', function () {
    clearDisplay();
});


equal.addEventListener('click', function () {
    screen2.textContent = '='
    calculate();
});

buttons.forEach(button => button.addEventListener('click', function () {
    let v = this.textContent;
   
    updateDisplay(v);
    
}));

operators.forEach(operator => operator.addEventListener('click', function () {
    selectOperator(this.textContent);

}));

// functions to update the display, select the operator, calculate, check if there is a pendent operation and clear the display
function updateDisplay(n) {
    let str = screen.textContent.toString();
   
    if(newNumber){
        if (n === '.'){ 
            screen.innerText = '0.'
            newNumber = false;

        }else{
        screen.innerText = parseFloat(n)
        newNumber = false;
        }
        
    } else {
        if(n === '.'){
                if (!str.includes('.')) {
                    screen.innerText += '.'; 
                }               
        }else {
            if (screen.innerText.length <10) { // test to limit the number of characters on the display
                screen.innerText += parseFloat(n)
            }            
        }
    }
  }

function selectOperator (o) {
    if (!newNumber){
        calculate();
        newNumber = true;
        currentOperator = o;
        previousNumber = parseFloat(screen.textContent);
        screen2.textContent = previousNumber.toString() + o

        console.log(currentOperator);
        console.log(previousNumber)
    }
}

function calculate() {
    if (pendentOperation) {
        let nextNumber = parseFloat(screen.textContent);
        
        switch(currentOperator) {
            case '+':
            screen.textContent = previousNumber + nextNumber;
            currentOperator = null;
            break;
            case '-': 
            screen.textContent = previousNumber - nextNumber;
            currentOperator = null;
            break;
            case '*': 
            screen.textContent = previousNumber * nextNumber;
            currentOperator = null;
            break;
            case '/': 
            screen.textContent = previousNumber / nextNumber;
            currentOperator = null;
            break;
        }

        
    }
}

function pendentOperation () {
    currentOperator != null;
}

function clearDisplay() {
    previousNumber = 0;
    nextNumber = 0;
    currentOperator = null;
    newNumber = true;
    screen.textContent = 0;
    screen2.textContent = '0';
}


//implementar formatação de casas decimais

