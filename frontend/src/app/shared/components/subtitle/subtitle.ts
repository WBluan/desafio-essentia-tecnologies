import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  imports: [],
  templateUrl: './subtitle.html',
  styleUrl: './subtitle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Subtitle {
  @Input() text = '';
}
