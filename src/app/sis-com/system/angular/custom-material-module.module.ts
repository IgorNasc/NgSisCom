import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CustomMaterialModule { }
