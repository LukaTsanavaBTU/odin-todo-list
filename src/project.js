export default function(title, icon, priority) {
    let list = [];
    function addTodo(todoItem) {
        list.push(todoItem);
    }
    function removeTodo(){
        //figure this out later
    }
    return {list, addTodo, removeTodo};
}