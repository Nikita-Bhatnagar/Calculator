//selected elements
const outputScreen = document.querySelector(".output");
const buttons = document.querySelector(".buttons");

//event listener
buttons.addEventListener("click", expression);

//function
let str = "";
function expression(e) {
  if (
    e.target.parentNode.classList.contains("operator") ||
    e.target.parentNode.classList.contains("numOrPoint") ||
    e.target.parentNode.classList.contains("parentheses")
  ) {
    str = str + e.target.value;
  } else if (e.target.parentNode.classList.contains("clear")) {
    str = "";
  } else if (e.target.value == "backspace") {
    str = str.substr(0, str.length - 1);
  } else if (e.target.value === "=") {
    if (str !== "") str = String(eval(str));
  }

  outputScreen.innerText = str;
}
