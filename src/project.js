export default function(title, description, icon, priority) {
    let list = [];
    function addTodo(todoItem) {
        list.push(todoItem);
    }
    function removeTodo(){
        //figure this out later
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
    return {list, addTodo, removeTodo, setTitle, setDesc, setIcon, setPriority};
}