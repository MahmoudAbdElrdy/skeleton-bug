import { LightboxModule } from 'ngx-lightbox';
import { NgbCarouselModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicGridModule } from './../../shared/components/basic-grid/basic-grid.module';
import { TranslateModule } from '@ngx-translate/core';
import { routesUserManagment, UserManagmentRoutingModule } from './user-managment-routing.module';
import { RolesComponent } from './roles/roles.component';
import { PermissionGroupsComponent } from './permission-groups/permission-groups.component';
import { UsersComponent } from './users/users.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { TeamsComponent } from './teams/teams.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CardModule } from 'src/app/theme/shared/components';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RolesComponent, PermissionGroupsComponent, UsersComponent, UserPermissionsComponent, TeamsComponent, UserProfileComponent],
  imports: [
    CommonModule,
  
    SharedModule,
    RouterModule.forChild(routesUserManagment),
    TranslateModule.forChild(),
    BasicGridModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    CardModule
  ],
  providers:[TranslateModule]
})
export class UserManagmentModule { }
