import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newId = this.todos.length + 1;
    this.todos.push(new Todo(newId, title));
  }
  
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodo(id: number, updatedTitle: string): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.title = updatedTitle;
    }
  }

  toggleCompleted(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
