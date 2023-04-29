// function sum(param1, param2) {
//   console.log(param1 + param2);
// }
// sum(234, 436);

// function pow(params1, params2) {
//   return params1 ** params2;
// }
// console.log(pow(3, 4));

// function isEvenOrOdd(param) {
//   if (param % 2 == 0) {
//     console.log(`${param} cut ededdir`);
//   } else {
//     console.log(`nahh`);
//   }
// }

//  funksiyanni fun-ya argument kimivermek callback

// const formalMeet = (name, gender) => {
//  gender === 'm' ? console.log(`Mr.${name}`) : console.log(`Mr.${name}`)
// }
// formalMeet('Cavidan' ,'m')
// function checkSeason(month) {
//     if (month >= 3 && month <= 5) {
//         return "Spring"
//     } else  if(month >= 6 && month <= 8){
//         return "Summer"
//     }else  if(month >= 9 && month <= 11){
//         return "Autumn"
//     }else {
//         return "Winter"
//     }
// }
// checkSeason(11)

// const changeNum = promptNum =>   Number(promptNum)   // change nUMBER IS FUNCTION
// let num1 = prompt("Eded 1")
// let num2 = changeNum(prompt("Eded 2"))
//  const showFun =  par  => {  console.log(par)    }   // SHOW FUNCTION
// const sum  = (num1 , num2) => num1 + num2    // sum
// const calcPow =  (num1 , num2) =>   num1 ** num2    // pow
// const divide =  (num1 , num2) =>   num1 / num2    // divide
// const subtract =  (num1 , num2) =>   num1 - num2    //subtract
// const multiply =  (num1 , num2) =>   num1 * num2    //multiply
// showFun(calcPow(num1 , num2))
// showFun(sum(num1 , num2))
// showFun(multiply(num1,num2))

// let num1 = prompt("eded daxil edin")
// task1
// const reverseNum = par =>  {
//     let result = 0;
//     result = par.toString.split("").reverse().join("")
//     console.log("Reversed number is : "+result);
// }
// reverseNum(num1)
// task2
// const genNum = par =>{  Math.floor(Math.random() * par) + 1;
// showFun(genNum(num1))

// task3

// const  addNumber = (...num) => return num.reduce((acc, cur) => acc + cur);
// console.log(addNumber(23,3,4,4,44))

// task4
// const arr = [[2,3,4],[6,4,9],[34,6,4]];
// function addArrays(par) {
//     let flattenedList = par.flat();
//     return flattenedList
// }
// console.log(addArrays(arr))

// task5
// function changeToFahrenheit(celsius) {
//   return (celsius * 1.8) + 32;
// }
//changeToFahrenheit(32)

//////////// Loops Tasks /////////////

// task1
// for (let i = 0; i < num1; i++) {
//     console.log(i)
// }

// task2

// setInterval(function() {
//   num1 === 5 ? console.log(`${num1}`) : false
// }, 1000);

// task 3

// function numPow(num1, num2) {
//     return num1 ** num2
// }
// console.log(numPow(3,4))

//taks4

// function printPatter (par){
//     let hastag = " "
//     for (let i = 1; i < par; i++) {
//         hastag += i
//         console.log(hastag)
//     }
// }
// console.log(printPatter(9))

function capitalFinder(capital) {
  switch (capital) {
    case "aze":
      return "BAKU";
      break;
    case "tr":
      return "Ankara";
      break;
    case "ru":
      return "Moscov";
      break;

    default:
      return false;
      break;
  }
}
console.log(capitalFinder("aze"));

const translate = (par) => {
  switch (par) {
    case "en":
      return "welcome";
      break;
    case "ru":
      return "dobro pajolavat";
      break;
    case "az":
      return "xos gelmisiniz";
      break;

    default:
      return false;
      break;
  }
  switch (key) {
    case value:
      break;

    default:
      break;
  }
};

console.log(translate("en"));

const greatThan100 = (arg) => arg > 100;
console.log(greatThan100(120));
