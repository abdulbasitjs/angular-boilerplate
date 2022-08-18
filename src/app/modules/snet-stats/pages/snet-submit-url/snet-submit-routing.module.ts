import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetSubmitURLComponent } from './snet-submit.component';

const routes: Routes = [
  {
    path: '',
    component: SnetSubmitURLComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetSubmitURLRoutingModule {}
