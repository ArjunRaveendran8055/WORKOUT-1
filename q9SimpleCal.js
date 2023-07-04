const Calc = (w, f, z) => {
  const sum = (f, z) => {
    console.log(f + z);
  };
  const dif = (f, z) => {
    console.log(f - z);
  };
  const prod = (f, z) => {
    console.log(f * z);
  };
  const div = (f, z) => {
    console.log(f / z);
  };
  switch (w) {
    case 1:
      sum(f, z);
      break;
    case 2:
      dif(f, z);
      break;
    case 3:
      prod(f, z);
      break;
    case 4:
      div(f, z);
      break;
    default:
      console.log("\n!INVALID INPUT!");
  }
};
//var f=20,z=10,w=2
var f = parseInt(prompt("ENTER THE FIRST NUMBER:"));
var z = parseInt(prompt("ENTER THE SECOND NUMBER:"));
console.log(
  "OPERATIONS\n_____________\n\t1 ==>ADDITION\n\t2 ==>SUBTRACTION\n\t3 ==>MULTIPLICATION\n\t4 ==>DIVISION\n"
);
var w = parseInt(prompt("ENTER THE OPTION NUMBER(1-4):"));
Calc(w, f, z);
