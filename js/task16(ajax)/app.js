const url  = `https://jsonplaceholder.typicode.com/users`
fetch(url)
.then((resp)=> resp.json())
.then((users) => {
    users.forEach(user => {
        document.write(`<p> ${user.id} - ${user.name} - ${user.website} </p>`)
    });
})           