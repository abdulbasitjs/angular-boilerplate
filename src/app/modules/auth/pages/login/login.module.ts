import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '@core/core.module';
import { AuthLoginContainer } from '../../containers/auth-login.component';

@NgModule({
  declarations: [LoginComponent, AuthLoginContainer],
  imports: [CommonModule, CoreModule, LoginRoutingModule],
})
export class LoginModule {}
