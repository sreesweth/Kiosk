import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutFullComponent } from './components/layout-full/layout-full.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    LayoutFullComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LayoutFullComponent
  ]
})
export class LayoutFullModule { }
