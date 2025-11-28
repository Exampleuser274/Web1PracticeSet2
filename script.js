"use strict";

/*
 * PROBLEM-SOLVING APPROACH:
 * 1. Break problems into small functions
 * 2. Name functions and variables clearly
 * 3. Test each function independently
 * 4. Handle errors before they break your code
 */

/* --- URL Slug Generator --- */
// Test strings
const slugifySimple = "Hello World ";
const slugifyHard = "Hello World! This is my blog post.";
const inputArea = document.getElementById("non-slugified-string")
const outputArea = document.getElementById("slugified-string")
function createSlug(preSlug){
  let postSlug = preSlug.replaceAll(' ','-')
  postSlug = postSlug.replaceAll('!','')
  postSlug = postSlug.replaceAll(".",'')
  postSlug = postSlug.toLowerCase()

  return postSlug
}
inputArea.innerHTML = slugifyHard
outputArea.innerHTML = createSlug(slugifyHard)
// TODO: create DOM selector variables for output elements
// TODO: declare the createSlug function (takes text parameter, returns string)
// TODO: invoke createSlug with test string and update DOM

/* --- Simple Calculator --- */
// TODO: add helper function (takes two numbers, returns sum)
// TODO: subtract helper function
// TODO: multiply helper function
// TODO: divide helper function (remember: check for zero!)
const calcAnswer = document.getElementById("calculator-result")
function addNumbers(num1,num2){
  let total = num1+num2
  return total
}
function subtractNumbers(num1,num2){
  let total = num1-num2
  return total
}
function multiplyNumbers(num1,num2){
  let total = num1*num2
  return total
}
function divideNumbers(num1,num2){
  let total = 0
  if (num2 == 0){
    total = "Error"
  }
  else{
    total = num1/num2
  }
  return total
}
// TODO: calculate function - accepts num1, num2, operator; calls appropriate helper
function calculate(num1, num2, operator) {
  let answer = 0
  if ( operator == '+'){
    answer = addNumbers(num1,num2)
  }else if(operator=='-'){
    answer = subtractNumbers(num1,num2)
  }else if(operator=='*'){
    answer = multiplyNumbers(num1,num2)
  }else if(operator=='/'){
    answer = divideNumbers(num1,num2)
  }
  return answer
  // Use conditionals to determine which operation to perform
}

function handleCalculatorSubmit(event) {
  event.preventDefault();

  const aValue = document.getElementById("a").value;
  const bValue = document.getElementById("b").value;
  const operatorElement = document.querySelector(
    'input[name="operator"]:checked'
  );
  if (aValue == ''){
    window.alert("Please enter a value in operand A")
  }else if (operatorElement.value == ''){
    window.alert("please select an operator")
  }else if (bValue == ''){
    window.alert("please enter a value in operand B")
  }else{
    let aNum = Number(aValue)
    let bNum = Number(bValue)
    let answer = calculate(aNum,bNum,operatorElement.value)
    calcAnswer.innerHTML = answer
  }
  // TODO: Coerce string values to numbers
  // TODO: Error handle if no operator is selected (guard clause)
  // TODO: Call calculate function with operands and operator
  // TODO: Update DOM with result
}
const submitButton = document.getElementById("calculate-result")
submitButton.addEventListener("click",handleCalculatorSubmit)
// TODO: Add event listener to form element

/* --- Carousel Interface --- */
const carouselMessages = [
  "Welcome to the carousel!",
  "This is slide 2",
  "Here's slide 3",
  "Almost done - slide 4",
  "Final slide!",
];

let currentIndex = 0;

// TODO: updateCarousel function - displays current message in DOM
// TODO: moveForward function - increment index with wrap-around (hint: modulo)
// TODO: moveBackward function - decrement index with wrap-around
// TODO: Set up event listeners on both buttons
// TODO: Initialize carousel on page load

/* --- Bonus: Dynamic Calculator --- */
// TODO: isOperator function - checks if character is +, -, *, or /
// TODO: parseDynamicInput function - splits string, validates parts, returns object
// TODO: handleDynamicCalculator function - gets input, parses, calculates, updates DOM
// TODO: Add event listener to calculate button
