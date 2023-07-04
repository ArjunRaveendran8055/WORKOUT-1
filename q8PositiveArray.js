const Check = (ar, w) => {
  var i = 0;
  var count = 0;
  while (i < ar.length) {
    if (ar[i] >= 0) {
      count++;
    }
    i++;
  }
  return count;
};
const ar = [10, 20, -30, 33, 45, -94, 47, -55, 11, 24];
var count = Check(ar);
console.log(`Count of positive integers are: ${count}`);
