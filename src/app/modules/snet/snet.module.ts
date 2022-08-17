import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnetRoutingModule } from './snet-routing.module';
import { SnetMainComponent } from './containers/main.component';


@NgModule({
  declarations: [ SnetMainComponent ],
  imports: [
    CommonModule,
    SnetRoutingModule
  ]
})
export class SnetModule { }
