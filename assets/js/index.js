/* Selecting the elements in the DOM. */
const inputs = document.querySelectorAll("input");
const input = document.querySelector("#max-sum");
const rangeA = document.querySelector("#range-a");
const rangeB = document.querySelector("#range-b");
const range_a_value_div = document.querySelector("#range-a-value");
const range_b_value_div = document.querySelector("#range-b-value");
const sumDiv = document.querySelector("#sum");
let max;

/**
 * It takes two arguments, converts them to integers, adds them together, and then prints the result to
 * the sumDiv element.
 * @param value - The value of the input field
 * @param rangeValue - The value of the range input
 */
function printSumDiv(value, rangeValue) {
  sumDiv.innerHTML = `Sum is : ${parseInt(value) + parseInt(rangeValue)}`;
}

/**
 * If flag is true, set the max value of rangeA to the max value minus the value.
 * If flag is false, set the max value of rangeB to the max value minus the value
 * @param flag - true or false, depending on which range slider is being changed
 * @param value - The value of the range slider
 */
function setMaxValue(flag, value) {
  if (flag) {
    rangeA.max = parseInt(max) - parseInt(value);
  } else {
    rangeB.max = parseInt(max) - parseInt(value);
  }
}

/**
 * It sets the initial values of the input, rangeA, rangeB, max, range_a_value_div, range_b_value_div and sumDiv.
 */
function init() {
  input.value = 50;
  rangeA.value = 0;
  rangeA.max = 0;
  rangeB.value = 50;
  rangeB.max = 50;
  max = input.value;
  range_a_value_div.innerHTML = `${rangeA.max}`;
  range_b_value_div.innerHTML = `${rangeB.max}`;
  sumDiv.innerHTML = `Sum is : ${input.value}`;
}

/* A forEach loop that is adding an event listener to each input element.*/
inputs.forEach((e) => {
  // The event listener is listening for the input event. When the input event is fired, it checks the type of the input element
  e.addEventListener("input", (e) => {
    if (e.target.type === "number") {
      max = input.value;
      if (rangeA.value < rangeB.value) {
        setMaxValue(false, rangeA.value);
        setMaxValue(true, rangeB.value);
      } else {
        setMaxValue(false, rangeA.value);
        setMaxValue(true, rangeB.value);
      }
    } else if (e.target.id === "range-b") {
      range_b_value_div.innerHTML = `${e.target.value}`;
      printSumDiv(e.target.value, rangeA.value);
      setMaxValue(true, rangeB.value);
    } else {
      range_a_value_div.innerHTML = `${e.target.value}`;
      printSumDiv(e.target.value, rangeB.value);
      setMaxValue(false, rangeA.value);
    }
  });
});

window.onload = init();
