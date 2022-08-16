import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <app-header></app-header>
    <section>THis is dashboard section</section>
    <app-sidebar></app-sidebar>
    <router-outlet></router-outlet>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
