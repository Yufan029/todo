import clearImage from '../images/clear.png';

export default function createProjects() {    
    const ProjectsElem = document.querySelector('.side-text.Projects');
    
    let divProjects = document.querySelector('.side-text-projects.all-projects');
    if (divProjects === null) {
        divProjects = document.createElement('div');
        divProjects.classList.add('side-text-projects');
        divProjects.classList.add('all-projects');
    } else {
        divProjects.textContent = "";
    }
    
    ProjectsElem.after(divProjects);
    
    let defaultProject = createIndividualProject('Default');    
    divProjects.appendChild(defaultProject);

    addOtherProjects(divProjects);
}

function addOtherProjects(divProjects) {
    const projects = getProjects();
    if (projects == null) {
        return;
    }

    for (let project of projects) {
        if (project == 'Default') {
            continue;
        }

        divProjects.appendChild(createIndividualProject(project));
    }
}

function createIndividualProject(text) {
    let projectItemDiv = document.createElement('div');
    projectItemDiv.classList.add('projectItem');

    let clearIcon = new Image();
    clearIcon.src = clearImage;

    const projectP = document.createElement('p');
    projectP.textContent = text;

    projectItemDiv.append(clearIcon);
    projectItemDiv.append(projectP);

    return projectItemDiv;
}

function getProjects() {
    const todoList = localStorage.getItem('todoList');
    const todos = JSON.parse(todoList);
    if (todos === null) {
        return;
    }

    let projects = [];
    for (let item of todos) {
        if (!projects.includes(item.project)) {
            projects.push(item.project);
        }
    }

    return projects.sort();
}