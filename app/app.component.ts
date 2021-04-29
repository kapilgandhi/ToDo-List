import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list';

  newTodo: string;
  todos: any;
  todoObj: any;
  editValue = false;
  editedItemIndex: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  public addToList(): void {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
  }

  public removeItem(index: number): void {
    this.todos.splice(index, 1);
  }

  public itemCompleted(item: any, index: any): void {
    this.todoObj = item;
    this.todoObj.completed = !item.completed;
    this.todos[index] = this.todoObj;
  }

  public editItem(value: string, index: any): void {
    this.newTodo = value;
    this.editValue = true;
    this.editedItemIndex = index;
  }

  public saveToList(): void {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos[this.editedItemIndex] = this.todoObj;
    this.editValue = false;
    this.editedItemIndex = undefined;
  }
}
