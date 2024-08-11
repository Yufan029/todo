import '../css/style.css';
import '../css/dialogStyle.css';
import createHeader from './createHeader';
import createSideListItem from './createSideListItem';
import todayImage from '../images/today_image.png';
import projectImage from '../images/project.png';

createHeader();
createSideListItem('Today', todayImage);
createSideListItem('Projects', projectImage);