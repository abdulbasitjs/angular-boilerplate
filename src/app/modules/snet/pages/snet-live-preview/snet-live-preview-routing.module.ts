import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetLivePreviewComponent } from './snet-live-preview.component';

const routes: Routes = [
  {
    path: '',
    component: SnetLivePreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetLivePreviewRoutingModule {}
