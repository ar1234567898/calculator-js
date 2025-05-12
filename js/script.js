const buttonZero = document.getElementById("button-0");
const buttonOne = document.getElementById("button-1");
const buttonTwo = document.getElementById("button-2");
const buttonThree = document.getElementById("button-3");
const buttonFour = document.getElementById("button-4");
const buttonFive = document.getElementById("button-5");
const buttonSix = document.getElementById("button-6");
const buttonSeven = document.getElementById("button-7");
const buttonEight = document.getElementById("button-8");
const buttonNine = document.getElementById("button-9");
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
buttonPercent = document.getElementById("percent");

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const display = document.getElementById("display");
    const currentValue = display.innerText;

    // If the display shows "0", replace it with the button's value
    if (currentValue === "0") {
      display.innerText = button.innerText;
    } else {
      display.innerText += button.innerText;
    }

    // Limit the display length to 12 characters (including math symbols)
    if (display.innerText.length > 12) {
      display.innerText = display.innerText.slice(0, 12);
    }
  });
});

function action(action) {
  const display = document.getElementById("display");
  const currentValue = display.innerText;

  // Prevent two operations in a row
  const lastChar = currentValue[currentValue.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    return; // Do nothing if the last character is already an operator
  }

  if (currentValue.length < 12) {
    display.innerText += action;
    operator = action;
  }
}

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

buttonPlus.addEventListener("click", () => action("+"));
buttonMinus.addEventListener("click", () => action("-"));
buttonMultiply.addEventListener("click", () => action("*"));
buttonDivide.addEventListener("click", () => action("/"));

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

buttonPercent.addEventListener("click", () => {
  const display = document.getElementById("display");
  const currentValue = parseFloat(display.innerText);
  if (!isNaN(currentValue)) {
    const result = currentValue / 100;
    display.innerText = result;
    numbers.push(result);
  };
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

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    const button = document.getElementById(`button-${key}`);
    button.click();
  } else if (key === "+") {
    buttonPlus.click();
  } else if (key === "-") {
    buttonMinus.click();
  } else if (key === "*") {
    buttonMultiply.click();
  } else if (key === "/") {
    buttonDivide.click();
  } else if (key === "=" || key === "Enter") {
    buttonEqual.click();
  } else if (key === "Backspace") {
    buttonBackspace.click();
  } else if (key === "Escape") {
    buttonClear.click();
  }
});
