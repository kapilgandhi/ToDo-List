import { Component, OnInit } from '@angular/core';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todo list'; // Title name of component

  public priorityList = ['Please select priority', 'High', 'Medium', 'Low'];

  public todoListData: AppData = new AppData();
  public i = 0;

  ngOnInit(): void {
    this.todoListData.priority = this.priorityList[0];
  }

  // add item to the list and clear the search box
  public addToList(): void {
    if (this.todoListData.newTodo !== '' && this.todoListData.priority !== '' && this.todoListData.priority !== this.priorityList[0]) {
      this.todoListData.todoObj = {
        id: 'todoTask_' + this.i++,
        newTodo: this.todoListData.newTodo,
        completed: false,
        priority: this.todoListData.priority
      };
      this.todoListData.todos.push(this.todoListData.todoObj);
      this.todoListData.newTodo = '';
      this.todoListData.priority = this.priorityList[0];
    } else {
      return;
    }
  }

  // edit the selected item
  // @value : new updated value
  // @index: index where value us updated
  public editItem(value: any): void {
    this.todoListData.newTodo = value.item.newTodo;
    this.todoListData.priority = value.item.priority;
    this.todoListData.editValue = true;
    this.todoListData.editedItemIndex = value.index;
  }

  // save the new updated value
  public saveToList(): void {
    if (this.todoListData.newTodo !== '') {
      this.todoListData.todoObj = {
        newTodo: this.todoListData.newTodo,
        completed: false,
        priority: this.todoListData.priority
      };
      this.todoListData.todos[this.todoListData.editedItemIndex] = this.todoListData.todoObj;
      this.todoListData.editValue = false;
      this.todoListData.editedItemIndex = undefined;
    } else {
      return;
    }
  }

  public deleteAllItems(value: boolean): void {
    if (value) {
      this.todoListData.todos = [];
    } else {
      return;
    }
  }
}
