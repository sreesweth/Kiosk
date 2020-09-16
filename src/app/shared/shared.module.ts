import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { GridColsDirective } from './directives/grid-cols/grid-cols.directive';
import { NavListItemComponent } from './components/nav-list/nav-list.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TileComponent } from './components/tile/tile.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuGroupItemComponent } from './components/menu-group-item/menu-group-item.component';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    GridColsDirective,
    NavListItemComponent,
    SideNavComponent,
    DashboardComponent,
    TileComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MenuItemComponent,
    MenuGroupItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    DataService
  ],
  exports: [
    GridColsDirective,
    NavListItemComponent,
    SideNavComponent,
    DashboardComponent,
    TileComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
