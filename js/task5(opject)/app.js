// const  product = {
//     name: "example",
//     price: 1000,
//     owner: "Cavidan",
//     ownerCountry: {
//         name: "Azerbaijan",
//         capital: "Baku"
//     }
// }
// const salaries ={
//     john:100,
//     ann: 200,
//     peter: 300
// }
// product.price -= 200
// delete product.name
// console.log(product.price)
// let sum = 0
// for (let key in salaries) {
//     sum +=salaries[key]
// }
// console.log(sum)    


// const sezar = {
//     name: 'Juli Sezar' ,
//     age:46
// }
// const sezar3 = Object.assign({} , sezar)
// const sezar2 = { ...sezar}
// sezar.name = "Dictator"
// console.log(sezar2)

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log(user.ref.name); // What's the result?


//   const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }


// const taker ={
//   'prop-2': 'two', 
//    prop: 'test'
//  }

// const prop2Taker =(taker)=>  taker['prop-2']
// console.log(prop2Taker(taker))
 

// // #task2. 
// let obj = { 
//   continent: 'Asia', 
//   country: 'Japan'
// }
// let  proprtyName  =  'continent'
// const propertyTaker = (obj , proprtyName) =>{
// console.log(obj[proprtyName])
// }

// propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent') // 'Asia'
// propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  // 'Sweden'
// propertyTaker({name:'ali', age:12}, 'name')  // 'ali'

// // ---------   Task 3  --------

// function existsAndTruthy(obj, key) {
//   return obj.hasOwnProperty(key) && Boolean(obj[key]);
// }
// console.log(existsAndTruthy({a:1,b:2,c:3},'b'))
// console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'))
// console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z'))

// // --------- Task 4 ------------
// let name = prompt("Ad  daxil edin")
// let price = prompt("qiymet daxil edin")
// let total = 0
//  const laptop  = {
//   name,
//   price ,
//   calcTotal: function () {
//     if (confirm("Mehsul Endirimdedir?")) {
//       total = (price* 0.8)
//       return `Mehsulun adi: ${name} ,  Mehsulun endirim qiymeti ${total}`
//    }else{
//       return price
//    } 
//   }
//  }

// console.log(laptop.calcTotal())