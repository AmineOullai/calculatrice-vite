const screen = document.querySelector(".screen");

screen.innerHTML = "0";

const calcButtons = document.querySelectorAll(".buttons > button");

console.log(calcButtons);

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const operations = ["=", "+", "/", "-", "x"];

const fcts = ["del", "reset"];

let savedScreen = "";
let lastOp = "";
let wasLastOp = false;

export function activeButton() {
  calcButtons.forEach((calcButton) => {
    if (numbers.includes(calcButton.innerHTML)) {
      //this is a number button

      calcButton.addEventListener("click", (event) => {
        console.log("number button clicked", calcButton.innerHTML);
        handleNumber(calcButton.innerHTML);
      });
    } else if (operations.includes(calcButton.innerHTML)) {
      calcButton.addEventListener("click", (event) => {
        console.log("opertation button clicked", calcButton.innerHTML);
        handleOperation(calcButton.innerHTML);
      });
    } else if (fcts.includes(calcButton.innerHTML)) {
      calcButton.addEventListener("click", (event) => {
        console.log("function button clicked", calcButton.innerHTML);
        handleFcts(calcButton.innerHTML);
      });
    }
  });
}

function handleNumber(number) {
  if (wasEqual) {
    handleFcts("reset");
  }
  if (!wasLastOp) {
    if (screen.innerHTML.includes(".") && number == ".") return;

    if (screen.innerHTML == "0" && number != ".") {
      screen.innerHTML = number;
    } else {
      screen.innerHTML += number;
    }
  } else {
    //ternary operator
    savedScreen = screen.innerHTML;
    screen.innerHTML = number == "." ? "0." : number;
  }
  wasLastOp = false;
}
let wasEqual = false;

function handleOperation(op) {
  if (lastOp && !wasLastOp && (!wasEqual || op == "=")) {
    let result;
    if (lastOp == "+") {
      //addition
      result = Number(savedScreen) + Number(screen.innerHTML);
    } else if (lastOp == "-") {
      if (wasEqual && op == "=") result = screen.innerHTML - savedScreen;
      else result = savedScreen - screen.innerHTML;
    } else if (lastOp == "x") {
      result = savedScreen * screen.innerHTML;
    } else if (lastOp == "/") {
      if (wasEqual && op == "=") result = screen.innerHTML / savedScreen;
      else result = savedScreen / screen.innerHTML;
    }
    savedScreen = op == "=" && wasEqual ? savedScreen : screen.innerHTML;
    screen.innerHTML = result;
  } else {
  }

  lastOp = op == "=" ? lastOp : op;

  wasLastOp = op == "=" ? false : true;
  wasEqual = op == "=";
}

function handleFcts(fcts) {
  if (fcts == "reset") {
    screen.innerHTML = "0";
    wasEqual = false;
    wasLastOp = false;
    savedScreen = "";
    lastOp = "";
  } else if (fcts == "del" && !wasLastOp) {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
    if (!screen.innerHTML) screen.innerHTML = "0";
  }
}

export function setupKeyboard() {
  window.addEventListener("keyup", (event) => {
    const pressedKey =
      event.key == "*" ? "x" : event.key == "Enter" ? "=" : event.key;
    if (numbers.includes(pressedKey)) {
      handleNumber(pressedKey);
    } else if (operations.includes(pressedKey)) {
      handleOperation(pressedKey);
    }
    if (pressedKey == "Delete") handleFcts("reset");
    else if (pressedKey == "Backspace") handleFcts("del");
  });
}
