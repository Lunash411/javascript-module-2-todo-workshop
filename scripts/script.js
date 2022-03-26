let todos = [];

const createTodo = {text} => {
    todos.push(text);
};

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const textFromForm = e.target.elements.text.value.trim()

    if (textFromForm.length > 0) {
        createTodo(textFromForm);
        event.target.elements.text.value = "";

    console.log( "todos ", todos)}
})

function generateTodoDOM(todo){
    const todoEl = document.createElement("label");
    const container = document.createElement("div");
    const todoText = document.createElement("span");

    todoText.textContent = todo;
    todoEl.classList.add ("list-item");
    containerEl.classList.add("list-item__container")

    return todoEl
})

function renderTodos(todoText) {
    const todoList = document.querySelector("#todos")
    todoList.innerHTML = "";

    if (todos.length > 0) {
    todos.forEach(elementInTodoArray) => {
        console.log("elementInTodoArray" , elementInTodoArray);
        todoList.appendChild(generateTodoDOM(elementInTodoArray));
    });
}else{
    const noTodoMessage = document.createElement("p");
    noTodoMessage.classList.add("empty-message")
}

