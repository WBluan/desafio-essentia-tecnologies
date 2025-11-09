import { Component } from '@angular/core';
import { LoginForm } from './features/auth/components/login/login-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet>`,
})
export class AppComponent {}
