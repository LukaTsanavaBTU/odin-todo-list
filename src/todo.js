function todoFactory(title, description, startDate, dueDate, priority, additional, marked) {
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

    return {getInfo};
}

function checklistFactory() {
    let list = [];
    function addListItem(title) {
        let listObj = {
            title,
            marked: false,
            mark() {
                this.marked = !this.marked
            }
        };
        list.push(listObj);
    }
    function removeListItem() { //figure this out later
    }
    return {list, addListItem, removeListItem};
}

function notesFactory() {
    let list = [];
    function addListItem(title) {
        let listObj = {
            title,
        };
        list.push(listObj);
    }
    function removeListItem() { //figure this out later
    }
    return {list, addListItem, removeListItem}
}

export {todoFactory, checklistFactory, notesFactory}