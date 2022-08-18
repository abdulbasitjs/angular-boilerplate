import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-submit-url',
  template: `
    <p>
      SNET Submit URL
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetSubmitURLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
