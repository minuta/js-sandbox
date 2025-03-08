// setTimeout - takes in a callback and a time to wait until that callback is executed

// setTimeout(function () {
//     console.log('Hello from callback');
// }, 2000);

// Named function
// setTimeout(changeText, 3000);

// change text in the h1 tag
function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}

// with timerId we can later cancel the timer, see function clearTimeout() below
const timerId = setTimeout(changeText, 3000);

// here we are clearing the timer via a button click event
// this will cancel the callback from executing : changeText() function
document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled, no more callback');
});