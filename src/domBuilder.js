import project from "./project";
import { todoFactory } from "./todo";

const domBuilder = (function() {
    const projectList = [];
    let currentProject;
    function addProject(project) {
        projectList.push(project);
    }
    function removeProject() { //figure this out later
    }
    function newTaskDialogInit() {
        const dialog = document.querySelector(".new-task-dialog");
        const form = dialog.querySelector("form");
        const addButton = dialog.querySelector("#new-task-add-button");
        const cancelButton = dialog.querySelector("#new-task-cancel-button");
        const titleInput = dialog.querySelector("#title-input");
        const descInput = dialog.querySelector("#description-input");
        const dueDateInput = dialog.querySelector("#due-date-input");
        const priorityInput = dialog.querySelector("#priority-input");

        cancelButton.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.close();
        });

        addButton.addEventListener("click", (e) => {
            e.preventDefault();
            const newTitle = titleInput.value;
            const newDesc = descInput.value;
            const newDueDate = dueDateInput.value;
            const newPriority = parseInt(priorityInput.value);
            if (form.reportValidity()) {
                currentProject.addTodo(todoFactory(newTitle, newDesc, newDueDate, newPriority));
                drawProject(currentProject);
                titleInput.value = "";
                descInput.value = "";
                dueDateInput.value = "";
                priorityInput.value = "";
                dialog.close();
            } 
        });
    }
    function newProjectDialogInit() {
        const dialog = document.querySelector(".new-project-dialog");
        const form = dialog.querySelector("form");
        const addButton = dialog.querySelector("#new-project-add-button");
        const cancelButton = dialog.querySelector("#new-project-cancel-button");
        const titleInput = dialog.querySelector("#project-title-input");
        const descInput = dialog.querySelector("#project-description-input");
        const iconInput = dialog.querySelector("#project-icon-input");
        const priorityInput = dialog.querySelector("#project-priority-input");

        cancelButton.addEventListener("click", (e) => {
            e.preventDefault();
            dialog.close();
        });

        addButton.addEventListener("click", (e) => {
            e.preventDefault();
            const newTitle = titleInput.value;
            const newDesc = descInput.value;
            const newIcon = iconInput.value;
            const newPriority = parseInt(priorityInput.value);
            if (form.reportValidity()) {
                const newProject = project(newTitle, newDesc, newIcon, newPriority);
                addProject(newProject);
                drawProject(newProject);
                listProjects();
                titleInput.value = "";
                descInput.value = "";
                iconInput.value = "";
                priorityInput.value = "";
                dialog.close();
            } 
        });
    }
    function initialize() {
        currentProject = projectList[0];
        newProjectDialogInit();
        newTaskDialogInit();
        const addProjectButtonMain = document.querySelector(".add-project");
        const addProjectDialog = document.querySelector(".new-project-dialog");
        addProjectButtonMain.addEventListener("click", (e) => {
            addProjectDialog.showModal();
        });
    }
    function listProjects() {
        const projectContainer = document.querySelector(".projects");
        projectContainer.innerHTML = "";
        for (const project of projectList) {
            const projectListItem = project.drawOnSidebar();
            projectListItem.addEventListener("click", (e) => {
                drawProject(project);
            });
            projectContainer.appendChild(projectListItem);
        }
    };

    function drawProject(project) {
        const main = document.querySelector("main");
        currentProject = project;
        main.innerHTML = "";
        main.appendChild(project.drawProject());
    }

    return {initialize, addProject, removeProject, listProjects, drawProject}
})();

export default domBuilder;