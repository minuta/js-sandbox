
const post = {
    id: 1,
    title: 'post one',
    body: 'body one',
}

// convert an Object to a JSON string
const jsonStr = JSON.stringify(post);

// convert a JSON string to an Object
const obj = JSON.parse(jsonStr);

console.log('Type: ' + typeof obj);
console.log(obj);
//now we can use the created object in a usual way:
console.log('title: ' + obj.title);

// it's possible to convert even an array of objects
const posts = [
    {
        id: 1,
        title: 'one',
    },
    {
        id: 2,
        title: 'two',
    }
]

const postsStr = JSON.stringify(posts);

console.log(postsStr);