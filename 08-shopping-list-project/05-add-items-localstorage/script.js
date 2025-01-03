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

function addItemToStorage(item) {
    let itemsFromStorage;
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }
    itemsFromStorage.push(item);

    // convert to JSON string and store in local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
        checkUI();
    }
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
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

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filterForm.addEventListener('input', filterItems);

// localStorage.setItem('test', 'hello');
// localStorage.setItem('test2', 'hello2');
// console.log(localStorage.getItem('test'));
// localStorage.removeItem('test');
// console.log(localStorage.getItem('test'));
// localStorage.clear();
// console.log(localStorage.getItem('test2'));
