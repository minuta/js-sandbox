
// Endpoint for Chuck Norris Jokes
const JOKE_REST_ENDPOINT = "https://api.chucknorris.io/jokes/random";
const xhr = new XMLHttpRequest();

// DOM Elements : joke and button
const jokeDiv = document.querySelector("#joke");
const button = document.querySelector("#joke-btn");

// Define a callback to handle the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        jokeDiv.innerHTML = data.value;
    } else {
        jokeDiv.innerHTML = "Ups, something went wrong...";
    }
};

// Open a connection and send the request
function sendRequest() {
    xhr.open("GET", JOKE_REST_ENDPOINT);
    xhr.send();
}

// Event Listener for the button
button.addEventListener("click", function () {
    sendRequest();
});

// Initial request
document.addEventListener('DOMContentLoaded', sendRequest);

