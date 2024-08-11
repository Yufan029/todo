import todoIcon from '../images/todo-icon.png';

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

function openDialog() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function addEventListenerForImage(left, right) {
    left.addEventListener('click', openDialog);
    right.addEventListener('click', openDialog);

    const dialog = document.querySelector('dialog');
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
    });

    const cancel = document.querySelector('#cancel');
    cancel.addEventListener('click', () => {
        dialog.close();
    });
}