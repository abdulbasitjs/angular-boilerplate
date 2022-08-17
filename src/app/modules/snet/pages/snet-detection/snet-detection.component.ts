import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-detection',
  template: `
    <p>
      SNET Detection
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetDetectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
