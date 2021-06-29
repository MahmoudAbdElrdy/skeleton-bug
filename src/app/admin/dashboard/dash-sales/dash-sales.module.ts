import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashSalesRoutingModule } from './dash-sales-routing.module';
import { DashSalesComponent } from './dash-sales.component';
import { SharedThemeModule } from 'src/app/theme/shared-theme/shared-theme.module';



@NgModule({
  declarations: [DashSalesComponent],
  imports: [
    CommonModule,
    DashSalesRoutingModule,
    SharedThemeModule
  ]
})
export class DashSalesModule { }
