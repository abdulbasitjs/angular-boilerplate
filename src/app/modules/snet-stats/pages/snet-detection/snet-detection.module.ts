import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetDetectionComponent } from './snet-detection.component';
import { SnetDetectionRoutingModule } from './snet-detection-routing.module';



@NgModule({
  declarations: [
    SnetDetectionComponent
  ],
  imports: [
    CommonModule,
    SnetDetectionRoutingModule
  ]
})
export class SnetDetectionModule { }
