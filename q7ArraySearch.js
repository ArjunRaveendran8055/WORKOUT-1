const Search = (ar, w) => {
  var i = 0;
  while (i < ar.length) {
    if (ar[i] == w) {
      console.log(`ITEM FOUND IN THIS ARRAY AT POSITION ${i + 1}`);
      break;
    }
    if (i == ar.length - 1) {
      console.log("Couldn't find item :(");
    }
    i++;
  }
};
const ar = [10, 20, 30, 33, 45, 74, 47, 55, 11, 24];
const w = parseInt(prompt("ENTER THE ITEM:"));
//var w = 50;
Search(ar, w);
