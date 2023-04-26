let weight = +prompt("Cekninizi daxil edin")
let height = +prompt("boyunuzu daxil edin")
function calcBmi(weight , height){
    let bmi  = ( weight / (height * height )) *100
    return  bmi.toFixed(3)*100
}
let saybmi = calcBmi(weight , height)
if (saybmi <= 18.5) {
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Underweight`)
} else if(saybmi <25){
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Normal weight`)
} else if(saybmi <29.9){
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Overweight`)
}else if(saybmi >30){
    console.log(`sizin BMI indexiniz ${saybmi}-dir ve bu Obese`)
} else{
    console.log('proqramda sazlamalar gedir')
} 
