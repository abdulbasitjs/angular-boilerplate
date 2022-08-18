import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
