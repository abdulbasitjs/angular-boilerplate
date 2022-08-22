import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from '@shared/modules/shared-material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
})
export class CoreModule {}
