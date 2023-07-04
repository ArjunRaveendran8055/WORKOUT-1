const check = (f) => {
  if (f % 2 == 0) {
    console.log(`${f} IS EVEN`);
  } else {
    console.log(`${f} Is ODD`);
  }
};
var w = parseInt(prompt("ENTER THE NUMBER TO CHECK:"));
//var w = 120;
check(w);
