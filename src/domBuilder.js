import project from "./project";

const domBuilder = (function() {
    const projectList = [];
    function addProject(project) {
        projectList.push(project);
    }
    function removeProject() { //figure this out later
    }
    function initialize() {
        document.querySelector(".add-project").addEventListener("click", (e) => {
            console.log("adding project")
        });
    }
    function listProjects(main, projectContainer) {
        for (const project of projectList) {
            const projectListItem = project.drawOnSidebar();
            projectListItem.addEventListener("click", (e) => {
                drawProject(main, project);
            });
            projectContainer.appendChild(projectListItem);
        }
    };

    function drawProject(main, project) {
        main.innerHTML = "";
        main.appendChild(project.drawProject());
    }

    return {initialize, addProject, removeProject, listProjects, drawProject}
})();

export default domBuilder;