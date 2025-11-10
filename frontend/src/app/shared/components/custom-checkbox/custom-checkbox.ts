import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  imports: [CommonModule],
  templateUrl: './custom-checkbox.html',
  styleUrl: './custom-checkbox.scss',
})
export class CustomCheckbox {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() change = new EventEmitter< {completed: boolean} >();

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.change.emit({ completed: input.checked })
  }
}
