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


const sezar = {
    name: 'Juli Sezar' ,
    age:46
}
const sezar3 = Object.assign({} , sezar)
const sezar2 = { ...sezar}
sezar.name = "Dictator"
console.log(sezar2)