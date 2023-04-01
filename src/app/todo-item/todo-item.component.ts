import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() update: EventEmitter<{ id: number; updatedTitle: string }> = new EventEmitter();
  @Output() toggleCompleted: EventEmitter<number> = new EventEmitter();

  editing: boolean = false;
  updatedTitle: string;

  deleteTodo(): void {
    this.delete.emit(this.todo.id);
  }

  startEditing(): void {
    this.editing = true;
    this.updatedTitle = this.todo.title;
  }

  finishEditing(): void {
    if (this.updatedTitle.trim()) {
      this.update.emit({ id: this.todo.id, updatedTitle: this.updatedTitle.trim() });
    }
    this.editing = false;
  }

  cancelEditing(): void {
    this.editing = false;
  }

  toggleTodoCompleted(): void {
    this.toggleCompleted.emit(this.todo.id);
  }
}
