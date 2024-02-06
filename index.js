

let todoInput = document.querySelector(".input");
let todoAddButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo;
let todoList = [];

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

}

todoAddButton.addEventListener("click",(e)=>{
    e.preventDefault(); //don't refresh the page
    todo = todoInput.value;
    if(todo.length > 0) todoList.push({id : uuid(), todo, isCompleted : false})
    renderTodoList(todoList)
})

function renderTodoList(todoList){
    console.log(todoList)
    showTodos.innerHTML = todoList.map(todo => `<div><input type="checkbox"><label class="todo">${todo.todo} </label><button>delete</button></div>`);
}

renderTodoList(todoList)