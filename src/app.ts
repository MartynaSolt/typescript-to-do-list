/* <li>
<label for="task-1">Wyrzucić śmieci</label>
<input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
</li> */
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

interface Task {
    title: string;
    done: boolean;
    category?: string;
}

const categories: string[] = ["general", "work", "gym", "hobby"];

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

const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id: string = `task-${index}`;
        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.title = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false });
    render();
});

render();