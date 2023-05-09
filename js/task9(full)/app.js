// task 1-----------------------------------------------------------------
// const arr = new Array(5)
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = +prompt(`eded daxil ele qaaaş ${i}`)
// }
// console.log(arr)
// task 2 -----------------------------------
// arr = [1, 2, 3, 4, 5]
// const multiplyArr = arr =>{
//     let multiply  = 1
//     for (let i = 0; i < arr.length; i++) {
//         multiply *= arr[i]
//     }
//     return multiply
// }
// console.log(multiplyArr(arr))
// task 3 ---------------------------------------
// const    multiplyArrs =  (...arg) =>{
//     let multiply  = 1
//     for (let i = 0; i < arg.length; i++) {
//         multiply *= arg[i]
//     }
//     return multiply
// }
// console.log(multiplyArrs(5,4,2))    

// task 4 -------------------------------------
 const strings =['sdsd', 'SDSDSDS', "DDSDSD"]
 let arr = []
for (let i = 0; i < strings.length; i++) {
   arr.push(strings[i].length)
}
console.log(arr)
// console.log(convertElementsToItsLengths(strings)); // [5, 5, 3, 3, 3]

// task 5 --------------------------------------

// const  findMax  = arr =>{
//     const lengths = arr.map(str => str.length)
//     const sortedArr = lengths.sort((a, b) => b - a)[0]
//     return sortedArr
// }

// // task 6 --------------------------
// const string =[7, 5, 2, 1, 3]

//  const findMax = arr => {
//     if (arr.length === 0) {
//         return undefined;
//       }
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) { 
//       if (arr[i] > max) { 
//         max = arr[i];
//       }
//     }
//     return max;     
//   }

//   console.log(findMax(strings))
// //   task 7 ------------------
//   const messages = [
//     { sender: 'Alice', receiver: 'Bob', hasRead: true },
//     { sender: 'Bob', receiver: 'Alice', hasRead: false },
//     { sender: 'Charlie', receiver: 'David', hasRead: true },
//     { sender: 'David', receiver: 'Charlie', hasRead: true },
//     { sender: 'Eve', receiver: 'Frank', hasRead: false }
//   ];
  
//   function getReadMessages(messages) {
//     return messages.filter(message => message.hasRead);
//   }
  
//   const readMessages = getReadMessages(messages);
//   console.log(readMessages);