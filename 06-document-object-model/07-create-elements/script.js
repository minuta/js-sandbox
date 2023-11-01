const divElem = document.createElement('div');
divElem.className = 'myElem';
divElem.id = 'myElem';
divElem.setAttribute('title', 'myElem');

// divElem.innerText = 'Hello World!';
// this method (innerText) to create inner text is not optimal.
// better create a text node and then append that to the element

const text = document.createTextNode('Hello Foobar');
divElem.appendChild(text);


const newElem = document.createElement('li');
newElem.innerHTML = 'FooBar\n' +
    '            <button class="remove-item btn-link text-red">\n' +
    '                <i class="fa-solid fa-xmark"></i>\n' +
    '            </button>\n';

const ulElem = document.querySelector('ul');
ulElem.appendChild(newElem);

