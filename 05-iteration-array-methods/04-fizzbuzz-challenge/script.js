
"use strict";

for (let i = 1; i <= 15; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz");
        continue;
    }
    if (i%3 == 0) {
        console.log("Fizz");
    }
    if (i%5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}