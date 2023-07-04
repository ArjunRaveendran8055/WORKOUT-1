const DigiSum = (f) => {
  var z = f,
    d = 0,
    sum = 0;
  while (z % 10 !== 0) {
    d = z % 10;
    sum = sum + d;
    z = Math.floor(z / 10);
  }
  return sum;
};

var f = parseInt(prompt("Enter the number:"));
var s = DigiSum(f);
console.log(`SUM OF DIGITS IS : ${s}`);
