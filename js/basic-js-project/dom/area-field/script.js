function calcField() {
    let radiusInput  = document.querySelector('.radiusInput');
    let radius = parseInt(radiusInput.value);
    const pi = 3
    if( radius>=10 && radius <=100){
        const circumference= 2 * pi * radius;
        const area = pi * radius **2;
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.classList.add('circle')

        circle.style.width =  `${2 * radius}px`;
        circle.style.height = `${2 * radius}px`;
        document.body.append(circle)
        const resultDiv = document.querySelector('.result')
        resultDiv.innerHTML = `Perimetr: ${circumference}px<br> Sahə: ${area}px<sup>2</sup> <br>  `;
		} else {
			alert("Qardaş zəhmət deyilsə bu araliqda ver 10px and 100px.");		
    }
}


