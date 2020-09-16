import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { SharedModule } from '../shared/shared.module'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ThemeService
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule { }
