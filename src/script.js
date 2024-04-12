const Uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const Symbols = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const generate = document.querySelector("#generate");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");

function generatePassword() {
  let length = document.querySelector("#length").value;
  alert(`length is : ${length}`);
  console.log(length);
}

// randam password generate

function randamPassword(type) {
  const storeIndex = [];
  for (let i = 0; i < 4; i++) {
    const randamPassword = Math.floor(Math.random() * type.length);
    storeIndex.push(type[randamPassword]);
  }
  const cnvstr = storeIndex.join("");
  alert(cnvstr);
  return cnvstr;
}

function allrandamPassword() {
  checkLength();
  let storepassword = "";
  for (
    let i = 0;
    i <= document.querySelector("#length").value / storeTrue;
    i++
  ) {}
}

//console.log(randamPassword(Numbers));
//console.log(randamPassword(Lowercase));

function checked(checkItem) {
  //upper, lower, number, symbol
  return checkItem.checked; // true or false
}

function checkLength() {
  var storeTrue = 0;
  //if (
  //  checked(upper) == true ||
  //  checked(lower) == true ||
  //  checked(number) == true ||
  //  checked(symbol) == true
  //) {
  //  alert("all is true");
  //} else {
  //  alert("fail");
  //}

  if (checked(upper) == true) {
    storeTrue++;
  }
  if (checked(lower) == true) {
    storeTrue++;
  }
  if (checked(number) == true) {
    storeTrue++;
  }
  if (checked(symbol) == true) {
    storeTrue++;
  }

  alert(storeTrue);
}
generate.addEventListener("click", () => {
  checkLength();
  generatePassword();
  randamPassword(Lowercase);
  //console.log(upper.checked); // important
});
