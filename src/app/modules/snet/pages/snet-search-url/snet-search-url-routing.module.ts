import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnetSearchURLComponent } from './snet-search-url.component';

const routes: Routes = [
  {
    path: '',
    component: SnetSearchURLComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnetSearchURLRoutingModule {}
