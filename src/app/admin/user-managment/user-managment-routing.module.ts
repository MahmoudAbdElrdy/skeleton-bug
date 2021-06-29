import { UsersComponent } from './users/users.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { TeamsComponent } from './teams/teams.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionGroupsComponent } from './permission-groups/permission-groups.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routesUserManagment: Routes = [
  
  { path: '',
children: [
{ path:'roles', component: RolesComponent},
{ path:'permission-groups', component:PermissionGroupsComponent},
{ path:'users', component: UsersComponent},
{ path:'user-permissions', component: UserPermissionsComponent},
{ path:'teams', component: TeamsComponent},   
{ path:'user-profile', component: UserProfileComponent}  ] }
 
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class UserManagmentRoutingModule { }
