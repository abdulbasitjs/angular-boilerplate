import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetSubmitURLComponent } from './snet-submit.component';
import { SnetSubmitURLRoutingModule } from './snet-submit-routing.module';



@NgModule({
  declarations: [
    SnetSubmitURLComponent
  ],
  imports: [
    CommonModule,
    SnetSubmitURLRoutingModule
  ]
})
export class SnetSubmitURLModule { }
