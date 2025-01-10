// Here we replace the callback hell with promises

function getData(endpoint) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error: Something went wrong');
                }
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}

// new solution with promise.all and array of arrays
Promise.all([
    getData('./movies.json'),
    getData('./actors.json'),
    getData('./directors.json')
]).then((data) => {
    console.log(data);
})

// new solution with promise.all and single arrays
// Promise.all([
//     getData('./movies.json'),
//     getData('./actors.json'),
//     getData('./directors.json')
// ]).then(([movies, actors, directors]) => {
//     console.log(movies);
//     console.log(actors);
//     console.log(directors);
// }).catch(error => console.log(error));



// previous solution with promises
// getData('./movies.json')
//     .then(movies => {
//         console.log(movies);
//         return getData('./actors.json');
//     })
//     .then(actors => {
//         console.log(actors);
//         return getData('./directors.json');
//     })
//     .then(directors => {
//         console.log(directors);
//     })
//     .catch(error => console.log(error));
