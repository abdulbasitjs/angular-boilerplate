import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
    <div class="auth-layout">
      <em class="logo-corner">
        <svg-icon src="assets/svgs/slashnext-icon.svg"></svg-icon>;
      </em>
      <div class="auth-container-layout">
        <div class="section-logo">
          <svg-icon src="assets/svgs/slashnext-logo.svg"></svg-icon>;
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
