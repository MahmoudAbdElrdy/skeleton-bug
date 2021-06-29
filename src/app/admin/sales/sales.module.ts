import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { routes, SalesRoutingModule } from './sales-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CustomersComponent, ReportsComponent],
  imports: [
    CommonModule,  RouterModule.forChild(routes),
  ]
})
export class SalesModule { }
