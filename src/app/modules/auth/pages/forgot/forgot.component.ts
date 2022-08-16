import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-forgot',
  template: `
    <p>
      forgot works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
