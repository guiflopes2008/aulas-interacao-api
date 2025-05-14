fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(post => {
    post.map(post => console.log(post.name))
})