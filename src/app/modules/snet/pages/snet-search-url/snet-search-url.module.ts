import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnetSearchURLComponent } from './snet-search-url.component';
import { SnetSearchURLRoutingModule } from './snet-search-url-routing.module';



@NgModule({
  declarations: [
    SnetSearchURLComponent
  ],
  imports: [
    CommonModule,
    SnetSearchURLRoutingModule
  ]
})
export class SnetSearchURLModule { }
