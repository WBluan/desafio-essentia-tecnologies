import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from '../../../shared/components/input/form-input';
import { ShareModules } from "../../../shared/shared.module";

@Component({
  selector: 'app-login-form',
  imports: [FormInput, ReactiveFormsModule, ShareModules],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Login form: ', this.form.value)
      return
    }

    return this.form.markAllAsTouched();
  }

}
