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

// 
let sum = 0;

for (let i = 11; i <= 99; i += 2) {
  sum += i;
}

console.log("İki basamaklı tek sayıların toplamı: " + toplam);

// 
function isLucky(bilet) {
    let bilet_str = bilet.toString().padStart(6, "0");
    
    let sum1 = parseInt(bilet_str[0]) + parseInt(bilet_str[1]) + parseInt(bilet_str[2]);
    
    let sum2 = parseInt(bilet_str[3]) + parseInt(bilet_str[4]) + parseInt(bilet_str[5]);
    
    return sum1 === sum2;
  }
  
  console.log(isLucky(123321)); // true
  console.log(isLucky(123456)); // false
  