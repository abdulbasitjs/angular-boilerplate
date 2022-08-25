import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  template: ` <auth-reset-container></auth-reset-container> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
