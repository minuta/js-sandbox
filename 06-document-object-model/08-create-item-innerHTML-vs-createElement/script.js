
// Quick & Dirty Way : via Inner HTML
function createListItem(name) {
    const item = document.createElement('li');

    item.innerHTML = `${name}
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>`;

    document.querySelector('.items').appendChild(item);
    // console.log(item.innerHTML);
}

// createListItem('Banana');

// Perfomant Way : creating elements and nodes

function createListItem(name) {
    // create element li
    const listItem = document.createElement('li');
    // create text node\
    const textNode = document.createTextNode(name);
    // create button element
    const button = document.createElement('button');
    // add attributes to button
    button.className = 'remove-item btn-link text-red';
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    button.appendChild(icon);

    // attach text node and button element
    listItem.appendChild(textNode);
    listItem.appendChild(button);
    // find the list block and attach li element
    document.querySelector('.items').appendChild(listItem);
}

createListItem('Banana');
createListItem('Ice Cream');


console.log('done...!');