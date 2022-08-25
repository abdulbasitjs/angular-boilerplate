import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedMaterialModule } from '@shared/modules/shared-material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';

const Modules = [];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    // FlexLayoutModule,
    SharedMaterialModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    // FlexLayoutModule,
    SharedMaterialModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
