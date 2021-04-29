import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskListComponent } from './todo-task-list.component';

describe('TodoTaskListComponent', () => {
  let component: TodoTaskListComponent;
  let fixture: ComponentFixture<TodoTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTaskListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should remove object from the list`, () => {
    fixture = TestBed.createComponent(TodoTaskListComponent);
    const app = fixture.componentInstance;
    app.removeItem(1);
    expect(app.todoListData.todos.length).toEqual(0);
  });

  it(`should mark task as completed from the list`, () => {
    fixture = TestBed.createComponent(TodoTaskListComponent);
    const app = fixture.componentInstance;
    const data = {
      newTodo: 'My First task is to clean',
      completed: false
    };
    app.itemCompleted(data, 0);
    expect(app.todoListData.todos[0].completed).toBeTruthy();
  });
});
