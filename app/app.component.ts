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
  public priority = '';
  public todoLabel = '';

  public todoObj: any;

  ngOnInit(): void {
    this.priority = this.priorityList[0];
  }
  // add item to the list and clear the search box
  public addToList(): void {
    if (this.todoLabel !== '' && this.priority !== '' && this.priority !== this.priorityList[0]) {
      const todo = {
        newTodo: this.todoLabel,
        priority: this.priority
      };
      this.todoObj = todo;
      this.todoLabel = '';
      this.priority = this.priorityList[0];
    } else {
      return;
    }
  }
}
