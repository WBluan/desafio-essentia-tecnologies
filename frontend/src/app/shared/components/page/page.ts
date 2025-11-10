import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-page',
  imports: [NgStyle],
  templateUrl: './page.html',
  styleUrl: './page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page {
  @Input() contentMaxWidth = '480px';
  @Input() contentMaxHeight = '480px';
  @Input() centered = true;
}
