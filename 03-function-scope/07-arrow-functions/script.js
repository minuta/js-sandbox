

// arrow function
const add = (a, b) => {
    return a + b;
}

// implicit return
const sub = (a, b) => a - b;

// arrow function with only one parameter: u can leave () if u have only one parameter
const double = a => a*2;

// Returning an object
const createObj = () => ({name: 'Jack'});

// Using Arrow-Functions with arrays

const numbers = [1, 2, 3, 4, 5];
// here a standard anonymous function
numbers.forEach(function (i) {
    console.log(i);
})

// we can simplify the statement above like this:
numbers.forEach(i => console.log(i));

