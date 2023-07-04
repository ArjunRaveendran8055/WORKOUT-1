var n = 5;
var str = "";
for (var i = 1; i <= n; i++) {
  for (var j = n; j > i; j--) {
    str += " ";
  }
  for (var k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
}
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    str += " ";
  }
  for (var k = 7; k >= 2 * i - 1; k--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
