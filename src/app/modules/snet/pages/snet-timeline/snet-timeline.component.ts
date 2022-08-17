import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-timeline',
  template: `
    <p>
      SNET Timeline
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
