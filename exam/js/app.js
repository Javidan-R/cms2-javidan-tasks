// TASK 1
const numberDividends = (par ,start, end) =>{
    let newNum = []
    for (let i = start; i < end; i++) {       if(i % par === 0 )     newNum.push(i)        }
    return newNum
}
console.log(numberDividends(50 , 100 , 1000))

// TASK 2
const swapCase = (string) => {
    let toUp = string.toUpperCase();
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === toUp[i]) {
        newString += toUp[i].toLowerCase();
      } else {
        newString += string[i].toUpperCase();
      }
    }
    return newString;
  };
  
  console.log(swapCase('agKCCCaD'));    
//TASK 3  

let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84];

const countEvensAndOdds = numbers => {
  let sumEvens = 0;
  let sumOdds = 0;
  let countEvens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sumEvens += numbers[i];
      countEvens++;
    } else {
      sumOdds += numbers[i];
    }
  }
  return { sumEvens, sumOdds, countEvens };
};

console.log(countEvensAndOdds(numbers));