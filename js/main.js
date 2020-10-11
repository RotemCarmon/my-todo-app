console.log('Hello git!');
var gPrevId = 3

const gTodos = [
    {
        id: 1,
        txt: 'Prepear Git lesson',
        isDone: false,
    },
    {
        id: 2,
        txt: 'Clean house',
        isDone: true,
    },
    {
        id: 3,
        txt: 'Buy Groceries',
        isDone: false,
    },
];

function init() {
    renderTodos();
}

function renderTodos() {
    var strHtmls = gTodos
        .map(function (todo) {
            var todoClass = todo.isDone ? 'done-todo' : '';
            return `<div class="todo-preview">
            <h2 class="todo ${todoClass}" onclick="toggleTodoMode('${todo.id}')">${todo.txt}</h2>
            <span class="remove-todo" onclick="removeTodo('${todo.id}')">X</span>
            </div>`;
        })
        .join('');
    document.querySelector('.todo-list').innerHTML = strHtmls;
}

function toggleTodoMode(todoId) {
    var todo = getTodoById(todoId);
    todo.isDone = !todo.isDone;
    renderTodos();
}

function getTodoById(todoId) {
    return gTodos.find(function (todo) {
        return todo.id === +todoId;
    });
}

function someFunc(){
    // something
    // more stuff
    // jdll
    // lkdsfjlkdsj
}

function addTodo() {
    var todoTxt = document.querySelector('.add-todo').value;
    console.log('Hello');
    var newTodo = createTodo(todoTxt)
    gTodos.unshift(newTodo)
    renderTodos();
    document.querySelector('.add-todo').value = '';
}

function removeTodo(todoId) {
 var idx = gTodos.findIndex(function(todo){
    return todo.id === +todoId
  });
  gTodos.splice(idx, 1);
  renderTodos()
}

function createTodo(txt) {
    return {
        id: ++gPrevId,
        txt: txt,
        isDone: false,
    };
}
