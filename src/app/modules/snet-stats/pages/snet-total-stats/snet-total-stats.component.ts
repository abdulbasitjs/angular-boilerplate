import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-total-stats',
  template: ` <div style="height: 100vh">SNET Total Stats</div> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnetTotalStatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
