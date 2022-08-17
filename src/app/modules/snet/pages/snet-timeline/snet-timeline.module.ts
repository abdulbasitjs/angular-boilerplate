import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetTimelineComponent } from './snet-timeline.component';
import { SnetTimelineRoutingModule } from './snet-timeline-routing.module';



@NgModule({
  declarations: [
    SnetTimelineComponent
  ],
  imports: [
    CommonModule,
    SnetTimelineRoutingModule
  ]
})
export class SnetTimelineModule { }
