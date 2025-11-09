import { Component, OnInit } from '@angular/core';
import { FormInput } from '../../../../shared/components/input/form-input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShareModules } from '../../../../shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormInput, ReactiveFormsModule, ShareModules],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return this.form.markAllAsTouched();
    }

    const { email, password, confirmPassword } = this.form.value;
    if (password != confirmPassword) {
      console.log("Erro: As senhas não conferem.")
      return;
    }

    this.auth.register(email, password).subscribe({
      next: () => this.router.navigate(['/todo']),
      error: err => console.error('Register error', err)
    })
  }
}
