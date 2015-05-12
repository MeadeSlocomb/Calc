var num1 = document.getElementById("num_one");
var num2 = document.getElementById("num_two");
var calc = document.getElementById("calculateBtn");
var answer = document.getElementById("answer");


var add = function(num1, num2) {
  // var sum = (Number(num1) + Number(num2));
  var sum = Number(num1) + Number(num2);
  answer.innerHTML = sum.toString();
};

calc.onclick = function() {
  var box1 = Number(num1.value);
  var box2 = Number(num2.value);
  add(box1, box2);
};

// function subtract(num1, num2) {
//   (Number(num1) + Number(num2);
//   return answer;
// }

// function multiply(num1, num2) {
//   (Number(num1) * Number(num2);
//   return answer;
// }

// function divide(num1, num2) {
//   (Number(num1) / Number(num2);
//   return answer;


// calc.addEventListener("click", add);
