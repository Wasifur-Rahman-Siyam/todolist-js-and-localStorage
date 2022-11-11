const task = document.querySelector('#task');
const todoBtn = document.querySelector('#add-task');

// root
window.onload = () =>{
    main();
}

// main functions
function main() {
    todoBtn.addEventListener('click', addTodo);
}

// events
function addTodo (){
    if(localStorage.getItem('todos') == null) {
        localStorage.setItem('todos','[]');

        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(task.value);
        localStorage.setItem('todos',JSON.stringify(todos))
    }
    else {
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(task.value);
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}

const todos = JSON.parse(localStorage.getItem('todos'))

    for(let i=0; i< todos.length ; i++){
        document.querySelector('tbody').innerHTML +=
        '<tr>'+
        '<td>'+
        todos[i]+
        '</td>'+
        '<td>'+
        '<button class="btn btn-primary me-3">&#9998;</button>'+
        '<button class="btn btn-danger">&#128465;</button>'+
        '</td>'+
        '</tr>'
    }
