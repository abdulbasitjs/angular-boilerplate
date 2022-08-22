import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from './forgot-routing.module';
import { AuthForgotContainer } from '../../containers/auth-forgot.component';

@NgModule({
  declarations: [ForgotComponent, AuthForgotContainer],
  imports: [CoreModule, CommonModule, ForgotRoutingModule],
})
export class ForgotModule {}
