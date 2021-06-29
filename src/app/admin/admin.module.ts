import { AdminRoutingModule, routes } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagmentModule } from './user-managment/user-managment.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserManagmentModule,
  ]
})
export class AdminModule { }
