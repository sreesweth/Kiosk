import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutSideComponent } from './components/layout-side/layout-side.component';
import { MaterialModule } from '../../shared/material/material.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    LayoutSideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LayoutSideComponent
  ]
})
export class LayoutSideModule { }
