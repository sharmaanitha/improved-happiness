var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("Enter total bill: "));

var tax = num1 * 0.07;

var tip = (tax + num1)*0.05;

var total = (tax + tip) + num1;

containerEle.innerHTML="Your total is: $" + total;