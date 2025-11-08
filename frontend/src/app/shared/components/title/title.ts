import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Title {
  @Input() text = '';
}
