let nameOne = prompt("name")
let surnameOne = prompt("surname")
let fullNameOne = nameOne +" "+ surnameOne
console.log(fullNameOne)

let greatName = `~~${nameOne}~~`
console.log(greatName)

let a = +(prompt("Duzbucaqlinin a terefi"))
let b = +(prompt("Duzbucaqlinin b terefi"))
let c = 2*(a+b)
console.log(`Duzbucaqlinin perimetiri ${c}`)

// age calculator   
let nowYear = +(prompt("Hazirki tarix"))
let birthYear = +(prompt("Dogum tarixiniz"))
let age  = nowYear - birthYear
console.log(`Sizin ${age} yaşınız var`)

let km = parseInt(prompt("Kilometr daxil edin mile cevirek"))
let mil  = km * 0.6214 
alert(`${km} km ${mil} mildir`)

let username = "Cavidan"
const DOMAIN = "javidanrajabl.com"

let email = username + "@" + DOMAIN

console.log("Salam ", username, "saytımıza xoş gəldiniz", "email adresiniz:", email)
