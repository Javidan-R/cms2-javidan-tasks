const PASSW = 1234
let balance  = 500
  for (let i = 0; i < 3; i++) {
    let enterPass = Number(prompt(`Parol daxil edin : `))
    if(enterPass === PASSW ){   
            let amaunt  = Number(prompt('Meblegi Daxil edin'))
            if(balance>= amaunt){
                console.log(`Sizin Hesabdan çəkdiyiniz mebleğ :  ${amaunt} `) 
                balance -= amaunt
                console.log(`Sizin Hesabdan qalan mebleğ :  ${balance} `)
            }           
    }
    console.log(balance)
    break;
  }
  
