import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { Task, Category } from "./types/types";

/* <li>
<label for="task-1">Wyrzucić śmieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
</li> */
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby", "social"];

const tasks: Task[] = [
    {
        title: "Wyrzucić śmieci",
        done: false,
        category: "general",
    }, 
    {
        title: "Pójść na trening",
        done: true,
        category: "gym",
    },
    {
        title: "Nakarmić psa",
        done: false,
        category: "work",
    },
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainerElement);
});

renderCategories(
    categories, 
    categoriesContainerElement, 
    updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);