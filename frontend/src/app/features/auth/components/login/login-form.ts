import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from '../../../../shared/components/input/form-input';
import { ShareModules } from '../../../../shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-login-form',
  imports: [FormInput, ReactiveFormsModule, ShareModules],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthService, 
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return this.form.markAllAsTouched();
    }
    
  this.toast.showSuccess('Usuário autenticado.');

    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(['/todo']),
      error: (err) => {
      console.error(err);
      this.toast.showError('Erro ao entrar no sistema. Tente novamente.')
    }
    })
  }
}
