import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgStyle, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Form {
  @Input() gap = '1rem';
  @Input() align = 'stretch';
  @Input() formGroup!: FormGroup;
  @Output() submitted = new EventEmitter<void>();
}