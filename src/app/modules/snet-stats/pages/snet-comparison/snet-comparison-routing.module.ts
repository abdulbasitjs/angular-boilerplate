import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetComparisonComponent } from './snet-comparison.component';

const routes: Routes = [
  {
    path: '',
    component: SnetComparisonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetComparisonRoutingModule {}
