// class Car {
//   speed = 0;
//   constructor(model, year, owner) {
//     (this.model = model), (this.year = year), (this.owner = owner);
//   }
//   qazVer() {
//     return (this.speed += 10);
//   }
//   tormozVer() {
//     return (this.speed -= 10);
//   }
// }

// const tesla = new Car("t28", 2020, "Musk");
// console.log(tesla);
// console.log(tesla.qazVer());

// Array.prototype.clear = function () {
//   this.length = 0;
//   return `empty array`;
// };
// const arr = [1, 3, 4, 54, 55];
// arr.clear();
// console.log(arr);
// String.prototype.hide = function () {
//   return this.slice(0, 3) + "*".repeat(this.length - 3);
// };
// let text = "Cavidan";
// text = text.hide();
// console.log(text);

// Number.prototype.isEven = function () {
//   return this % 2 == 0;
// };
// const ed = 13;
// console.log(ed.isEven());

// TASKS
// const arr = ["dev", "bos", "pro", 54, 55];
// Array.prototype.isEpmty = function () {
//   this.length = []
// }

//  Array.prototype.removeDuplicates = function (){
//     return is

//  }
//  arr.removeDuplicates();
// console.log(arr);
//-------------------------------------------------TASK2--------------
const obj = {
  name:"Javidan",
  surname: "Rajabli",
  birthday: 2 
}
// ----------
// Object.prototype.ObjectLenght  = function () {
//   let lenghtKey = Object.keys(this).length
// let lenghtValue = Object.values(this).length
//  return {lenghtKey , lenghtValue}
// }
//  obj = obj.ObjectLenght();
// console.log(obj);

// ------------
// Object.prototype.firstProperty = function (){
//   let first= Object.values(this)[0]
//   return first
// }
//  obj  = obj.firstProperty()
// console.log(obj);
// -----------
// Object.prototype.lastProperty = function (){
//   let last = Object.values(this).length - 1;
//   return last
// }
//  obj  = obj.lastProperty()
// console.log(obj);
// -----=----------------------------------------

// ---------------------------------------TASK 3 ----------------------
//const num = -123;
// Number.prototype.isPrime = function (){
//    return this >= 0
// }
// console.log(num.isPrime() );
// Number.prototype.isEven = function (){
//   return this  % 2 === 0 
// }
// console.log(num.isEven());

//-----------------------------------------TASK 4 -------------------------
class NewString extends String {
  // toCapitalizCase(){
  //   return this.replace(this[0] , this[0].toUpperCase())
  // }
}
let str = new NewString('cavidan97'); 
// str  = str.toCapitalizCase()

console.log(str);

class Vehicle   {
  constructor(fuel , wheelCount, landOrAir){
    this.fuel =fuel;
    this.wheelCount = wheelCount;
    this.landOrAir = landOrAir;
  }
}
class Car extends Vehicle {
  constructor (model, country, fuel, wheelCount, landOrAir) {
    super(fuel , wheelCount, landOrAir)
    this.model = model;
    this.country = country;
  }
}
class Plane  extends Vehicle {
  constructor(model, country, fuel, wheelCount, landOrAir){
    super(fuel , wheelCount, landOrAir)
    this.model = model;
    this.country = country;
  }
}