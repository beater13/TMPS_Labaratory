import { TodoBuilder } from "./todoBuild";
import { MyCategory } from "../source";
import { Organizer } from "../organizer";

/**
 * Singleton
 */
export class TodoList {
  private static instance: TodoList;
  private constructor() {
    this.TodoBuilder = new TodoBuilder();
    this.Organizer = new Organizer();
  }
  static getInstance() {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList();
    }
    return TodoList.instance;
  }

  private Organizer: Organizer;
  private TodoBuilder: TodoBuilder;

  setTodoSource(source: MyCategory): void {
    this.TodoBuilder.source = source;
  }

  addToEat(food: string, description: string): void {
    console.log("Time to eat");
    const todo = this.TodoBuilder.createEatItem();
    todo.title = food;
    todo.description = description;
    this.Organizer.addTodo(todo);
  }

  addToGetGrocery(grocery: string, description: string): void {
    console.log("Groceries time ((");
    const todo = this.TodoBuilder.createGroceryItem();
    todo.title = grocery;
    todo.description = description;
    this.Organizer.addTodo(todo);
  }

  addToRead(book: string, description: string): void {
    console.log("You gotta read the book");
    const todo = this.TodoBuilder.createReadItem();
    todo.title = book;
    todo.description = description;
    this.Organizer.addTodo(todo);
  }

  addToWork(task: string, description: string): void {
    console.log("You gotta complete the task");
    const todo = this.TodoBuilder.createWorkItem();
    todo.title = task;
    todo.description = description;
    this.Organizer.addTodo(todo);
  }
}
