let number = +prompt("eded daxil edin")
console.log(Math.floor(Math.sqrt(number)))
// 
let celsius = parseFloat(prompt("selsi daxil edin"))
let  fahrenheit = (celsius*1.8) + 32
console.log(fahrenheit)
// 
if (number > 0) {
    console.log(`${number} müsbetdir`)
} else if(number === 0){
    console.log(` 0-a beraberdir`)
}else if(number<0){
    console.log(`${number} mənfidir`)
}else{
    console.log(`eded daxil edin!`)
}
// 
if (number%2 ===1  ) {
    console.log(`${number} tək ədəddir`)
}else if(number%2 ==0){
    console.log(`${number} cuut ədəddir`)
}else  if(number ===0){
    console.log(`0-dan ferqli eded daxil edin`)
}else{
    console.log(`eded daxil edin`)
}
// 
let a = 1929083
let b = 2500
let c = 660
let mathBigNum = Math.max(a,b,c)
// console.log(`ededler icerisinde en boyuk olan ${mathBigNum}`)
if ((a>b && a>c )) {
    console.log(`en boyuk ${a}`)
} else if(b>a && b>c ){
    console.log(`en boyuk ${b}`)
}else if(c>a && c>b){
    console.log(`en boyuk ${c}`)
}
// 
  let num1 = +prompt(`hesablamaq üçün ilk ededi daxil edin`)
let operator = prompt("emeliyyati daxil edin")
let num2 = +prompt(`hesablamaq üçün ikinci ededi daxil edin`)
switch (operator) {
    case ("+"):
        console.log(num1 + num2)   
    break;
    case ("-"):
        console.log(num1 - num2)
    break;
    case ("*"):
        console.log(num1 * num2)
    break;
    case ("/"):
        console.log(num1 / num2)
    break;
    default:
        break;
    console.log("operatoru duzgun daxil edin")
}
// 
let text = prompt(`acar sozu daxil edin`)
switch (text) {
    case ("user"):
        console.log(`xos geldin ${text}`)   
    break;
    case ("admin"):
        console.log(`xos geldin ${text}`)
    break;
    case ("guest"):
        console.log(`xos geldin ${text}`)
    break;
    default:
        break;
    console.log("sizin acariniz yoxdur")
}
// 
if (number%3===0 && number%5===5) {
    console.log("fizzbuzz")
} else if(number%3===0) {
    console.log("fizz")
}else if(number%5 === 0 ){
    console.log("buzz")
}else{
    console.log('bu fizzbuzz deyil')
}
// 
if(number%2 === 0 && number %5 === 0 ){
    console.log('bu istediyim  ededdir')
}else{
    console.log('bu istediyim deyil')
}
// 
if (number>=10 && number <100) {
    console.log('eded iki reqemlidir')
}else{
    console.log(` daxil edilen eded 2 reqemli deyil`)
}

// 
let num3 = +prompt(`toplanacaq 3-cu eded`)
let sum = num1 + num2 + num3
sum>100 ? console.log('cem 100-u kecdi') : console.log(`cem 100-u kecmedi`) 