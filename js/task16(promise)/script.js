// const url = `https://jsonplaceholder.typicode.com/users`;
//let datum  = null
// fetch(url)
//   .then((resp) => resp.json())
//   .then((users) => {
//     users.forEach((element) => {
//       document.write(
//         `<p> ${element.id} -${element.name} - ${element.company.name} </p>`
//       );
//     });
//   });
//console.log(datum)

// setTimeout(() => {
//     console.log(datum)
// }, 3000);

async function getData(_url) {
    const {data} = await axios.get(_url)
    return data
}
const BASE_URL = `https://jsonplaceholder.typicode.com`
async function writeUsers() {
    const users = await getData(BASE_URL + `/users`)
    users.forEach(user => {
        document.write(`<p> ${user.username} </p>`)     
    })
}

async function writePosts() {
    const posts = await getData(BASE_URL + `/posts`)
    posts.forEach(post => {
        document.write(`<p> ${post.title} </p>`)     
    }); 
}
writeUsers()
writePosts()







