import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-search-url',
  template: `
    <p>
      SNET Search URL
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetSearchURLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
