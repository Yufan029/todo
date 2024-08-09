
import todayImage from './images/today_image.png';

export default function createTodayListItem() {
    let image = new Image();
    image.src = todayImage;
    image.classList.add('today-image');

    let divSideListItem = document.createElement('div');
    divSideListItem.classList.add('side-list-today');

    let pElem = document.createElement('p');
    pElem.appendChild(document.createTextNode('Today'));
    pElem.classList.add('today-text');

    divSideListItem.appendChild(image);
    divSideListItem.appendChild(pElem);

    let side = document.querySelector('.side-list');
    side.appendChild(divSideListItem);
}