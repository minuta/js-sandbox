console.log('Script loaded');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
})
// previously we used .then() to handle the promise
// promise.then((res) => console.log(res));



// now we can use async/await to handle the promise
async function asyncFunc() {
    const result = await promise;
    console.log('hello from async function');
    console.log(result);
}
// asyncFunc();



// getUsers without using async/wait
function getUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => console.log(users));
}
// getUsers2();



// now getUsers function with async/wait
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}
getUsers();