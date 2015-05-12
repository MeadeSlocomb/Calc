var num1 = document.querySelector("#num_one");
var num2 = document.querySelector("#num_two");
var calc = document.querySelector("#calculateBtn");
var answer = document.querySelector("#answer");
var add = document.querySelector(".add");
var subtract = document.querySelector(".subtract");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
var operator;

add.onclick = function() {
  operator === "add"
}

// subtract.onclick = function() {
//   operator === "subtract"
// }

// multiply.onclick = function() {
//   operator === "multiply"
// }

// divide.onclick = function() {
//   operator === "divide"
// }

var add = function(num1, num2) {
  var sum = num1 + num2;
  answer.innerHTML = sum.toString();
  }

// var subtract = function(num1, num2) {
//   var diff = num1 - num2;
//   answer.innerHTML = diff.toString();
//   }

// var multiply = function(num1, num2) {
//   var product = num1 * num2;
//   answer.innerHTML = product.toString();
//   }

// var divide = function(num1, num2) {
//   var quotient = num1 / num2;
//   answer.innerHTML = quotient.toString();
//   }

calc.onclick = function() {
  var box1 = Number(num1.value);
  // var box2 = Number(num2.value);
  // if (operator === "add")
    add(box1, box2);
  // else if (operator === "subtract")
  //   subtract(box1, box2);
  // else if (operator === "multiply")
  //   multiply(box1, box2);
  // else
  //   divide(box1, box2);
};
