export class Task {
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
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAL"] = "social";
})(Category || (Category = {}));
