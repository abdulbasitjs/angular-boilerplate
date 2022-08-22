import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedMaterialModule } from '@shared/modules/shared-material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MatSidebarComponent } from './sidebar/mat-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    MatSidebarComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, CoreModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    MatSidebarComponent,
    SidebarComponent,
  ],
})
export class LayoutModule {}
