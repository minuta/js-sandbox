
const text = document.querySelector('p');

const itemList = document.querySelector('.item-list');

const button = document.querySelector('button');

function run() {

    // 1.option to change directly the className, but u have to add class Card too:
    // console.log(text.className);
    // text.className = 'card dark';

    // 2.option : using 'classList' and method 'add'
    // console.log(text.classList);
    // text.classList.add('dark');
    // console.log(text.classList);

    // other useful methods of classList
    // text.classList.remove('card');
    // text.classList.toggle('dark');
    // text.classList.toggle('hidden');
    // text.classList.replace('card', 'dark');

    // direct changing of CSS style property :
    text.style.lineHeight = '3';
}

button.onclick = run;