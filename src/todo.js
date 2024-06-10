function todoFactory(title, description, dueDate, priority) {
    let additional = null;
    let marked = false;
    let startDate = new Date();
    function setTitle(newTitle) {
        title = newTitle;
    }
    function setDesc(newDesc) {
        description = newDesc;
    }
    function setDueDate(newDate) {
        duedate = newDate;
    }
    function setPriority(newPrio) {
        priority = newPrio;
    }
    function mark() {
        marked = !marked;
    }
    function setAdditional(newAdditional) {
        additional = newAdditional;
    }
    function getInfo() {
        return {title, description, startDate, dueDate, priority, additional, marked};
    }
    function draw() {
        const todoItemWrapper = document.createElement("li");
        const mainTask = document.createElement("p");
        mainTask.textContent = title;
        todoItemWrapper.classList.add("todo-item-wrapper");
        todoItemWrapper.appendChild(mainTask);
        if (additional !== null) {
            todoItemWrapper.append(additional.draw());
        }
        return todoItemWrapper;
    }

    return {getInfo, setTitle, setDesc, setDueDate, setPriority, mark, setAdditional, draw};
}

function checklistFactory() {
    let list = [];
    function addListItem(title) {
        let listObj = {
            title,
            marked: false,
            mark() {
                this.marked = !this.marked
            },
            draw() {
                const listItem = document.createElement("li");
                const para = document.createElement("p");
                para.textContent = this.title;
                listItem.appendChild(para);
                return listItem;
            }
        };
        list.push(listObj);
    }
    function removeListItem() { //figure this out later
    }
    function draw() {
        const unorderedList = document.createElement("ul");
        for (const listObj of list) {
            unorderedList.appendChild(listObj.draw());
        }
        return unorderedList;
    }
    return {list, addListItem, removeListItem, draw};
}

function notesFactory() {
    let list = [];
    function addListItem(title) {
        let listObj = {
            title,
            draw() {} //implement later
        };
        list.push(listObj);
    }
    function removeListItem() { //figure this out later
    }
    function draw() {} //implement later
    return {list, addListItem, removeListItem, draw}
}

export {todoFactory, checklistFactory, notesFactory}