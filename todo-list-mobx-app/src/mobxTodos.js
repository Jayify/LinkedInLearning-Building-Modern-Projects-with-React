import { makeAutoObservable } from "mobx";

class TodosStore {
    todos = [];

    constructor() {
        makeAutoObservable(this); // Allows React to auto-update when observables change
        this.todos = [
            { text: 'Learn React', isCompleted: true },
            { text: 'New Todo', isCompleted: false },
        ];
    }

    createTodo(text) {
        this.todos.push({ text: text, isCompleted: false });
    }

    markTodoAsCompleted(text) {
        const todo = this.todos.find(t => t.text === text);
        if (todo) {
            todo.isCompleted = true;
        }
    }

    deleteTodo(text) {
        this.todos = this.todos.filter(t => t.text !== text);
    }

    
}

export default new TodosStore();