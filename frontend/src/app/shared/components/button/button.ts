import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Output() action = new EventEmitter<void>();

  onCLick(): void {
    if(!this.disabled) this.action.emit
  }
}
