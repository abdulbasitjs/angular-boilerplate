import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetStatsComponent } from './snet-stats.component';

const routes: Routes = [
  {
    path: '',
    component: SnetStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetStatsRoutingModule {}
