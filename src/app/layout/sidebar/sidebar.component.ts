import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <mat-nav-list class="menu">
      <mat-list-item>
        <a mat-list-item routerLink="/snxc/snet/live-preview">
          <mat-icon mat-list-icon>badge</mat-icon>
          <span mat-line>Your profile</span>
        </a>
      </mat-list-item>

      <!-- <mat-list-item>
        <a matLine href="#">test</a>
        <button class="menu__item" mat-flat-button>
          <mat-icon>work</mat-icon>
          Project
        </button>
      </mat-list-item>

      <mat-list-item>
        <a matLine href="#">test</a>
        <button class="menu__item" mat-flat-button>
          <mat-icon>settings_application</mat-icon>
          Settings
        </button>
      </mat-list-item> -->
    </mat-nav-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
