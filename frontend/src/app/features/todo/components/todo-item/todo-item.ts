import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { Button } from "../../../../shared/components/button/button";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-item',
  imports: [Button, MatIconModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.todo.id)
  }
}
