const Swap = (a, b) => {
  var t = a;
  a = b;
  b = t;
  console.log(`value of x is ${a} \n value of y is ${b}`);
};

var x = parseInt(prompt("Enter the value of variable x:"));
var y = parseInt(prompt("Enter the value of variable y:"));
// var x = 2;
// var y = 3;
Swap(x, y);
