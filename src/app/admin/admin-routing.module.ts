import { AdminComponent } from './../theme/layout/admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard', component: AdminComponent,
    loadChildren: ()=> import('./dashboard/dashboard.module').then(module=> module.DashboardModule)
  },
  {
    path:'administration', component: AdminComponent,
    loadChildren: ()=> import('./administration/administration.module').then(module=> module.AdministrationModule)
  },
  {
    path:'sales', component: AdminComponent,
    loadChildren: ()=> import('./sales/sales.module').then(module=> module.SalesModule)
  },
  {
    path:'user-managment', component: AdminComponent,
    loadChildren: ()=> import('./user-managment/user-managment.module').then(module=> module.UserManagmentModule)
  }
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class AdminRoutingModule { }
