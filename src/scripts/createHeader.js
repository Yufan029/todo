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

    imageLeft.addEventListener('click', openDialog);
    imageRight.addEventListener('click', openDialog);

    const dialog = document.querySelector('dialog');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        dialog.close();
    });

    header.appendChild(imageRight);
}

function openDialog() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}