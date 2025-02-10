
// Here the error handling is inside the function with the Promise
async function fetchUsers() {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('http://httpstat.us/500');

        if (!response.ok) {
            throw new Error('Request failed.');
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error("XXX: ", error);
    }
}

fetchUsers().then(users => console.log(users));

// Here the error handling outside the Promise function
// and should processed outside
async function getPosts() {
        const response = await fetch('http://httpstat.us/500');

        if (!response.ok) {
            throw new Error('Request failed.');
        }
        const data = await response.json();
        return data;
}

getPosts().then(posts => console.log(posts))
    .catch(error => console.log('XXX', error));
