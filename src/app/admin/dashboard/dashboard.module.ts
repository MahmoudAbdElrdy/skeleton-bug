import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ApexChartComponent } from './../../theme/shared/components/chart/apex-chart/apex-chart.component';
import { DashboardRoutingModule, routes } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { CardModule } from 'src/app/theme/shared/components';
import { DashSalesComponent } from './dash-sales/dash-sales.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashSalesComponent,DashAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    SharedModule,
    NgbTabsetModule
  ]
})
export class DashboardModule { }
