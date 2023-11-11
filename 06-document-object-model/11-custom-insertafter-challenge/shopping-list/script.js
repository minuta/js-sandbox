const li = document.createElement('li');

li.textContent = 'hello';

const firstItem = document.querySelector('li:first-child');

// Solution: Option 1
function insertAfter(what, where) {
    where.insertAdjacentElement('afterend', what);
}

// Solution : Option 2
function insertAfter2(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

insertAfter(li, firstItem);
