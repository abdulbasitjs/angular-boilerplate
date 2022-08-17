import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetComparisonComponent } from './snet-comparison.component';
import { SnetComparisonRoutingModule } from './snet-comparison-routing.module';



@NgModule({
  declarations: [
    SnetComparisonComponent
  ],
  imports: [
    CommonModule,
    SnetComparisonRoutingModule
  ]
})
export class SnetComparisonModule { }
