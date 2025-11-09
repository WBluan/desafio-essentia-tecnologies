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

  trackById(index: number, todo: Todo) {
    return todo.id;
  }
}
