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
const buttonMinus = document.getElementById("substraction");
const buttonMultiply = document.getElementById("multiplication");
const buttonDivide = document.getElementById("division");
const buttonEqual = document.getElementById("equal");
const buttonClear = document.getElementById("all-clear");
const buttonDecimal = document.getElementById("comma");
const buttonBackspace = document.getElementById("backspace");
const buttonBracket = document.getElementById("brackets");
const display = document.getElementById("display");

let operator = null;
let count = 0;

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
  buttonNine
];

let numbers = [];

function action(action) {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    numbers.push(display.innerText);
    display.innerText += action;
    numbers.push(action);
    operator = action;
  }
}

function isInteger(value) {
  return value == parseInt(value, 10);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const display = document.getElementById("display");
    const currentValue = display.innerText;

    // If the display shows "0", replace it with the button's value
    if (currentValue === "0") {
      display.innerText = button.innerText;
    } else if (display.innerText == operator) {
      // If the display shows an operator, replace it with the button's value
      display.innerText = button.innerText;
    } else {
      display.innerText += button.innerText;
    }

    // Limit the display length to 8 characters
    if (display.innerText.length > 12) {
      display.innerText = display.innerText.slice(0, 12);
    }
  });
});

window.addEventListener("load", () => {
  const display = document.getElementById("display");
  display.innerText = "0"; // Initialize display to "0"
});

buttonClear.addEventListener("click", () => {
  const display = document.getElementById("display");
  display.innerText = "0"; // Reset display to "0"
  operator = null;
  numbers = [];
  count = 0; // Reset the bracket count
});

buttonPlus.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    action("+");
  }
});

buttonMinus.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    action("-");
  }
});

buttonMultiply.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    action("*");
  }
});

buttonDivide.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    action("/");
  }
});

buttonDecimal.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = display.innerText;
  if (!currentValue.includes(".")) {
    display.innerText += ".";
  }
});

buttonBackspace.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = display.innerText;
  if (currentValue.length > 1) {
    display.innerText = currentValue.slice(0, -1);
  } else {
    display.innerText = "0"; // Reset to "0" if only one character remains
  }
});

buttonEqual.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    numbers.push(display.innerText);
    const result = eval(numbers[numbers.length - 1]);
    display.innerText = result;
    operator = null;
    numbers = [];
  }
});

buttonBracket.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = display.innerText;
  let currBrecket = null;

  if (count % 2 == 0) {
    currBrecket = "(";

  } else if (count % 2 != 0) {
    // Check if the last character is an operator
    currBrecket = ")";

  }
  if (display.innerText.length > 18) {
    display.innerText = display.innerText.slice(0, 18);
  }
  if (currentValue === "0") {
    display.innerText = currBrecket;
    numbers.push("(");
    count++;
  } else {
    display.innerText += currBrecket;
    numbers.push(")");
    count++;
  }
});
