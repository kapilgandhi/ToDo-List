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
      priority: 'High',
      isEditable: false
    }, {
      newTodo: 'My Second task is to work',
      priority: 'Medium',
      isEditable: false
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create todoList array', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it('should create todoList array', () => {
    component.todo = {
      id: component.i++,
      completed: false,
      isEditable: false
    };
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it(`should remove object from the list`, () => {
    component.removeItem(0);
    expect(component.todoList.length).toEqual(1);
  });

  it(`should remove object from the list`, () => {
    component.removeItem(0);
    expect(component.todoList.length).toEqual(1);
  });

  it(`should mark all task as completed from the list`, () => {
    component.selectAllItems();
    expect(component.todoList[0].completed).toBeTruthy();
    expect(component.todoList[1].completed).toBeTruthy();
  });

  it('should emit deleteAll item on click', () => {
    component.selectedAll = true;
    component.deleteAll();
    expect(component.todoList).toEqual([]);
  });

  it('should not emit deleteAll item on click', () => {
    component.selectedAll = false;
    component.deleteAll();
    expect(component.todoList).not.toEqual([]);
  });

  it('delete key pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Delete' });
    spyOn(component, 'deleteAll');
    component.handleKeyboardEvent(event);
    expect(component.deleteAll).toHaveBeenCalled();
  });

  it('other key pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(component, 'deleteAll');
    component.handleKeyboardEvent(event);
    expect(component.deleteAll).not.toHaveBeenCalled();
  });

  it('should inline edit if double click pressed', () => {
    component.inlineEdit(component.todoList[0]);
    expect(component.todoList[0].isEditable).toBeTruthy();
  });

  it('should cancel editing', () => {
    component.todoList[0].isEditable = true;
    component.cancelEditing(component.todoList[0]);
    expect(component.todoList[0].isEditable).toBeFalsy;
  });

  it('should save to list edited item', () => {
    component.todoList[0].isEditable = true,
      component.saveToList(component.todoList[0], 0);
    expect(component.todoList[0].isEditable).toBeFalsy();
  });
});
