// let msaBirth  = new Date(1997 , 4 , 19)
// let msAtNow = Date.now()

// let dayCount  = (msaBirth - msAtNow) / 1000 /60 /60 / 24
// console.log(dayCount)
// const date = new Date();

// let year = date.getFullYear(),
//     month = date.getMonth(),
//     day = date.getDate(),
//     hour = date.getHours(),
//     minute = date.getMinutes(),
//     second = date.getSeconds(),
//     dayNumber = date.getDay()

//     let months = [
//       'Yanvar',
//       'Fevral',
//       'Mart',
//       'Aprel',
//       'May',
//       'İyun',
//       'İyul',
//       'Avqust',
//       'Sentyabr',
//       'Oktyabr',
//       'Noyabr',
//       'Dekabr'
//  ]

//     let days =[
//       'Bazar',
//       'Bazarertəsi',
//       'Çərşənbə axşamı',
//       'Çərşənbə',
//       'Cümə axşamı',
//       'Cümə',
//       'Şənbə'
//     ]

//    let humanReadableDate = ${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second} 

//    console.log(humanReadableDate)
// let company = prompt(" company")
// const isCompany  = arg =>  arg.toLowerCase().endsWith("mmc")
// console.log(isCompany(company))


const emojis = `👩👨🧑👧👦🧒👶👵👴🧓👩‍🦰👨‍🦰👩‍🦱👨‍🦱👩‍🦲👨‍🦲👩‍🦳👨‍🦳👱‍♀️👱👸🤴👳‍♀️👳‍♂️👲🧔👼🤶
👱‍♀️👱👸🤴👳‍♀️👳‍♂️👲🧔👼🤶🎅`

let randomNumber =  emojis[Math.floor(Math.random()* emojis.length)]
console.table(randomNumber)