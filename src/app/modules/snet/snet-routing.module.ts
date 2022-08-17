import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardLayoutComponent } from 'src/app/layout/dashboard-layout/dashboard-layout.component';
import { SnetMainComponent } from './containers/main.component';

const routes: Routes = [
  {
    path: '',
    component: SnetMainComponent,
    children: [
      { path: '', redirectTo: '/snxc/snet/stats', pathMatch: 'full' },
      {
        path: 'stats',
        loadChildren: () =>
          import('./pages/snet-stats/snet-stats.module').then((m) => m.SnetStatsModule),
      },
      {
        path: 'detection',
        loadChildren: () =>
          import('./pages/snet-detection/snet-detection.module').then((m) => m.SnetDetectionModule),
      },
      {
        path: 'comparison',
        loadChildren: () =>
          import('./pages/snet-comparison/snet-comparison.module').then((m) => m.SnetComparisonModule),
      },
      {
        path: 'live-preview',
        loadChildren: () =>
          import('./pages/snet-live-preview/snet-live-preview.module').then((m) => m.SnetLivePreviewModule),
      },
      {
        path: 'search-url',
        loadChildren: () =>
          import('./pages/snet-search-url/snet-search-url.module').then((m) => m.SnetSearchURLModule),
      },
      {
        path: 'submit-url',
        loadChildren: () =>
          import('./pages/snet-submit-url/snet-submit-url.module').then((m) => m.SnetSubmitURLModule),
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./pages/snet-timeline/snet-timeline.module').then((m) => m.SnetTimelineModule),
      },
      {
        path: 'historical-trend',
        loadChildren: () =>
          import('./pages/snet-historical-trend/snet-historical-trend.module').then((m) => m.SnetHistoricalTrendModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetRoutingModule {}
