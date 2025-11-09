import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { TodoItem } from "../todo-item/todo-item";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  @Input() todos: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<{ todo: Todo, completed: boolean }>();
  @Output() saveEdit = new EventEmitter<{ todo: Todo, title: string }>();

  get sortedTodos(): Todo[] {
  return [...this.todos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return Number(a.completed) - Number(b.completed);
    }

    if (!a.completed && !b.completed) {
      const aDate = a.created_at ? new Date(a.created_at).getTime() : a.id;
      const bDate = b.created_at ? new Date(b.created_at).getTime() : b.id;
      return bDate - aDate; // mais recentes primeiro
    }

    return 0;
  });
}

  trackById(index: number, todo: Todo) {
    return todo.id;
  }
}
