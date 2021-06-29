import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesOfficesComponent } from './branches-offices/branches-offices.component';
import { LocationsComponent } from './locations/locations.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { VariablesComponent } from './variables/variables.component';

export const routes: Routes = [
  { 
    path: '',
    children: [
      { path:'branches', component: BranchesOfficesComponent},
      { path:'locations', component: LocationsComponent},
      { path:'products', component: ProdcutsComponent},
      { path:'variables', component: VariablesComponent},
   ] 
  }

];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class AdministrationRoutingModule { }
