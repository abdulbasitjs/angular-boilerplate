import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-stats',
  template: `
    <p>
      SNET Stats
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
