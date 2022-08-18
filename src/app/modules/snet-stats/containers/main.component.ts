import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snet-main',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnetMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
