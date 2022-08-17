import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetTimelineComponent } from './snet-timeline.component';

const routes: Routes = [
  {
    path: '',
    component: SnetTimelineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetTimelineRoutingModule {}
