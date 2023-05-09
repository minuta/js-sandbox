
// Default params
function registerUser(user = 'Bot') {
    // if (!user) {
    //     user = 'Bot';
    // }

    return user + ' is registered';
}

console.log(registerUser());
console.log(registerUser('John'));

// Rest params
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.log('Var numbers : ', sum(1, 2, 3, 4, 5));

// Objects as params

function logUser(user) {
    return `The user ${user.name} with ID ${user.id} is logged in.`
}

const user = {
    name: 'John',
    id: 15
};

console.log(logUser(user));
console.log(logUser({name: 'Sarah', id: 23 }));

// Arrays as params
function getRandom(arr) {
    const randoIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randoIndex];
    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6]);