import todoIcon from './images/todo-icon.png';

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

    imageRight.addEventListener('click', () => {
        console.log('test');
    });

    header.appendChild(imageRight);
}