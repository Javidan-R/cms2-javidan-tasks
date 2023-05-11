// TASK 1
const numberDividends = (par, start, end) => {
  let newNum = [];
  for (let i = start; i < end; i++) {
    if (i % par === 0) newNum.push(i);
  }
  return newNum;
};
console.log(numberDividends(50, 100, 1000));

// TASK 2
const swapCase = (string) => {
  let toUp = string.toUpperCase();
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === toUp[i]) {
      newString += toUp[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
};

console.log(swapCase("ALion"));
//TASK 3

let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84];

const countEvensAndOdds = (numbers) => {
  let  start =  {  sumEvens: 0  ,  sumOdds: 0   ,   countEvens: 0   , countOdds: 0          } 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      start.sumEvens += numbers[i];
      start.countEvens++;
    } else {
      start.sumOdds += numbers[i];
      start.countOdds++;
    }
  }
  return { start};
};

console.log(countEvensAndOdds(numbers));
