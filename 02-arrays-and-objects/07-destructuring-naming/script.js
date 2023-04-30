const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// you can initialize values this way, i.e. you just list exact variables as fields
const person = {
    firstName,
    lastName,
    age
};
console.log('Initializing Object fields:');
console.log(person.age);


// ------------------ Destructuring Objects ---------------------

// Destructuring assignment, i.e. extracting values from an Object in a simple way
// see details : https://javascript.info/destructuring-assignment
const todo = {
    id: 1,
    title: 'buy milk',
    user : {
        name: 'John',
        job: 'dev',
    }
};


// here is the process of destructuring:
// note: the variable id was renamed here by todoId
const {id: todoId, title, user : {name, job}} = todo;
console.log('\n Destructuring arrays: ')
console.log(todoId, title, name, job);


// ------------------ Destructuring Arrays ---------------------
const numbers = [1, 2, 3, 4];

const [first, second] = numbers;
const [one, two, ...rest] = numbers;

console.log('\n Destructuring arrays: ')
console.log(first, second);
console.log(one, two, rest);
