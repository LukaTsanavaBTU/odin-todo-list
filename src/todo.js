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
        const deleteSpan = document.createElement("span");
        deleteSpan.textContent = "X";
        deleteSpan.classList.add("hidden");
        mainTask.textContent = title;
        mainTask.appendChild(deleteSpan);
        if (marked) {
            mainTask.classList.add(marked);
        }
        mainTask.addEventListener("mouseover", (e) => {
            deleteSpan.classList.toggle("hidden");
        });
        mainTask.addEventListener("mouseout", (e) => {
            deleteSpan.classList.toggle("hidden");
        });
        mainTask.addEventListener("click", (e) => {
            mainTask.classList.toggle("marked");
            marked = !marked;
        });
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
                const deleteSpan = document.createElement("span");
                deleteSpan.textContent = "X";
                deleteSpan.classList.add("hidden");
                para.textContent = this.title;
                para.appendChild(deleteSpan);
                para.addEventListener("mouseover", (e) => {
                    deleteSpan.classList.toggle("hidden");
                });
                para.addEventListener("mouseout", (e) => {
                    deleteSpan.classList.toggle("hidden");
                });
                para.addEventListener("click", (e) => {
                    para.classList.toggle("marked");
                    this.mark();
                });
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