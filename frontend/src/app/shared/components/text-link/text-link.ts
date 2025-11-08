import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-link.html',
  styleUrls: ['./text-link.scss'],
})
export class TextLink {
  @Input() text: string = '';
  @Input() linkText: string = '';
  @Input() route: string = '';
  @Input() align: 'left' | 'center' | 'right' = 'center';

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}