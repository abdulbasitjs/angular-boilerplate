import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetLivePreviewComponent } from './snet-live-preview.component';
import { SnetLivePreviewRoutingModule } from './snet-live-preview-routing.module';



@NgModule({
  declarations: [
    SnetLivePreviewComponent
  ],
  imports: [
    CommonModule,
    SnetLivePreviewRoutingModule
  ]
})
export class SnetLivePreviewModule { }
