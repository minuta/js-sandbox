// setInterval in JavaScript is used to execute a function repeatedly at a fixed time interval.
// It continues running until it is cleared with clearInterval.


// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
    }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// change background color randomly
function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);