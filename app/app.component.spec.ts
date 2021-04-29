import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Todo list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Todo list');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('Todo list app is running!');
  // });

  it(`should add object to the list`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.todoListData.newTodo = 'My First task is to clean';
    app.addToList();
    expect(app.todoListData.todos.length).toEqual(1);
  });

  it(`should edit the value`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const value = { item: { newTodo: 'My first Task is partially completed' }, index: 0 };
    app.editItem(value);
    expect(app.todoListData.newTodo).toEqual('My first Task is partially completed');
    expect(app.todoListData.editedItemIndex).toEqual(0);
  });

  it(`should save the edited value`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.todoListData.newTodo = 'My first Task is completed';
    app.todoListData.editedItemIndex = 0;
    app.saveToList();
    expect(app.todoListData.todos[0].newTodo).toEqual('My first Task is completed');
  });

});
