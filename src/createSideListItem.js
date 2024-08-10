
export default function createListItem(itemName, image) {
    let sideList = document.querySelector('.side-list');

    let newImage = new Image();
    newImage.src = image;
    newImage.classList.add('side-image');

    sideList.appendChild(newImage);

    let pElem = document.createElement('p');
    pElem.appendChild(document.createTextNode(itemName));
    pElem.classList.add('side-text');

    sideList.appendChild(pElem);
}