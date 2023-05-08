const  product = {
    name: "example",
    price: 1000,
    owner: "Cavidan",
    ownerCountry: {
        name: "Azerbaijan",
        capital: "Baku"
    }
}
const salaries ={
    john:100,
    ann: 200,
    peter: 300
}
product.price -= 200
delete product.name
console.log(product.price)
let sum = 0
for (let key in salaries) {
    sum +=salaries[key]
}
console.log(sum)    


const sezar = {
    name: 'Juli Sezar' ,
    age:46
}
const sezar3 = Object.assign({} , sezar)
const sezar2 = { ...sezar}
sezar.name = "Dictator"
console.log(sezar2)

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  console.log(user.ref.name); // What's the result?

const taker ={
  'prop-2': 'two', 
   prop: 'test'
 }

const prop2Taker =(taker)=>  taker['prop-2']
console.log(prop2Taker(taker))
 

// #task2. 
let obj = { 
  continent: 'Asia', 
  country: 'Japan'
}
let  proprtyName  =  'continent'
const propertyTaker = (obj , proprtyName) =>{
console.log(obj[proprtyName])
}

propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent') // 'Asia'
propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  // 'Sweden'
propertyTaker({name:'ali', age:12}, 'name')  // 'ali'

// ---------   Task 3  --------

function existsAndTruthy(obj, key) {
  return obj.hasOwnProperty(key) && Boolean(obj[key]);
}
console.log(existsAndTruthy({a:1,b:2,c:3},'b'))
console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'))
console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z'))

// --------- Task 4 ------------
let name = prompt("Ad  daxil edin")
let price = prompt("qiymet daxil edin")
let total = 0
 const laptop  = {
  name,
  price ,
  calcTotal: function () {
    if (confirm("Mehsul Endirimdedir?")) {
      total = (price* 0.8)
      return `Mehsulun adi: ${name} ,  Mehsulun endirim qiymeti ${total}`
   }else{
      return price
   } 
  }
 }

console.log(laptop.calcTotal())

