import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { CoreModule } from './core/core.module';
import { LayoutFullModule } from './layouts/layout-full/layout-full.module';
import { LayoutSideModule } from './layouts/layout-side/layout-side.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    LayoutFullModule,
    LayoutSideModule,
    PagesModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
