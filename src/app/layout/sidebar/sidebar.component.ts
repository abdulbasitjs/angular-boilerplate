import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <!-- <mat-drawer-container class="drawer-container" autosize>
      <mat-drawer
        #drawer
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="!(isHandset$ | async)"
        [opened]="!(isHandset$ | async)"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        fixedInViewport="true"
        [attr.role]="'navigation'"
      >
        <mat-nav-list>
          <mat-list-item
            class="side-menu-item"
            [matMenuTriggerFor]="menu"
            #menuTrigger="matMenuTrigger"
            (mouseenter)="mouseEnter(menuTrigger)"
            (mouseleave)="mouseLeave(menuTrigger)"
          >
            <em mat-list-icon
              ><svg
                width="25px"
                height="25px"
                viewBox="0 0 25 25"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="sNePage-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="sNe100"
                    transform="translate(-8.000000, -262.000000)"
                    fill="#000"
                  >
                    <g
                      id="sNeGroup-5"
                      transform="translate(8.000000, 262.000000)"
                    >
                      <path
                        d="M22.6556179,-1.74615877e-12 L2.34368461,-1.74615877e-12 C1.01559666,-1.74615877e-12 1.59872116e-14,1.01559666 1.59872116e-14,2.34403337 L1.59872116e-14,22.6563154 C1.59872116e-14,23.9844033 1.01559666,25 2.34368461,25 L22.6556179,25 C23.9851009,25 25,23.9844033 25,22.6563154 L25,2.34403337 C24.9993025,1.09371948 23.905583,-1.74615877e-12 22.6556179,-1.74615877e-12 Z M22.3773053,23.9390642 L2.62304344,23.9390642 C1.76369242,23.9390642 1.06058704,23.2359588 1.06058704,22.3769566 L1.06058704,4.96672805 C1.06058704,4.19648263 1.62572287,3.55204088 2.36146305,3.42667859 C2.44657693,3.41217609 2.533974,3.40462041 2.62304344,3.40462041 L10.9375436,3.40462041 C12.4218772,3.40462041 12.4996512,3.40462041 12.4996512,2.62374097 C12.4996512,1.6081443 13.2027566,1.06128456 14.0621076,1.06128456 L22.376259,1.06128456 C23.2363076,1.06128456 23.9387154,1.76473871 23.9387154,2.62374097 L23.939413,22.3769566 C23.939413,23.2363076 23.2356101,23.9390642 22.3773053,23.9390642 Z"
                        id="sNeCombined-Shape"
                        fill-rule="nonzero"
                      ></path>
                      <text
                        id="sNet"
                        font-family="Raleway-Regular, Raleway"
                        font-size="16.0714286"
                        font-weight="normal"
                        letter-spacing="0.584415559"
                      >
                        <tspan x="9.5" y="18.5119048">s</tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </svg></em
            >
            <h4 mat-line *ngIf="isExpanded" class="mr-10">sNet Stats</h4>
          </mat-list-item>
          <mat-menu
            #menu="matMenu"
            [class]="!isExpanded ? 'menu-list' : 'display-none'"
            [overlapTrigger]="false"
            [hasBackdrop]="false"
          >
            <div
              (mouseenter)="mouseEnter(menuTrigger)"
              (mouseleave)="mouseLeave(menuTrigger)"
            >
              <span mat-menu-item class="header">sNet Stats</span>
              <span mat-menu-item>TOTAL STATS</span>
              <span mat-menu-item>DETECTION</span>
              <span mat-menu-item>COMPARISON</span>
              <span mat-menu-item>LIVE PREVIEW</span>
              <span mat-menu-item>SEARCH URL</span>
              <span mat-menu-item>SUBMIT URL</span>
              <span mat-menu-item>TIMELINE</span>
              <span mat-menu-item>HISTORICAL TREND</span>
            </div>
          </mat-menu>
        </mat-nav-list>
      </mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container> -->
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
