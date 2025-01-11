
// fetching a JSON file
fetch('./movies.json')
    .then(respone => respone.json())
    .then(data => {
        console.log(data);
    });

// fetching a text file
fetch('./text.txt')
    .then(respone => respone.text())
    .then(data => {
        console.log(data);
    });

// fetching from an API
fetch('https://api.github.com/users/minuta')
    .then(respone => respone.json())
    .then(data => {
        document.querySelector('h1').textContent = data.login;
        console.log(data);
    });



