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
  operator = "a";
  console.log("add here");
}

subtract.onclick = function() {
  operator = "s";
    console.log("sub here");

}

multiply.onclick = function() {
  operator = "m";
    console.log("mult here");

}

divide.onclick = function() {
  operator = "d";
    console.log("div here");

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
