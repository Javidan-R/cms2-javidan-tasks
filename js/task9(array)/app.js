







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
// const arr2 = ["esqin 2000", "cavidan 2333", "ali 3422"];

// arr2.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
//   return 0;
// });

// console.log(arr2);
// const familySentence = (momName , dadName , ...childName) =>{
//  let total = ''
//  for (let child of childName) {
//   total += child
//  }
//  return total
 
// }
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

// let arr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// function filterByWith(letter) {
//   let result = [];
//   for (let element of arr) {    if (element.includes(letter)) {    result.push(element);   }   }
//   return result;
// }
// let filteredArr = filterByWith('t');
// filteredArr.length !== 0 ?  console.log(filteredArr) : console.log("No elements);

let arr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
 const firstUpper  =  arr => {
  let newArr = []
  for (let element of arr) {
    newArr.push(element.charAt(0).toUpperCase() + element.slice(1))
  }
  return newArr
}  
console.log(firstUpper(arr))