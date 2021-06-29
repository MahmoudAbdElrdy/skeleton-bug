import { DashSalesComponent } from './dash-sales/dash-sales.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    children: [
    { path:'administration', component:DashAdminComponent},
    { path:'sales', component:DashSalesComponent}
   ] 
  }
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class DashboardRoutingModule { }
