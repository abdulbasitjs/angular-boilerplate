import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetHistoricalTrendComponent } from './snet-historical-trend.component';

const routes: Routes = [
  {
    path: '',
    component: SnetHistoricalTrendComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetHistoricalTrendRoutingModule {}
