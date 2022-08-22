import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-forgot',
  template: ` <auth-forgot-container></auth-forgot-container> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
