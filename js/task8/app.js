//////////////////// Task 1 ------
let num = prompt("eded dacil edin");
num = parseInt(sayi);
while (num < 100 || num > 999) {
  num += 7;
}

console.log("netice " + num);

//////////////////////// Task 2 ///////////
let n = parseInt(prompt(" yaz"));
for (let i = 1; i <= n; i++) {
  console.log("for dongusu istifadesi");
}
// ----------------Task 3 --------- 
let sum = 0;
for (let i = 11; i <= 99; i += 2) {
  sum += i;
}
console.log("Iki Reqemli Ededlerin Cemi " + toplam);

// ----------------Task 4 --------- 
function isLucky(bilet) {
    let bilet_str = bilet.toString().padStart(6, "0");
    let sum1 = parseInt(bilet_str[0]) + parseInt(bilet_str[1]) + parseInt(bilet_str[2]);
    let sum2 = parseInt(bilet_str[3]) + parseInt(bilet_str[4]) + parseInt(bilet_str[5]);
    return sum1 === sum2;
  }
  console.log(isLucky(123321));   

// ----------------Task 5 --------- 
const inputDate = prompt("Please enter the date in the format of YYYY.MM.DD:");
const dateArray = inputDate.split(".");
let outputDate;
if (dateArray.length === 3 && dateArray[0].length === 4 && dateArray[1].length === 2 && dateArray[2].length === 2) {
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  const dateObject = new Date(`${month}/${day}/${year}`);
  outputDate = dateObject.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
} else {
  outputDate = "Invalid value entered";
}
console.log(outputDate);

// ----------------Task 6 --------- 
function numberToText() {
    const number = parseInt(prompt("Please enter a number between 1 and 99:"));
    if (isNaN(number) || number < 1 || number > 99) {
      console.log("Invalid number entered");
      return;
    }
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let text = "";
    if (number < 20) {
      text = ones[number];
    } else {
      text = tens[Math.floor(number / 10)];
      if (number % 10 !== 0) {
        text += "-" + ones[number % 10];
      }
    }
    console.log(text);
  }
  

// ----------------Task 7 --------- 
const fullName = prompt("Please enter your full name (in the format 'FIRSTNAME'):");
const lastName = fullName.split(" ")[1];
console.log(lastName);

// ----------------Task 8 --------- 
let phoneNumber  = +prompt("Nomre daxil edin : ")
const isValidNumber = phoneNumber => {
    let cleanedNumber = "";
    for (let i = 0; i < phoneNumber.length; i++) {
      let c = phoneNumber.charAt(i);
      if (c >= '0' && c <= '9') {
        cleanedNumber += c;
      }
    }
    if (cleanedNumber.startsWith("+7") && cleanedNumber.length === 13) {
        return true;
      } else {
        return false;
      }
}