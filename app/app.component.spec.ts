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
    app.newTodo = 'My First task is to clean';
    app.addToList();
    expect(app.todos.length).toEqual(1);
  });

  it(`should remove object from the list`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.removeItem(1);
    expect(app.todos.length).toEqual(0);
  });

  it(`should mark task as completed from the list`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const data = {
      newTodo: 'My First task is to clean',
      completed: false
    };
    app.itemCompleted(data, 0);
    expect(app.todos[0].completed).toBeTruthy();
  });

  it(`should edit the value`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const data = 'My first Task is partially completed';
    app.editItem(data, 0);
    expect(app.newTodo).toEqual('My first Task is partially completed');
    expect(app.editedItemIndex).toEqual(0);
  });

  it(`should save the edited value`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.newTodo = 'My first Task is completed';
    app.editedItemIndex = 0;
    app.saveToList();
    expect(app.todos[0].newTodo).toEqual('My first Task is completed');
  });

});
