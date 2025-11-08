import { Routes } from '@angular/router';
import { LoginForm } from './features/auth/login/login-form';
import { Register } from './features/auth/register/register';
import { TodoComponent } from './features/todo/todo-component/todo-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginForm },
  { path: 'register', component: Register },
  { path: 'todo', component: TodoComponent }
];
