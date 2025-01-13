
function createPost({title, body}){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title, body})
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

createPost({title: 'Post Three', body: 'This is post three'});

