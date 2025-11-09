import { Routes } from '@angular/router';
import { Register } from './features/auth/components/register/register';
import { TodoComponent } from './features/todo/components/todo-component/todo-component';
import { LoginForm } from './features/auth/components/login/login-form';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginForm },
  { path: 'register', component: Register },
  { path: 'todo', component: TodoComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login' }
];
