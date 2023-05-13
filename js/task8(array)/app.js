// // ----------------Task 1 --------- 
// let num = +prompt("eded dacil edin");
// while (num < 100 || num > 999) {  num += 7;     }
// console.log("netice " + num);

// // ----------------Task 2--------- 
// let n = +prompt(" yaz");
// for (let i = 1; i <= n; i++) {
//   console.log("for dongusu istifadesi");
// }
// // ----------------Task 3 --------- 
// let sum = 0;
// for (let i = 11; i <= 99; i += 2) {  sum += i;    }
// console.log("Iki Reqemli Ededlerin Cemi " + toplam);

// // ----------------Task 4 --------- 
// function isLucky(bilet) {
//     let bilet_str = bilet.toString().padStart(6, "0");
//     let sum1 =   +bilet_str[0] +   +bilet_str[1] +   +bilet_str[2];
//     let sum2 =   +bilet_str[3] +   +bilet_str[4] +   +bilet_str[5];
//     return sum1 === sum2;
//   }
//   console.log(isLucky(123321));   

// // ----------------Task 5 --------- 
// const inputDate = prompt("Date formatini daxil edin:  YYYY.MM.DD:");
// const dateArray = inputDate.split(".");
// let outputDate;
// if (dateArray.length === 3 && dateArray[0].length === 4 && dateArray[1].length === 2 && dateArray[2].length === 2) {
//   const year = dateArray[0];
//   const month = dateArray[1];
//   const day = dateArray[2];
//   const dateObject = new Date(`${month}/${day}/${year}`);
//   outputDate = dateObject.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
// } else {
//   outputDate = "olmadi !";
// }
// console.log(outputDate);

// // ----------------Task 6 --------- 
// function numberToText() {
//     const number = parseInt(prompt("1 le 99 arasinda eded daxil edin:"));
//     if (isNaN(number) || number < 1 || number > 99) {
//       console.log("loll");
//       return;
//     }
//     const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
//     const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
//     let text = "";
//     if (number < 20) {
//       text = ones[number];
//     } else {
//       text = tens[Math.floor(number / 10)];
//       if (number % 10 !== 0) {
//         text += "-" + ones[number % 10];
//       }
//     }
//     console.log(text);
//   }
  

// // ----------------Task 7 --------- 
// const fullName = prompt("Tam Adinizi daxil edin  'FIRSTNAME':");
// const lastName = fullName.split(" ")[1];
// console.log(lastName);

// // ----------------Task 8 --------- 
// let phoneNumber  = +prompt("Nomre daxil edin : ")
// const isValidNumber = phoneNumber => {
//     let cleanedNumber = "";
//     for (let i = 0; i < phoneNumber.length; i++) {
//       let c = phoneNumber.charAt(i);
//       if (c >= '0' && c <= '9') {
//         cleanedNumber += c;
//       }
//     }
//     if (cleanedNumber.startsWith("+7") && cleanedNumber.length === 13) {
//         return true;
//       } else {
//         return false;
//       }
// }


// const arr = [
//     {
//       name: 'Developer',
//      age: 117,
//      workday: ['sun','mon','tue','wed','thu','fri','sat']
//     }
// ]
// arr[0].name = 'Cavidan'
// arr[2].workday[6] ='  '

// const arr2 = ["esqin 2000", "cavidan 2333", "ali 3422"];
// arr2.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
//   return 0;
// });


// arr2.sort((a, b) => {
//   return parseInt(a.split(' ')[1]) -  parseInt(b.split(' ')[1]);
// });

// console.log(arr2);
// function familySentence(momName, dadName, ...childName) {
//   let sentence = `${momName} and ${dadName} have ${childName.length} children: `;
//   sentence += childName.join(", ");
//   sentence += ".";
//   return sentence;
// }
// console.log(`${familySentence("Mom" , "Dad" ,"child 1" , "child 2", "child 3")}`)

// let arr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ,'tat' ,'tiai' ,];
// const   indexArr = arr  =>{
// let wedIndex = arr.indexOf('wed');
// wedIndex !== -1 ? `The index of 'wed' is " + ${wedIndex}` : " not found in"
// return wedIndex
// }
// console.log(wedIndex);

// function filterByWith(letter) {
//   let result = [];
//   for (let element of arr) {    if (element.includes(letter)) {    result.push(element);   }   }
//   return result;
// }
// let filteredArr = filterByWith('t');
// filteredArr.length !== 0 ?  console.log(filteredArr) : console.log("No elements")

// let arr3 = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
//  const firstUpper  =  arr => {
//   let newArr = []
//   for (let element of arr) {
//     newArr.push(element.charAt(0).toUpperCase() + element.slice(1))
//   }
//   return newArr
// }  
// console.log(firstUpper(arr3))





function findMenBetween0And100(numMen) {
  class Person {
    constructor(age) {
      this.age = age;
    }
  }
  let menBetween0And100 = 0;
  let ageCounts = {};

  for (let i = 0; i < numMen; i++) {
    this.age = Math.floor(Math.random() * 101);
  
    this.person = new Person(age);

    if (person.age <= 100) {
      menBetween0And100++;

      if (ageCounts.hasOwnProperty(person.age)) {
         ageCounts[person.age]++; 
      } else {
        ageCounts[person.age] = 1;
      }
      
    }
  }
  return ({ menBetween0And100, ageCounts });
}
console.log(findMenBetween0And100(1000));

