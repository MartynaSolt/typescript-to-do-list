import { Category } from "../types/types.js";

export class TaskClass {
    public title: string = "Nowe zadanie";
    public done: boolean = true;
    public category?: Category;
    private createdAt: Date;

    constructor(
        title: string, 
        done: boolean, 
        category: Category = Category.GENERAL
    ) {
        this.title = title;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }

    logCreationDate() {
         console.log(`Task został stworzony ${this.createdAt}`);
    }
}

