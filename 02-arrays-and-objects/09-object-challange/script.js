// Step 1
const library = [
    {
        title: '12 rule of life',
        author: 'J. Peterson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Atomic Habits',
        author: 'J. Clear',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Meditations',
        author: 'M. Aurelius',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

console.log(library);

// Step 2
for (const libraryKey in library) {
    library[libraryKey].status.read = true;
}
console.log(library);

// Step 3
const {title:firstbook, author, status} = library[0];
console.log('------- : ' + firstbook);

// Step 4
const jsonStr = JSON.stringify(library);
console.log(jsonStr);