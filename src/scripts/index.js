import '../css/style.css';
import '../css/dialogStyle.css';
import '../css/dialogForm.css';
import createHeader from './createHeader';
import createSideListItem from './createSideListItem';
import todayImage from '../images/today_image.png';
import projectImage from '../images/project.png';
import clearImage from '../images/clear.png';

const todoList = localStorage.getItem('todoList');
console.log(JSON.parse(todoList));

createHeader();
createSideListItem('Today', todayImage);
createSideListItem('Projects', projectImage);
createSideListItem('Clear', clearImage);

const clearBtn = document.querySelector('.side-text.Clear');
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    document.querySelector('main').textContent='';
});

