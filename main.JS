var calc = document.querySelector("#calculateBtn");
var answer = document.querySelector("#answer");
var add = document.querySelector(".add");
var subtract = document.querySelector(".subtract");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
var value1;
var value2;
var operator;

add.onclick = function() {
  value1 = document.querySelector("#input").value;
  operator = "a";
}

subtract.onclick = function() {
  value1 = document.querySelector("#input").value;
  operator = "s";
}

multiply.onclick = function() {
  value1 = document.querySelector("#input").value;
  operator = "m";
}

divide.onclick = function() {
  value1 = document.querySelector("#input").value;
  operator = "d";
}

var add1 = function(box1, box2) {
  var sum = box1 + box2;
  answer.innerHTML = sum.toString();
  }

var subtract1 = function(box1, box2) {
  var diff = box1 - box2;
  answer.innerHTML = diff.toString();
  }

var multiply1 = function(box1, box2) {
  var product = box1 * box2;
  answer.innerHTML = product.toString();
  }

var divide1 = function(box1, box2) {
  var quotient = box1 / box2;
  answer.innerHTML = quotient.toString();
  }



calc.onclick = function() {
  value2 = document.querySelector("#input").value;
  var box1 = Number(value1);
  var box2 = Number(value2);

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
