const buttonZero = document.getElementById("button-zero");
const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const buttonThree = document.getElementById("button-three");
const buttonFour = document.getElementById("button-four");
const buttonFive = document.getElementById("button-five");
const buttonSix = document.getElementById("button-six");
const buttonSeven = document.getElementById("button-seven");
const buttonEight = document.getElementById("button-eight");
const buttonNine = document.getElementById("button-nine");
const buttonPlus = document.getElementById("addition");
const buttonMinus = document.getElementById("subtraction");
const buttonMultiply = document.getElementById("multiplication");
const buttonDivide = document.getElementById("division");
const buttonEqual = document.getElementById("equal");
const buttonClear = document.getElementById("all-clear");
const buttonDecimal = document.getElementById("comma");
const buttonBackspace = document.getElementById("backspace");
let operator = null;
let num1 = null;
let num2 = null;

const buttons = [
  buttonZero,
  buttonOne,
  buttonTwo,
  buttonThree,
  buttonFour,
  buttonFive,
  buttonSix,
  buttonSeven,
  buttonEight,
  buttonNine,
];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerText;
    const display = document.getElementById("display");

    if (operator != null) {
      display.innerText.slice(0, display.innerText.length);
      num2 = buttonValue;
    }

    display.innerText += buttonValue;

    if (display.innerText.length > 8) {
      display.innerText = display.innerText.slice(0, 8);
    }
  });
});

buttonClear.addEventListener("click", () => {
  const display = document.getElementById("display");
  display.innerText = "";
});

buttonBackspace.addEventListener("click", () => {
  const display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1);
});

buttonDecimal.addEventListener("click", () => {
  const display = document.getElementById("display");
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});

buttonPlus.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    num1 = display.innerText;
    display.innerText = "+";
    operator = "+";
  }
});

buttonEqual.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    num2 = display.innerText;
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
    }
    display.innerText = result;
    operator = null;
  }
});
