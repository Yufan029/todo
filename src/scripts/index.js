import '../css/style.css';
import '../css/dialogStyle.css';
import '../css/dialogForm.css';
import createHeader from './createHeader';
import createSideListItem from './createSideListItem';
import todayImage from '../images/today_image.png';
import projectImage from '../images/project.png';

const todoList = localStorage.getItem('todoList');
console.log(JSON.parse(todoList));

createHeader();
createSideListItem('Today', todayImage);
createSideListItem('Projects', projectImage);

