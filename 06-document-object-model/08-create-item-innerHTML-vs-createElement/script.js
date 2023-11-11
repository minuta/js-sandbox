
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
    const listItem = document.createElement('li');
    const textNode = document.createTextNode(name);
    const button = createButton('remove-item btn-link text-red');

    listItem.appendChild(textNode);
    listItem.appendChild(button);
    document.querySelector('.items').appendChild(listItem);
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

createListItem('Banana');
createListItem('Ice Cream');

console.log('done...!');