const input = document.getElementById("input");
const search_btn = document.querySelector(".search_btn");
const country = document.querySelector(".user_name");
const user_location = document.querySelector(".user_location");
const follower_count = document.querySelector(".follower_count");
const repo_count = document.querySelector(".repo_count");
const avatar_url = document.querySelector("img");

// search_btn.addEventListener("click", async () => {
//   const searchTerm = input.value;

//   try {
//     const userData = await getData(`https://restcountries/v3.1/name/${searchTerm}`);
//     console.log(userData);
//     user_name.textContent = userData.name 
//     user_location.textContent = userData.location
//     follower_count.textContent = userData.followers
//     repo_count.textContent = userData.public_repos
//     avatar_url.src = userData.avatar_url;
//   } catch (error) {
//     console.log("Error", error);
//   }
// });

// async function getData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw new Error(" fetching user data.");
//   }
// }
 search_btn.addEventListener("click", async () => {
      const searchTerm = input.value;
    const {data:[data]} = await  axios.get(`https://restcountries/v3.1/name/${searchTerm}`);
    console.log(data);
    country.textContent = data.name.common
    avatar_url.src = data.flags.png
    follower_count.textContent =  data.area
    repo_count.textContent = data.lat

 })
