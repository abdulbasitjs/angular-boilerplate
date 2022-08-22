import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, AuthRoutingModule, LayoutModule],
})
export class AuthModule {}
