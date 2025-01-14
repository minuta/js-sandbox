
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
        div.appendChild(document.createTextNode(todo.title));

        if (todo.completed) {
            div.classList.add('done');
        }
        div.setAttribute('data-id', todo.id);
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

function init() {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
}

init();