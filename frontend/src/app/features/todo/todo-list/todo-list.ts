import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo-model/todo.model';
import { TodoItem } from "../todo-item/todo-item";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  @Input() todos: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
}
