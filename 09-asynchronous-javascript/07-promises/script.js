
// create a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async work has completed');

        let error = true;

        if (!error) {
            resolve({
                data: 'Here is the data'
            });
        } else {
            reject(new Error('Something went wrong'));
        }
    }, 2000);
});

// consume the promise
promise
    .then((data) => {
        console.log('promise consumed: ', data);
    })
    .catch(error => {console.log(error); } )
    .finally(() => {console.log('finally block consumed'); } );


console.log('hello from the global scope');
