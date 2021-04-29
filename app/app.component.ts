import { Component } from '@angular/core';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list'; // Title name of component

  public todoListData: AppData = new AppData();

  // add item to the list and clear the search box
  public addToList(): void {
    this.todoListData.todoObj = {
      newTodo: this.todoListData.newTodo,
      completed: false
    };
    this.todoListData.todos.push(this.todoListData.todoObj);
    this.todoListData.newTodo = '';
  }

  // edit the selected item
  // @value : new updated value
  // @index: index where value us updated
  public editItem(value: any): void {
    this.todoListData.newTodo = value.item.newTodo;
    this.todoListData.editValue = true;
    this.todoListData.editedItemIndex = value.index;
  }

  // save the new updated value
  public saveToList(): void {
    this.todoListData.todoObj = {
      newTodo: this.todoListData.newTodo,
      completed: false
    };
    this.todoListData.todos[this.todoListData.editedItemIndex] = this.todoListData.todoObj;
    this.todoListData.editValue = false;
    this.todoListData.editedItemIndex = undefined;
  }
}
