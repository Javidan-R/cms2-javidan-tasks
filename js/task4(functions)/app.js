// let weight = +prompt("Cekninizi daxil edin")
// let height = +prompt("boyunuzu daxil edin")
// function calcBmi(weight , height){
//     let bmi  = ( weight / (height * height )) *100
//     return  bmi.toFixed(3)*100
// }
// let saybmi = calcBmi(weight , height)
// if (saybmi <= 18.5) {
//     console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Underweight`)
// } else if(saybmi <25){
//     console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Normal weight`)
// } else if(saybmi <29.9){
//     console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Overweight`)
// }else if(saybmi >30){
//     console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Obese`)
// } else{
//     console.log('proqramda sazlamalar gedir')
// }

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
// let num = 15;
// let res = " ";

// if (num % 3 === 0) {
//   res += "fiz";
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
let num1 = changeNum(prompt("Eded 1"))
let num2 = changeNum(prompt("Eded 2"))
const changeNum = promptNum =>   Number(promptNum)   // change nUMBER IS FUNCTION
const showPow =  par  => {  console.log(par)    }   // SHOW FUNCTION 
const sum  = (num1 , num2) => num1 + num2    // sum
const calcPow =  (num1 , num2) =>   num1 ** num2    // pow
const divide =  (num1 , num2) =>   num1 / num2    // divide
const subtract =  (num1 , num2) =>   num1 - num2    //subtract 
const multiply =  (num1 , num2) =>   num1 * num2    //multiply
showPow(calcPow(num1 , num2)) 