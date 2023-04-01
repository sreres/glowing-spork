import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  updateTodo(id: number, updatedTitle: string): void {
    this.todoService.updateTodo(id, updatedTitle);
  }

  toggleCompleted(id: number): void {
    this.todoService.toggleCompleted(id);
  }
}
