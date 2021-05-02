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
    app.todoLabel = 'My First task is to clean';
    app.priority = 'High';
    app.addToList();
    expect(app.todoObj.newTodo).toEqual('My First task is to clean');
    expect(app.todoObj.priority).toEqual('High');
    expect(app.todoLabel).toEqual('');
  });

  it(`should add object to the list`, () => {
    app.todoLabel = '';
    app.priority = '';
    app.addToList();
    expect(app.todoObj).toBeUndefined();
  });
});
