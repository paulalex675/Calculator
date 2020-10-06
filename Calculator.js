document.getElementById('#calcMain');
const numBut = document.querySelectorAll(".nums");
const funcBut = document.querySelectorAll(".funcs");
const btnEquals = document.querySelector("#equals");
var display = document.querySelector("#display");
/*const btn1 = document.getElementById("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#zero");
const btnDec = document.querySelector("#decimal");
const btnDZ = document.querySelector("#doubleZero");
const btnZero = document.querySelector("#zero");
*/
var calc = [];
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
    calc.splice(0, calc.length);
    })
funcBut.forEach((button) => {
    button.addEventListener('click', () => {
        calc.push(display.textContent);
        display.textContent = "";
        var opera = document.createElement('div');
        opera.textContent = button.value;
        display.appendChild(opera);
        calc.push(display.textContent);
        display.textContent = "";
    })
})
btnEquals.addEventListener('click', () => {
    calc.push(display.textContent);
    var answer = calc.join('');
    console.log(eval(answer));

})
const btnPlusMinus = document.querySelector("#plusMinus");
const btnPercent = document.querySelector("#percent");
const btnSum = document.querySelector("#plus");
const btnSub = document.querySelector("#minus");
const btnMulti = document.querySelector("#multi");
const btnDivide = document.querySelector("#divide");

