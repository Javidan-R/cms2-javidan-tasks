// --------------- DESTRUCTURE ----------------

let js = {
    creator: "Javidan",
    date: 1997,
    family: "C" , 
    compileType: "interpretator",
    uni:{
        name: 'aiPlane MMc',
        date: 2013
    }
}
// const {creator ,family} = js
// console.log(js.creator ,js.family )
function writeInfo({creator ,date }) {
    console.log(`my name is ${creator}  ,  ${date}  `  );
}
writeInfo(js)



const laptop  = {
    name : "Dell" ,
    model: "Latitude",
    country : {
        name  :"USA",
        capital: {
           name: "Vashington" ,
           address : "sgsgdsf"
        },
        year: 2015  
    }
}

function laptopFind({name = "Dell", model , country: {name: countryName, capital :{name: capitalName ,address} ,year}}) {
    console.log(`my name is ${name}  , my model is ${model} , i arrived is ${name}  my country capital adress ${ address}` )
}
laptopFind(laptop)



// ------------- CLOSURE --------------

