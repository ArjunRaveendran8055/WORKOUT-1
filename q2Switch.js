const Check = (a) => {
  switch (a) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      console.log("NUMBER!");
      break;
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("VOWEL!");
      break;
    default:
      console.log("CONSONANTS!");
  }
};

var f = prompt("Enter the character:");
// var f = "2";
Check(f);
