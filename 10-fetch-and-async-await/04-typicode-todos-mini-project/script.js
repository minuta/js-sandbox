
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
    fetch(apiUrl + '?_limit=5')
        .then(response => response.json())
        .then(data => {
            data.forEach(todo => addTodoToDOM(todo));
        })
}

function addTodoToDOM(todo) {
        const div = document.createElement('div');
        div.classList.add('todo');
        div.setAttribute('data-id', todo.id);

        div.appendChild(document.createTextNode(todo.title));

        if (todo.completed) {
            div.classList.add('done');
        }
        document.querySelector('#todo-list').appendChild(div);
}

function createTodo(e) {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        addTodoToDOM(data);
    });

    console.log(newTodo);
}

function toggleCompleted(e) {
    e.preventDefault();
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');
        // console.log('first: ' + e.target.getAttribute('data-id'));
        // console.log('second: ' + e.target.dataset.id);
        updateTodo(e.target.dataset.id, e.target.classList.contains('done'))
    }
}

function updateTodo(id, completed) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({completed}),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
        .then(data => console.log(data));
    // console.log(id, completed);
}

function deleteTodo(e) {
    if (e.target.classList.contains('todo')) {
        console.log('double clicked...');
        fetch(`${apiUrl}/${e.target.dataset.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(data => e.target.remove());
    }
}

function init() {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
}

init();