import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-live-preview',
  template: `
    <p>
      SNET Live Preview
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetLivePreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
