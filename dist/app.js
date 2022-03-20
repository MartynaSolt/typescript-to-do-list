import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { Category } from "./types/types.js";
/* <li>
<label for="task-1">Wyrzucić śmieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
</li> */
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false,
        category: Category.GENERAL,
    },
    {
        title: "Pójść na trening",
        done: true,
        category: Category.GYM,
    },
    {
        title: "Nakarmić psa",
        done: false,
        category: Category.WORK,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
