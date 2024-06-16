import "./styles.css";
import {todoFactory, checklistFactory, notesFactory} from "./todo.js";
import projectFactory from "./project.js";
import domBuilder from "./domBuilder.js";

let myProject1 = projectFactory("Monday", "My description", "🐦", 1);
let myProject2 = projectFactory("Tuesday", "My description", "🦙", 1);
let myProject3 = projectFactory("Wednesday", "My description", "⛅", 1);
let myProject4 = projectFactory("Thursday", "My description", "🎱", 1);
let myProject5 = projectFactory("Friday", "My description", "🏃‍♂️", 1);

let myTodo1 = todoFactory("Get New Books", "Get new books from the new book store", new Date("12-09-2024"), 5);
let myTodo2 = todoFactory("Feed The Pets", "Get new books from the new book store", new Date("12-09-2024"), 5);
let myTodo3 = todoFactory("Get Work Done", "Get new books from the new book store", new Date("12-09-2024"), 5);
let myTodo4 = todoFactory("Exercise", "Get new books from the new book store", new Date("12-09-2024"), 5);
let myTodo5 = todoFactory("Gaming", "Get new books from the new book store", new Date("12-09-2024"), 5);

let myChecklist1 = checklistFactory();
myChecklist1.addListItem("Look for discount coupon");
myChecklist1.addListItem("Ask friends for book recommendations");
myTodo1.setAdditional(myChecklist1);

myProject1.addTodo(myTodo1);
myProject1.addTodo(myTodo2);
myProject1.addTodo(myTodo3);
myProject1.addTodo(myTodo4);
myProject1.addTodo(myTodo5);

domBuilder.addProject(myProject1);
domBuilder.addProject(myProject2);
domBuilder.addProject(myProject3);
domBuilder.addProject(myProject4);
domBuilder.addProject(myProject5);
domBuilder.listProjects();
domBuilder.initialize();
domBuilder.drawProject(myProject1);



// let para = document.createElement("p");
// para.textContent = myProject.list[0].getInfo().additional.list[0].marked;
// document.querySelector("body").appendChild(para);

