import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [NgStyle],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Form {
  @Input() gap = '1rem';
  @Input() align = 'stretch';
}
