const DigiSum = (f) => {
  var z = f,
    d = 0,
    rev = 0;
  while (z % 10 !== 0) {
    d = z % 10;
    rev = rev * 10 + d;
    z = Math.floor(z / 10);
  }
  return rev;
};

//   var f = parseInt(prompt("Enter the number:"));
var f = 12345;
var r = DigiSum(f);
console.log(`REVERSE OF ENTERED NUMBER IS : ${r}`);
