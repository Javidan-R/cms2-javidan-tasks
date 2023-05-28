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
//   });

// ----------------------------------------

const urlStarWarsPeople = `https://www.swapi.tech/api/people/`

fetch(urlStarWarsPeople).then((resp)=> resp.json()).then((StarWarsPeople)=>{
    const meal = StarWarsPeople.results;
console.log(meal);
   
})