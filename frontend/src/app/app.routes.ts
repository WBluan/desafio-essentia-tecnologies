import { Routes } from '@angular/router';
import { LoginForm } from './features/auth/login/login-form';
import { Register } from './features/auth/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginForm },
  { path: 'register', component: Register },];
