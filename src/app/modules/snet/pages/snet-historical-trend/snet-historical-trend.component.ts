import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-historica-trend',
  template: `
    <p>
      SNET Historical Trend
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetHistoricalTrendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
