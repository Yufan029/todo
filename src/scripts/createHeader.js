import todoIcon from '../images/todo-icon.png';
import TodoItem from './todoItem';

const todoList = [];

export default function createHeader() {
    let imageLeft = new Image();
    imageLeft.src = todoIcon;
    imageLeft.classList.add('todoIcon');
    
    let header = document.querySelector('#header-icon');
    header.appendChild(imageLeft);
    
    let pElem = document.createElement('p');
    pElem.appendChild(document.createTextNode('To do List'))
    header.appendChild(pElem);
    
    let imageRight = new Image();
    imageRight.src = todoIcon;
    imageRight.classList.add('todoIcon');
    addEventListenerForImage(imageLeft, imageRight);

    header.appendChild(imageRight);
}

function addEventListenerForImage(left, right) {
    const inputTitle = document.querySelector('#title');
    const inputDescription = document.querySelector('#description');
    const inputDueDate = document.querySelector('#dueDate');
    const selectPriority = document.querySelector('#priority');
    const selectProject = document.querySelector('#projects');
    const textNotes = document.querySelector('#notes');
    const dialog = document.querySelector('dialog');
    const submit = document.querySelector('#submit');

    left.addEventListener('click', () => {
        dialog.showModal();
        clearDialog();
        
    });

    right.addEventListener('click', () => {
        dialog.showModal();
        clearDialog();
    });

    function clearDialog() {
        inputTitle.value = '';
        inputDescription.value = '';
        inputDueDate.value = null;
        selectPriority.selectedIndex = 0;
        selectProject.selectedIndex = 0;
        textNotes.value = '';
    }

    submit.addEventListener('click', (e) => {
        // create todo item;
        const todoItem = new TodoItem(
            inputTitle.value,
            inputDescription.value,
            inputDueDate.value,
            selectPriority.selectedIndex, 
            selectProject.value,
            textNotes.value);

        // add to local storage
        todoList.push(todoItem);

        localStorage.setItem('todoList', JSON.stringify(todoList));
        // render screen;
        console.log(todoList);
        e.preventDefault();
        dialog.close();
    });

    const cancel = document.querySelector('#cancel');
    cancel.addEventListener('click', () => {
        dialog.close();
    });
}