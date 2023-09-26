"use strict";

const colors = {
    color_1: 'red',
    color_2: 'black',
    color_3: 'white',
    color_4: 'blue',
}

// loop through objects
for (const colorsKey in colors) {
    console.log(colors[colorsKey]);
}

// loop through arrays
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const colorArrKey in colorArr) {
    console.log(colorArr[colorArrKey]);
}