import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetTotalStatsComponent } from './snet-total-stats.component';

const routes: Routes = [
  {
    path: '',
    component: SnetTotalStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetTotalStatsRoutingModule {}
