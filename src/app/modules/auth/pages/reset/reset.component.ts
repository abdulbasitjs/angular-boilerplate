import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  template: `
    <p>
      Reset Works
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
