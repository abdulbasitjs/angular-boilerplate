import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-sidebar',
  template: `
    <mat-sidenav-container>
      <mat-sidenav id="sidenav" #sideNav mode="push" opened="true">
        <app-sidebar></app-sidebar>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatSidebarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet',
    'Take out trash bins',
    'Wash car',
    'Tank up the motorcycles',
    'Go for flight training',
  ];

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
