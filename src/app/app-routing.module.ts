import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HomeComponent } from './pages/components/home/home.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { LayoutFullComponent } from './layouts/layout-full/components/layout-full/layout-full.component';
import { LayoutSideComponent } from './layouts/layout-side/components/layout-side/layout-side.component';
import { MenuItemDetailsComponent } from './pages/components/menu-item-details/menu-item-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'menu',
    component: LayoutSideComponent,
    children: [
      {
        path: '',
        redirectTo: '/menu/fullMenu',
        pathMatch: 'full'
      },
      {
        path: ':menuGroup',
        component: MenuComponent,
      },
      {
        path: 'product/:name',
        component: MenuItemDetailsComponent,
      }
    ],
  },
  {
    path: ':client',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
