import "./styles.css"
import {todoFactory, checklistFactory, notesFactory} from "./todo.js"
import projectFactory from "./project.js"

let myTodo = todoFactory("Get New Books", "Get new books from the new book store", new Date("12-09-2024"), 5);
let myChecklist = checklistFactory();
myChecklist.addListItem("Look for discount coupon");
myChecklist.list[0].mark();
myTodo.setAdditional(myChecklist);
let myProject = projectFactory("Monday", null, 1);
myProject.addTodo(myTodo);

// let para = document.createElement("p");
// para.textContent = myProject.list[0].getInfo().additional.list[0].marked;
// document.querySelector("body").appendChild(para);

