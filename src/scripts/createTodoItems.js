import emptyCircleIcon from '../images/circle.png';
import cardDeleteIcon from '../images/clear.png';

export { createTodoItems };

function createTodoItems() {
    const todoList = localStorage.getItem('todoList');
    const todos = JSON.parse(todoList);
    if (todos === null) {
        return;
    }

    for (let todo of todos) {
        createItem(todo);
    }
}

function createItem(todo) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let emptyCircleImage = new Image();
    emptyCircleImage.src = emptyCircleIcon;
    emptyCircleImage.classList.add('card-circle');

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    let cardTitleP = document.createElement('p');
    cardTitleP.classList.add('card-title');
    cardTitleP.textContent = todo.title;

    let cardDueDateP = document.createElement('p');
    cardDueDateP.classList.add('card-duedate');
    cardDueDateP.textContent = new Date(todo.dueDate).toLocaleString();

    let cardProjectP = document.createElement('p');
    cardProjectP.classList.add('card-project');
    cardProjectP.textContent = todo.project;

    let cardDeleteImage = new Image();
    cardDeleteImage.src = cardDeleteIcon;
    cardDeleteImage.classList.add('card-delete');

    cardDiv.append(cardTitleP);
    cardDiv.append(cardDueDateP);
    cardDiv.append(cardProjectP);
    cardDiv.append(cardDeleteImage);

    itemDiv.append(emptyCircleImage);
    itemDiv.append(cardDiv);

    addPriorityColor(cardDiv, todo.priority);

    let todoItemsDiv = document.querySelector('.todo-items');
    todoItemsDiv.append(itemDiv);
}

function addPriorityColor(itemDiv, priority) {
    switch(priority){
        case 0:
            itemDiv.classList.add('high-priority');
            break;
        case 1:
            itemDiv.classList.add('medium-priority');
            break;
        case 2:
            itemDiv.classList.add('low-priority');
            break;
    }
}



