import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
    StoreModule.forFeature('auth', reducers),
  ],
})
export class AuthModule {}
