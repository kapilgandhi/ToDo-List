import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Todo list'`, () => {
    expect(app.title).toEqual('Todo list');
  });

  it(`should add object to the list`, () => {
    app.todoListData = {
      id: '',
      newTodo: 'My First task is to clean',
      priority: 'High',
      todoObj: {},
      editValue: false,
      editedItemIndex: false,
      selectedAll: false,
      todos: []
    };
    app.addToList();
    expect(app.todoListData.todos.length).toEqual(1);
  });

  it(`should not add item to list`, () => {
    app.todoListData.newTodo = '';
    app.addToList();
    expect(app.todoListData.todos.length).toEqual(0);
  });

  it(`should edit the value`, () => {
    const value = { item: { newTodo: 'My first Task is partially completed' }, index: 0 };
    app.editItem(value);
    expect(app.todoListData.newTodo).toEqual('My first Task is partially completed');
    expect(app.todoListData.editedItemIndex).toEqual(0);
  });

  it(`should save the edited value`, () => {
    app.todoListData.newTodo = 'My first Task is completed';
    app.todoListData.editedItemIndex = 0;
    app.saveToList();
    expect(app.todoListData.todos[0].newTodo).toEqual('My first Task is completed');
  });

  it(`should not save the edited value`, () => {
    app.todoListData.newTodo = '';
    app.todoListData.editedItemIndex = 0;
    app.saveToList();
    expect(app.todoListData.todos.length).toEqual(0);
  });

  it(`should delete all the values if checkbox is selected`, () => {
    app.deleteAllItems(true);
    expect(app.todoListData.todos).toEqual([]);
  });

  it(`should delete all the values if checkbox is selected`, () => {
    app.todoListData.todos = [{
      newTodo: 'My First task is to clean',
      completed: false,
      priority: 'High'
    }, {
      newTodo: 'My Second task is to work',
      completed: false,
      priority: 'Medium'
    }];
    app.deleteAllItems(false);
    expect(app.todoListData.todos.length).toEqual(2);
  });

});
