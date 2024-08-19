import '../css/style.css';
import '../css/dialogStyle.css';
import '../css/dialogForm.css';
import '../css/todoItem.css';
import createHeader from './createHeader';
import createSideListItem from './createSideListItem';
import todayImage from '../images/today_image.png';
import projectImage from '../images/project.png';
import clearImage from '../images/clear.png';
import createProjects from './createProjects';

const todoList = localStorage.getItem('todoList');
const todos = JSON.parse(todoList);
console.log(todos);

createHeader();
createSideListItem('Today', todayImage);
createSideListItem('Projects', projectImage);
createSideListItem('Clear', clearImage);
createProjects();

const clearBtn = document.querySelector('.side-text.Clear');
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    document.querySelector('main').textContent='';
    createProjects();
});

const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', (e) => {
    const dialog = document.querySelector('#dialog');
    dialog.showModal();
});
