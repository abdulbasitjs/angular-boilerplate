import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { ResetComponent } from './reset.component';
import { ResetRoutingModule } from './reset-routing.module';
import { AuthResetContainer } from '../../containers/auth-reset.component';



@NgModule({
  declarations: [
    ResetComponent,
    AuthResetContainer
  ],
  imports: [
    CommonModule,
    CoreModule,
    ResetRoutingModule
  ]
})
export class ResetModule { }
