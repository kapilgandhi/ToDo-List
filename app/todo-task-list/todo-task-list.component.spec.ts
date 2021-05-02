import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoTaskListComponent } from './todo-task-list.component';
import { FormsModule } from '@angular/forms';

describe('TodoTaskListComponent', () => {
  let component: TodoTaskListComponent;
  let fixture: ComponentFixture<TodoTaskListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [TodoTaskListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskListComponent);
    component = fixture.componentInstance;
    component.todoList = [{
      newTodo: 'My First task is to clean',
      completed: false,
      priority: 'High'
    }, {
      newTodo: 'My Second task is to work',
      completed: false,
      priority: 'Medium'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should remove object from the list`, () => {
    component.removeItem(0);
    expect(component.todoList.length).toEqual(1);
  });

  it(`should mark task as completed from the list`, () => {
    const data = {
      newTodo: 'My First task is to clean',
      completed: false
    };
    component.itemCompleted(data, 0);
    expect(component.todoListData.todos[0].completed).toBeTruthy();
  });

  it(`should mark all task as completed from the list`, () => {
    component.selectAllItems();
    expect(component.todoList[0].completed).toBeTruthy();
    expect(component.todoList[1].completed).toBeTruthy();
  });

  it('should emit editted item on click', () => {
    spyOn(component.editTaskEmitter, 'emit');
    component.editTask(component.todoList[0], 0);
    expect(component.editTaskEmitter.emit).toHaveBeenCalled();
  });

  it('should emit deleteAll item on click', () => {
    component.todoListData.selectedAll = true;
    spyOn(component.deleteTaskEmitter, 'emit');
    component.deleteAll();
    expect(component.deleteTaskEmitter.emit).toHaveBeenCalled();
  });

  it('should not emit deleteAll item on click', () => {
    component.todoListData.selectedAll = false;
    component.deleteAll();
    expect(component.deleteTaskEmitter.emit).toThrowError();
  });

  it('delete key pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Delete' });
    spyOn(component, 'deleteAll');
    component.handleKeyboardEvent(event);
    expect(component.deleteAll).toHaveBeenCalled();
  });

  it('other  key pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(component, 'deleteAll');
    component.handleKeyboardEvent(event);
    expect(component.deleteAll).not.toHaveBeenCalled();
  });
});
