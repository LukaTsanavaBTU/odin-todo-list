export default function(title, icon, priority) {
    let todosList = [];
    function addTodo(todoItem) {
        todosList.push(todoItem);
    }
    function removeTodo(){
        //figure this out later
    }
    return {todosList, addTodo, };
}