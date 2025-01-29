
const ENDPOINT_200 = 'https://httpstat.us/200';
const ENDPOINT_400 = 'https://httpstat.us/400';
const ENDPOINT_404 = 'https://httpstat.us/404';
const ENDPOINT_NON_EXISTENT = 'https://httpstat.foo/400';

// Example 1: we get an OK from the endpoint
// fetch(ENDPOINT_200)
//     .then(response => {
//         return response;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// Example 2: though it's a error, the CATCH doesn't work!
// fetch(ENDPOINT_400)
//     .then(res => {
//         return res;
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));


// Example 3: but CATCH runs on a network error :
// fetch(ENDPOINT_NON_EXISTENT)
//     .then(res => {
//         return res;
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));

// Example 4: rewrite Example 2, so that we can handle the error.
// We have to do it manually via response.ok.
// The from us thrown error will be catched later in the CATCH block
// fetch(ENDPOINT_404)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res;
//     })
//     .then(res => {
//         console.log('success!');
//         console.log(res);
//     })
//     .catch(err => console.log("XXX " + err));

// the same as before, but custom message for a specific error code
fetch(ENDPOINT_400)
    .then(res => {
        if (res.status === 404) {
            throw new Error("the page could not be found.");
        } else if (res.status !== 200) {
            throw new Error("the request failed with status code: " + res.status);
        }
        return res;
    })
    .then(res => {
        console.log('success!');
        console.log(res);
    })
    .catch(err => console.log("XXX " + err));