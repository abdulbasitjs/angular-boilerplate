import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [CommonModule, CoreModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
  ],
})
export class LayoutModule {}
