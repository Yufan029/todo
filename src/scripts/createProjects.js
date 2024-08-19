export default function createProjects() {
    const projects = getProjects();
    
    const ProjectsElem = document.querySelector('.side-text.Projects');
    
    let divProjects = document.querySelector('.side-text-projects.all-projects');
    if (divProjects === null) {
        divProjects = document.createElement('div');
    } else {
        divProjects.textContent = "";
    }

    divProjects.classList.add('side-text-projects');
    divProjects.classList.add('all-projects');

    ProjectsElem.after(divProjects);

    const defaultProject = document.createElement('p');
    defaultProject.classList.add('projects');
    defaultProject.textContent = '# Default';
    divProjects.appendChild(defaultProject);

    if (projects == null) {
        return;
    }

    for (let project of projects) {
        if (project == 'default') {
            continue;
        }

        let pElem = document.createElement('p');
        pElem.classList.add('projects');
        pElem.textContent = '# ' + project;
        divProjects.appendChild(pElem);
    }
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