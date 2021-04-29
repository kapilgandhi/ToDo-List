import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list'; // Title name of component

  newTodo: string;
  todos: any;
  todoObj: any;
  editValue = false;
  editedItemIndex: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }
  
  // add item to the list and clear the search box
  public addToList(): void {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
  }

  // remove item from the list
  // @index - pass index of item that needs to be removed
  public removeItem(index: number): void {
    this.todos.splice(index, 1);
  }

  // check if item is checked, if checked then mark item as completed
  // @item - pass item object which is checked
  // @index - pass index of item that needs to be marked as completed
  public itemCompleted(item: any, index: any): void {
    this.todoObj = item;
    this.todoObj.completed = !item.completed;
    this.todos[index] = this.todoObj;
  }

  // edit the selected item
  // @value : new updated value 
  // @index: index where value us updated
  public editItem(value: string, index: any): void {
    this.newTodo = value;
    this.editValue = true;
    this.editedItemIndex = index;
  }
  
  // save the new updated value
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
