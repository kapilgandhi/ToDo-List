import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.css']
})

export class TodoTaskListComponent extends AppComponent {

  @Input() public todoList: any;
  @Output() editTaskEmitter = new EventEmitter<object>();

  // remove item from the list
  // @index - pass index of item that needs to be removed
  public removeItem(index: number): void {
    this.todoList.splice(index, 1);
  }

  // check if item is checked, if checked then mark item as completed
  // @item - pass item object which is checked
  // @index - pass index of item that needs to be marked as completed
  public itemCompleted(item: any, index: any): void {
    this.todoListData.todoObj = item;
    this.todoListData.todoObj.completed = !item.completed;
    this.todoListData.todos[index] = this.todoListData.todoObj;
  }

  public editTask(item: object, index: number): void {
    this.editTaskEmitter.emit({ item, index });
  }
}
