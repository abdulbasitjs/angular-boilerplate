import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CLOUD_SETTING_KEY,
  DOMAIN_LISTING_KEY,
  SNET_KEY,
  USER_MANAGEMENT_KEY,
  USER_PROFILE_KEY,
} from '@core/configs';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: { isDashboardPage: true },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    redirectTo: '',
    pathMatch: 'full',
  },

  {
    path: SNET_KEY,
    loadChildren: () =>
      import('./modules/snet/snet.module').then((m) => m.SnetModule),
  },
  {
    path: DOMAIN_LISTING_KEY,
    loadChildren: () =>
      import('./modules/domain-listing/domain-listing.module').then(
        (m) => m.DomainListingModule
      ),
  },
  {
    path: CLOUD_SETTING_KEY,
    loadChildren: () =>
      import('./modules/cloud-setting/cloud-setting.module').then(
        (m) => m.CloudSettingModule
      ),
  },
  {
    path: USER_MANAGEMENT_KEY,
    loadChildren: () =>
      import('./modules/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  {
    path: USER_PROFILE_KEY,
    loadChildren: () =>
      import('./modules/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
