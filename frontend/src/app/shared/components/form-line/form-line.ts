import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-line',
  imports: [NgIf],
  templateUrl: './form-line.html',
  styleUrl: './form-line.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLine {
  @Input() label = '';
}
