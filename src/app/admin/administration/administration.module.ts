import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { BranchesOfficesComponent } from './branches-offices/branches-offices.component';
import { LocationsComponent } from './locations/locations.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { AdministrationRoutingModule, routes } from './administration-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VariablesComponent, BranchesOfficesComponent, LocationsComponent, ProdcutsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdministrationModule { }
