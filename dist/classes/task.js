import { Category } from "../types/types.js";
export class TaskClass {
    constructor(title, done, category = Category.GENERAL) {
        this.title = "Nowe zadanie";
        this.done = true;
        this.title = title;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate() {
        console.log(`Task został stworzony ${this.createdAt}`);
    }
}
