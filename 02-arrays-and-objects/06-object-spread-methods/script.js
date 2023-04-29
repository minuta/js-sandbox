
// creating a new object
const todo = {};

// adding some fields to the object
todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

console.log(todo);

const person = {
    address : {
        city: 'NYC',
        street : 'Fulton street',
        house : 14
    }
}

console.log(person.address.city);


// Combining two objects together :
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// using the spread-operator to combine two objects in a single object (a NEW WAY)
const obj3 = {...obj1, ...obj2};
console.log(obj3);

// using the Assign method to combine two objects (AN OLD WAY)
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

// Array of objects
const todos = [
    {id: 1, name: 'buy milk'},
    {id: 2, name: 'clean flat'},
    {id: 3, name: 'cook meal'}
]

console.log('the 2nd todo is : ' + todos[1].name);

// how to get Object's keys
const keys = Object.keys(todo);
const numOfFields =  keys.length;

console.log(`the object has ${numOfFields} keys: ` + keys);

// how to get Object's values
const vals = Object.values(todo);
console.log('Object Values : ' + vals);

// how to get Object data in the form Array of arrays
const entries = Object.entries(todo);
console.log(entries);

// how to test if the Object is having a given property name
console.log(todo.hasOwnProperty('completed'))