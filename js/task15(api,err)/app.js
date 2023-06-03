// const url = `https://jsonplaceholder.typicode.com/users`;
// fetch(url)
//   .then((resp) => resp.json())
//   .then((users) => {
//     users.forEach((user) => {
//       document.write(`<p> ${user.id} - ${user.name} - ${user.website} </p>`);
//     });
//   });
// const menuName = document.querySelector('.name');
// const menuCategory = document.querySelector('.category');
// const menuDesc = document.querySelector('p');
// const menuYoutube = document.querySelector('.link');
// const menuInside = document.querySelector('.list');
// const menuResept = document.querySelector('.resept');
// const err = document.querySelector('.err');
// let errword = `Bura yazacaq məlumatım yoxdur`

// const urlRandom = `https://www.themealdb.com/api/json/v1/1/random.php`;
// fetch(urlRandom)
//   .then((resp) => resp.json())
//   .then((RandMeal) => {
//     const meal = RandMeal.meals[0];
//     if (!meal) {
//       err.textContent += errword;
//     } else {
//       menuName.textContent = meal.strMeal;
//       menuCategory.textContent = meal.strCategory;
//       menuDesc.textContent = meal.strInstructions;
//       menuYoutube.textContent = meal.strYoutube;
//       menuInside.textContent = meal.strIngredient1;
//       menuResept.textContent = meal.strImageSource;
//     }
//   }).catch(error => {
 //   console.log('Hata:', error);
// });
// ---------------------------------------- TASK 2--------------------

// const url = 'https://swapi.dev/api/people/';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const people = data.results;
//     people.forEach(person => {
//         document.write(`<li>${person.description}<p>Personaj adi:${person.name}</p> <p>Gender:${person.gender}</p>  </li>`)
//     });
//     // İnsanları burada işleyebilir veya görüntüleyebilirsiniz
//   })
//   .catch(error => {
//     console.log('Hata:', error);
//   });


// ---------------------------------------TASK 3---------------------------------
function reportLetters(str) {
    let letters = {} ;
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        letters[letter] = (letters[letter] || 0) +1;   
    };
    return letters
}
console.log(reportLetters('cavidan'));

function checkIsInside(str1, str2){
    if (str1.includes(str2)) {
       console.log(`${str2} + ${str1}`);
    } else{
        console.log(`${str1} + ${str2}`);
    }
}
checkIsInside("hello world" ,"world")