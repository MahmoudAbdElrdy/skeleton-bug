import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [    
  { 
    path: '',
    children: [
      { path:'customers', component:CustomersComponent},
      { path:'reports', component:ReportsComponent}    
  ] 
  }
   
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class SalesRoutingModule { }
