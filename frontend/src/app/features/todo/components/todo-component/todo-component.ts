import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { ShareModules } from '../../../../shared/shared.module';
import { InputTodo } from "../todo-input/todo-input";
import { TodoList } from "../todo-list/todo-list";
import { TodoService } from '../../services/todo.service';
import { ToastService } from '../../../../shared/services/toast.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo-component.html',
  styleUrls: ['./todo-component.scss'],
  imports: [ShareModules, InputTodo, TodoList]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  loading = false;
  error = "";

  constructor(private todoService: TodoService, private toast: ToastService) {}

  get pendingCount(): number {
  return this.todos.filter(t => !t.completed).length;
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.loading = true;
    this.todoService.getAll().subscribe({
      next: (tasks) => {
        this.todos = tasks;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        this.toast.showError('Erro ao carregar tarefas. Tente novamente.')
      }
    });
  }

  addTodo(text: string) {
    if (!text.trim()) return;
    
    const newTodo: Partial<Todo> = {
      title: text,
      completed: false
    };

    this.todoService.create(newTodo).subscribe({
      next: (created) => {
        this.toast.showSuccess('Nova tarefa adicionada com sucesso!')
        this.todos.push(created);
        this.loadTodos();
      },
      error: (err) => {
        this.error = err.message;
        this.toast.showError('Erro ao criar tarefa. Tente novamente.')
      }
    });
  }

  toggleComplete(todo: Todo, completed: boolean) {
  this.todoService.update(todo.id!, { completed }).subscribe({
    next: () => todo.completed = completed,
    error: err => console.error(err)
  });
}

editTodo(todo: Todo, newTitle: string) {
  if (!newTitle.trim()) return;
  this.todoService.update(todo.id!, { title: newTitle }).subscribe({
    next: () => {
      todo.title = newTitle
      this.toast.showSuccess('Tarefa editada!')
    },
    error: (err) => {
      this.error = err.message;
      console.error(err);
        this.toast.showError('Erro ao editar tarefa. Tente novamente.')
    }
  });
}

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.toast.showSuccess('Tarefa excluída comn sucesso.')
      },
      error: (err) => {
        this.error = err.message;
        console.error(err);
        this.toast.showError('Erro ao deletar tarefa. Tente novamente.')
    }
    });
  }

  clearAll() {
    this.todos.forEach(todo => this.deleteTodo(todo.id!));
  }
}