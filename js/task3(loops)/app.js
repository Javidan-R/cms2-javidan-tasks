// BANCOMAT
// const PASSW = 1234
// let balance  = 500
//   for (let i = 0; i < 3; i++) {
//     let enterPass = Number(prompt(`Parol daxil edin : `))
//     if(enterPass === PASSW ){   
//             let amaunt  = Number(prompt('Meblegi Daxil edin'))
//             if(balance>= amaunt){
//                 console.log(`Sizin Hesabdan çəkdiyiniz mebleğ :  ${amaunt} `) 
//                 balance -= amaunt
//                 console.log(`Sizin Hesabdan qalan mebleğ :  ${balance} `)
//             }           
//     }
//         (balance)
//     break;
//   }

//   baklava
  for(var i = 0; i <= 10; i++) {
      for(var x = 0; x <= i; x++){
          document.write("*");
      }
      document.write("<br/>"); 
  }
  for(var i = 9; i>=0; i--) {
    for(var x = 0; x <= i; x++){
        document.write("*");
    }
    document.write("<br/>"); 
}
  // star reverse
for (let i = 4; i >0; i--) {
    for (let j = 0; j < i; j++) {
     document.write(`*`)
    }
    document.write(`<br>`)
     
 }
//  verilen edede qeder olan ededlerin cemi
let sumNum = 0
let addNum = +prompt('EDED DAXIL EDIN')
    for (let num = 1; num <=addNum; num++) {
        sumNum += num
    }
console.log(`${sumNum}`)
//  verilen edede qeder olan ededlerin hasili
let product = 1
for(let i = 1; i<=addNum; i++){
    product *= i
}
console.log(`${product}`)
