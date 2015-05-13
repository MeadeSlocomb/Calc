var num1 = document.querySelector("#num_one");
var num2 = document.querySelector("#num_one");
var calc = document.querySelector("#calculateBtn");
var answer = document.querySelector("#answer");
var add = document.querySelector(".add");
var subtract = document.querySelector(".subtract");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
var Num1;
var operator;

add.onclick = function() {
  number1 = Num1
  operator = "a";
  var num2 = document.querySelector("#num_two");
}

subtract.onclick = function() {
  operator = "s";
}

multiply.onclick = function() {
  operator = "m";
}

divide.onclick = function() {
  operator = "d";
}

var add1 = function(num1, num2) {
  var sum = num1 + num2;
  answer.innerHTML = sum.toString();
  }

var subtract1 = function(num1, num2) {
  var diff = num1 - num2;
  answer.innerHTML = diff.toString();
  }

var multiply1 = function(num1, num2) {
  var product = num1 * num2;
  answer.innerHTML = product.toString();
  }

var divide1 = function(num1, num2) {
  var quotient = num1 / num2;
  answer.innerHTML = quotient.toString();
  }



calc.onclick = function() {

  var box1 = Number(num1.value);
  var box2 = Number(num2.value);

  switch (operator) {
    case "a":
      add1(box1, box2);
      break;

    case "s":
      subtract1(box1, box2);
      break;

    case "m":
      multiply1(box1, box2);
      break;

    case "d":
      divide1(box1, box2);
      break;

      default:
  }
};
