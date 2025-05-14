fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(user => {
    user.map(user => console.log(user.name))
})