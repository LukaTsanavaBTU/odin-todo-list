import project from "./project";

const domBuilder = (function() {
    const projectList = [];
    function addProject(project) {
        projectList.push(project);
    }
    function removeProject() { //figure this out later
    }
    function listProjects(projectContainer) {
        for (const project of projectList) {
            projectContainer.appendChild(project.drawOnSidebar());
        }
    };

    function drawProject(main, project) {
        main.innerHTML = "";
        main.appendChild(project.drawProject());
    }

    return {addProject, removeProject, listProjects, drawProject}
})();

export default domBuilder;