import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { MenuItemDetailsComponent } from './components/menu-item-details/menu-item-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MenuItemDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class PagesModule { }
