import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-comparison',
  template: `
    <p>
      SNET Comparison
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetComparisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
