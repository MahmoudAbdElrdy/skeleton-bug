import {Injectable} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}


@Injectable()
export class NavigationItem {
  public get() {
    return this.NavigationItems;
  }

  constructor(public translateService:TranslateService){ }
   NavigationItems = [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'feather icon-align-left',
      children: [
        {
          id: 'dashboard',
          title: this.translateService.instant('screen.dashboard'),
          type: 'collapse',
          icon: 'feather icon-home',
          children: [
            {
              id: 'administration',
              title: this.translateService.instant('Dashboard.administration'),
              type: 'item',
              url: '/admin/dashboard/administration',
              breadcrumbs: false
            },
            {
              id: 'sale',
              title:this.translateService.instant('Dashboard.sales'),
              type: 'item',
              url: '/admin/dashboard/sales'
            }
          ]
        },
        {
          id: 'users',
          title:  this.translateService.instant('screen.userManagment'),
          type: 'collapse',
          icon: 'feather icon-users',
          children: [
            {
              id: 'roles',
              title: this.translateService.instant('userManagment.roles'),
              type: 'item',
              url: '/admin/user-managment/roles',
              breadcrumbs: false
            },
            {
              id: 'permissionGroups',
              title:  this.translateService.instant('userManagment.permissionGroups'),
              type: 'item',
              url: '/admin/user-managment/permission-groups'
            },
            {
              id: 'users ',
              title: this.translateService.instant('userManagment.users'),
              type: 'item',
              url: '/admin/user-managment/users'
            },
            {
              id: 'userPermissions ',
              title: this.translateService.instant('userManagment.userPermissions'),
              type: 'item',
              url: '/admin/user-managment/user-permissions'
            }
            ,
            {
              id: 'teams ',
              title: this.translateService.instant('userManagment.teams'),
              type: 'item',
              url: '/admin/user-managment/teams'
            }
          ]
        },
        {
          id: 'administration',
          title: this.translateService.instant('screen.administration'),
          type: 'collapse',
          icon: 'feather icon-layers',
          children: [
            {
              id: 'variables',
              title: this.translateService.instant('Administration.variables'),
              type: 'item',
              url: '/admin/administration/variables'
            },
            {
              id: 'branches/offices',
              title: this.translateService.instant('Administration.branches/offices'),
              type: 'item',
              url: '/admin/administration/branches'
            },
            {
              id: 'locations',
              title:this.translateService.instant('Administration.locations'),
              type: 'item',
              url: '/admin/administration/locations'
            },
            {
              id: 'prodcuts',
              title: this.translateService.instant('Administration.products'),
              type: 'item',
              url: '/admin/administration/products'
            }
          ]
        },
        {
          id: 'sales',
          title: this.translateService.instant('screen.sales'),
          type: 'collapse',
          icon: 'feather icon-grid',
          children: [
            {
              id: 'processes',
              title: this.translateService.instant('Sales.processes'),
              type: 'collapse',
              children: [
                {
                  id: 'customers ',
                  title: this.translateService.instant('Sales.customers'),
                  type: 'item',
                  url: '/admin/sales/customers',
                  external: true
                }
              ]
            },
            {
              id: 'reports',
              title: this.translateService.instant('Sales.reports'),
              type: 'item',
              url: '/admin/sales/reports',
              external: true
            },
           
          ]
        },
        {
          id: 'opportunities',
          title: this.translateService.instant('screen.opportunities'),
          type: 'item',
          url: '/opportunities',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
      ]
    }
  ];
}
