import "./styles.css"
import {todoFactory, checklistFactory, notesFactory} from "./todo.js"

let myTodo = todoFactory("Get New Books", "Get new books from the new book store", "12-6-2024", 5, null, false);
let dog = 1;

let para = document.createElement("p");
para.textContent = myTodo.getInfo().description;
document.querySelector("body").appendChild(para);;

