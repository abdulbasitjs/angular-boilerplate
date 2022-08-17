import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetStatsComponent } from './snet-stats.component';
import { SnetStatsRoutingModule } from './snet-stats-routing.module';



@NgModule({
  declarations: [
    SnetStatsComponent
  ],
  imports: [
    CommonModule,
    SnetStatsRoutingModule
  ]
})
export class SnetStatsModule { }
