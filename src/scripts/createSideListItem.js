
export default function createListItem(itemName, image) {
    let sideList = document.querySelector('.side-list');

    let newImage = new Image();
    newImage.src = image;
    newImage.classList.add('side-image');
    newImage.classList.add(itemName);

    sideList.appendChild(newImage);

    let pElem = document.createElement('p');
    pElem.appendChild(document.createTextNode(itemName));
    pElem.classList.add('side-text');
    pElem.classList.add(itemName);

    sideList.appendChild(pElem);
}