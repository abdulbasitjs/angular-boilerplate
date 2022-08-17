import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetDetectionComponent } from './snet-detection.component';

const routes: Routes = [
  {
    path: '',
    component: SnetDetectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetDetectionRoutingModule {}
