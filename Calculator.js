document.getElementById('#calcMain');
const numBut = document.querySelectorAll(".nums");
const funcBut = document.querySelectorAll(".funcs");
const btnEquals = document.querySelector("#equals");
var display = document.querySelector("#display");
var calc = [];
var a = 0;
var b = 0;
var c = 0;
var operator = '';
function check() {
     if (calc.length < 2) {
        a = calc[calc.length-1];
    }else if (calc.length > 1) {
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
        c =  a / b;        
    }else if (operator == 'percent') {
        c =  a / 100 * b;
    }
    calc.push(c);

}
numBut.forEach((button) => {
    button.addEventListener('click', () => {
        var newSum = document.createElement('div');
        newSum.textContent = button.value;
        display.appendChild(newSum);
        })
    });
const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
    display.textContent = "";
    result = 0;
    calc.splice(0, calc.length);
    a = 0;
    b = 0;
    c = 0;
    operator = '';
})
funcBut.forEach((button) => {
    button.addEventListener('click', () => {
        calc.push(parseFloat(display.textContent));
        operator = button.value;
        check();
        display.textContent = "";
    });
})
btnEquals.addEventListener('click', () => {
    calc.push(parseFloat(display.textContent));
    check();
    display.textContent = c;
});
const btnPlusMinus = document.querySelector("#plusMinus");