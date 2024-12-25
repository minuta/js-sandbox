
// Step 1: Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();


// Step 2: Define a callback to handle the response
xhr.onreadystatechange = function() {
    console.log('Ready state changed');
    console.log(xhr.readyState);
    console.log(xhr.status);
    if (xhr.readyState === 4 && xhr.status === 200) {
        const movies = JSON.parse(xhr.responseText);
        console.log(movies);

        movies.forEach(movie => {
            // console.log(movie.title);
            const li = document.createElement('li')
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
            document.querySelector('#results').appendChild(li);
        })
    }
}

// Step 3: Open a connection
xhr.open('GET', './movies.json');

// Step 4: Send the request
xhr.send();