const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filterForm = document.getElementById('filter');

function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // create item DOM element
    addItemToDOM(newItem);

    // add item to local storage
    addItemToStorage(newItem);

    checkUI()

    itemInput.value = '';
}

function addItemToDOM(item) {
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}

function displayItems() {
    const items = getItemsFromStorage();
    items.forEach(item => addItemToDOM(item));
    checkUI();
}



function addItemToStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.push(item);

    // convert to JSON string and store in local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }
    return itemsFromStorage;
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

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        console.log("clicked on item");
    }
}

function removeItem(item) {

    // remove item from DOM
    item.remove();

    // remove item from local storage
    removeItemFromStorage(item.textContent);

    checkUI();
    // console.log(item);
}

function removeItemFromStorage(item) {
    console.log("current items in storage: " + getItemsFromStorage());
    const itemFromStorage = getItemsFromStorage().filter(i => i !== item);
    localStorage.setItem('items', JSON.stringify(itemFromStorage));
    console.log("removed item from storage: " + item);
}

function clearItems() {

    // clear items from DOM
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    // clear items from local storage
    localStorage.removeItem('items');
    checkUI();
}

function filterItems(e) {
    const items = document.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.includes(text)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

function checkUI() {
    if (itemList.children.length === 0) {
        clearBtn.style.display = 'none';
        filterForm.style.display = 'none';
        filterForm.value = '';
    } else {
        clearBtn.style.display = 'block';
        filterForm.style.display = 'block';
    }
    console.log('checkUI called');
}

function init() {
// Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    filterForm.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();
}

init();
