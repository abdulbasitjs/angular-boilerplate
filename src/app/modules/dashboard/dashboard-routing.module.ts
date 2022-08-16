import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CLOUD_SETTING_KEY,
  DOMAIN_LISTING_KEY,
  SNET_KEY,
  USER_MANAGEMENT_KEY,
  USER_PROFILE_KEY,
} from '@core/configs';
import { DashboardLayoutComponent } from 'src/app/layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: `/snxc/${SNET_KEY}`, pathMatch: 'full' },
      {
        path: SNET_KEY,
        loadChildren: () =>
          import('../snet/snet.module').then((m) => m.SnetModule),
      },
      {
        path: DOMAIN_LISTING_KEY,
        loadChildren: () =>
          import('../domain-listing/domain-listing.module').then(
            (m) => m.DomainListingModule
          ),
      },
      {
        path: CLOUD_SETTING_KEY,
        loadChildren: () =>
          import('../cloud-setting/cloud-setting.module').then(
            (m) => m.CloudSettingModule
          ),
      },
      {
        path: USER_MANAGEMENT_KEY,
        loadChildren: () =>
          import('../user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: USER_PROFILE_KEY,
        loadChildren: () =>
          import('../user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
