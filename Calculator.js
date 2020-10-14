document.getElementById('#calcMain');
const numBut = document.querySelectorAll(".nums");
const funcBut = document.querySelectorAll(".funcs");
const btnEquals = document.querySelector("#equals");
var display = document.querySelector("#display");
var calc = [];
var a = null;
var b = null;
var c = null;
var operator = '';
var dotCounter = 0;
function clear() {
    display.textContent = "";
    calc.splice(0, calc.length);
    a = null;
    b = null;
    c = null;
    dotCounter = 0;
    operator = '';
}
function check() {
     if (calc.length < 1) {
        a = calc[0];
        }else if (calc.length > 0) {
        b = calc[calc.length-1];
        a = calc[calc.length-2];
        }else return ('error');
    if (a != undefined && b != undefined) {
    operate(); 
    }
}    
function operate() {
    if (operator == 'sum'){
        c = a + b;
        }else if (operator == 'sub'){
        c = a - b;
        }else if (operator == 'multi'){
        c = a * b;
        }else if (operator == 'divide'){
            if (a == 0 || b == 0) {
                alert ("Hey! Divide by Zero? You sure about that?");
                clear();
                }else  c =  a / b;        
        }else if (operator == 'percent') {
        c =  a / 100 * b;
        }else if ( operator == 'bckSpc') {
        display.textContent = '';
        calc.delete(calc.length -1)
    }
    display.textContent = c;
    calc.push(c);
}
numBut.forEach((button) => {
    button.addEventListener('click', () => {
            if (display.textContent == c) {
                display.textContent = '';
            }
            var newSum = document.createElement('div');
            newSum.textContent = button.value;
            display.appendChild(newSum);
        })
    });
funcBut.forEach((button) => {
    button.addEventListener('click', () => {
        calc.push(parseInt(display.textContent)); 
        display.textContent = '';
        check();
        operator = button.value;
        dotCounter = 0;
    });
})
btnEquals.addEventListener('click', () => {
    calc.push(parseInt(display.textContent));
    check();
    display.textContent = Math.round(c * 10) / 10;
});
const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
   clear(); 
});
const btnDot = document.querySelector('#decimal')
btnDot.addEventListener('click', () => {
    dotCounter++
    if (dotCounter > 1) {
        alert ("Hey I'm only a simple calculator! What you tryin' a pull?");
        clear();
        alert ("MWAHAHA start again");
    }
})