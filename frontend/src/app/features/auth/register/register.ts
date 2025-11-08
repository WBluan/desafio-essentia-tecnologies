import { Component, OnInit } from '@angular/core';
import { FormInput } from '../../../shared/components/input/form-input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShareModules } from '../../../shared/shared.module';

@Component({
  selector: 'app-register',
  imports: [FormInput, ReactiveFormsModule, ShareModules],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Register form: ', this.form.value)
      return
    }

    return this.form.markAllAsTouched();
  }
}
