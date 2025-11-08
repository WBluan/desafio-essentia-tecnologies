import { Component } from '@angular/core';
import { Todo } from '../todo-model/todo.model';
import { ShareModules } from '../../../shared/shared.module';
import { InputTodo } from "../todo-input/todo-input";
import { TodoList } from "../todo-list/todo-list";


@Component({
  selector: 'app-todo',
  templateUrl: './todo-component.html',
  styleUrls: ['./todo-component.scss'],
  imports: [ShareModules, InputTodo, TodoList]
})
export class TodoComponent {
  todos: Todo[] = [];

  addTodo(text: string) {
    if (!text.trim()) return;
    this.todos.push({ id: Date.now(), text, completed: false });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  clearAll() {
    this.todos = [];
  }
}