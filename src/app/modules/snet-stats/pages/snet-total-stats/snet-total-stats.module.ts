import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetTotalStatsComponent } from './snet-total-stats.component';
import { SnetTotalStatsRoutingModule } from './snet-total-stats-routing.module';



@NgModule({
  declarations: [
    SnetTotalStatsComponent
  ],
  imports: [
    CommonModule,
    SnetTotalStatsRoutingModule
  ]
})
export class SnetTotalStatsModule { }
