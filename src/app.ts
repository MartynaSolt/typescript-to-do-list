import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { Task, Category } from "./types/types.js";
import { TaskClass } from "./classes/task.js";

/* <li>
<label for="task-1">Wyrzucić śmieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
</li> */
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];

const tasks: Task[] = [
    new Task("Wyrzucić śmieci", false, Category.GENERAL),
    new Task("Pójść na trening", true, Category.GYM),
    new Task("Nakarmić psa", false, Category.WORK),
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    const newTask: Task = new Task(
        taskNameInputElement.value, 
        false, 
        selectedCategory
    );
    addTask(newTask);
    newTask.logCreationDate();
    renderTasks(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["zrobić klatę", Category.GYM, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(
    categories, 
    categoriesContainerElement, 
    updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);


const taskClassInstance = new TaskClass(
    "Zadanie z konstruktora", 
    false
);

console.log(taskClassInstance.title);