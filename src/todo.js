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
        if (marked) {
            mainTask.classList.add(marked);
        }
        todoItemWrapper.addEventListener("mouseover", (e) => {
            deleteSpan.classList.remove("hidden");
        });
        todoItemWrapper.addEventListener("mouseout", (e) => {
            deleteSpan.classList.add("hidden");
        });
        mainTask.addEventListener("click", (e) => {
            mainTask.classList.toggle("marked");
            marked = !marked;
            if (additional) {
                for (const checkListElement of mainTask.parentElement.querySelectorAll("li")) {
                    if (marked) {
                        checkListElement.classList.add("marked");
                    } else {
                        checkListElement.classList.remove("marked");
                    }
                }
                for (const checkListItem of additional.list) {
                    if (marked) {
                        checkListItem.marked = true;
                    } else {
                        checkListItem.marked = false;
                    }
                }
            }
            const event = new CustomEvent("valuesChanged");
            window.dispatchEvent(event);
        });
        todoItemWrapper.classList.add("todo-item-wrapper");
        todoItemWrapper.appendChild(mainTask);
        todoItemWrapper.appendChild(deleteSpan);
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
                // const deleteSpan = document.createElement("span");
                // deleteSpan.textContent = "X";
                // deleteSpan.classList.add("hidden");
                para.textContent = this.title;
                // listItem.addEventListener("mouseover", (e) => {
                //     deleteSpan.classList.remove("hidden");
                // });
                // listItem.addEventListener("mouseout", (e) => {
                //     deleteSpan.classList.add("hidden");
                // });
                para.addEventListener("click", (e) => {
                    para.parentElement.classList.toggle("marked");
                    this.mark();
                });
                listItem.appendChild(para);
                // listItem.appendChild(deleteSpan);
                return listItem;
            }
        };
        list.push(listObj);
    }
    function removeListItem(listObj) {
        list.splice(list.indexOf(listObj), 1);
    }
    function draw() {
        const unorderedList = document.createElement("ul");
        for (const listObj of list) {
            const listItem = listObj.draw();
            // const deleteSpan = listItem.querySelector("span");
            // deleteSpan.addEventListener("click", (e) => {
            //     removeListItem(listObj);
            //     listItem.parentElement.removeChild(listItem);
            // });
            unorderedList.appendChild(listItem);
        }
        return unorderedList;
    }
    return {list, addListItem, removeListItem, draw};
}


export {todoFactory, checklistFactory}