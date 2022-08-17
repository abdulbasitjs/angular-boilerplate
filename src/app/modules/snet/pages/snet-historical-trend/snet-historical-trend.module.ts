import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetHistoricalTrendComponent } from './snet-historical-trend.component';
import { SnetHistoricalTrendRoutingModule } from './snet-historical-trend-routing.module';



@NgModule({
  declarations: [
    SnetHistoricalTrendComponent
  ],
  imports: [
    CommonModule,
    SnetHistoricalTrendRoutingModule
  ]
})
export class SnetHistoricalTrendModule { }
