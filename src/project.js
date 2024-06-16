export default function(title, description, icon, priority) {
    let list = [];
    function addTodo(todoItem) {
        list.push(todoItem);
    }
    function removeTodo(todoObj){
        list.splice(list.indexOf(todoObj), 1);
    }
    function setTitle(newTitle) {
        title = newTitle;
    }
    function setDesc(newDesc) {
        description = newDesc;
    }
    function setIcon(newIcon) {
        icon = newIcon;
    }
    function setPriority(newPrio) {
        priority = newPrio;
    }
    function getInfo() {
        return {title, description, icon, priority};
    }
    function drawOnSidebar() {
        const projectItem = document.createElement("li");
        const iconSpan = document.createElement("span");
        projectItem.textContent = title;
        iconSpan.textContent = icon;
        projectItem.insertBefore(iconSpan, projectItem.firstChild);
        return projectItem;
    }
    function drawTodos() {
        const todosWrapper = document.createElement("ul");
        todosWrapper.classList.add("todos-wrapper");
        for (const todo of list) {
            const newTodo = todo.draw();
            const deleteSpan = newTodo.querySelector("&>p>span");
            deleteSpan.addEventListener("click", (e) => {
                removeTodo(todo);
                console.log(list);
                newTodo.parentElement.removeChild(newTodo);
            });
            todosWrapper.appendChild(newTodo);
        }
        const newTaskWrapper = document.createElement("li");
        const newTaskButton = document.createElement("button");
        newTaskButton.textContent = "+ New Task";
        newTaskButton.addEventListener("click", (e) => {
            console.log("adding new entry");
        });
        newTaskWrapper.classList.add("todo-item-wrapper");
        newTaskWrapper.appendChild(newTaskButton);
        todosWrapper.appendChild(newTaskWrapper);
        return todosWrapper;
    }
    function drawProject() {
        const mainDiv = document.createElement("div");
        const iconDiv = document.createElement("div");
        const projectTitleHeader = document.createElement("h2");
        const projectDescPara= document.createElement("p");
        iconDiv.textContent = icon;
        projectTitleHeader.textContent = title;
        projectDescPara.textContent = description;
        mainDiv.appendChild(iconDiv);
        mainDiv.appendChild(projectTitleHeader);
        mainDiv.appendChild(projectDescPara);
        mainDiv.appendChild(drawTodos());
        return mainDiv;
    }
    return {list, getInfo, addTodo, removeTodo, setTitle, setDesc, setIcon, setPriority, drawOnSidebar, drawTodos, drawProject};
}