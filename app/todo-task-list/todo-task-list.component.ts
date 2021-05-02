import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.scss']
})

export class TodoTaskListComponent extends AppComponent implements OnChanges {

  @Input() public todo: any;

  public todoList: any[] = [];
  public selectedAll = false;
  public i = 0;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Delete') {
      this.deleteAll();
    } else {
      return;
    }
  }

  ngOnChanges(): void {
    if (this.todo) {
      this.todo = {
        ...this.todo,
        id: this.i++,
        completed: false,
        isEditable: false
      };
      this.todoList.push(this.todo);
    } else {
      return;
    }
  }

  // remove item from the list
  // @index - pass index of item that needs to be removed
  public removeItem(index: number): void {
    this.todoList.splice(index, 1);
  }
  // select all items in the list
  public selectAllItems(): void {
    this.todoList.forEach((x: { isChecked: boolean; completed: any; }) => {
      x.isChecked = !x.completed;
      x.completed = !x.completed;
    });
    this.selectedAll = !this.selectedAll;
  }
  // delete all selected items when delete key is pressed
  public deleteAll(): void {
    if (this.selectedAll) {
      this.todoList = [];
      this.i = 0;
    }
  }
  // edit the item if double click
  public inlineEdit(item: any): void {
    item.isEditable = true;
  }
  // cancel the editing double click item
  public cancelEditing(item: any): void {
    item.isEditable = false;
  }
  // save the new updated value
  public saveToList(item: any, i: number): void {
    item.isEditable = false;
    this.todoList[i] = item;
  }
}
