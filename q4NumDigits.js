const NumDig = (f) => {
  var z = f,
    d = 0,
    count = 0;
  while (z % 10 !== 0) {
    d = z % 10;
    count++;
    z = Math.floor(z / 10);
  }
  return count;
};

//var f = parseInt(prompt("Enter the number:"));
var f = 12345;
var count = NumDig(f);
console.log(`NUMBER OF DIGITS : ${count}`);
