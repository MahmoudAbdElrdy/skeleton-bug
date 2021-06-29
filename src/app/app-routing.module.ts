import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path:'index', loadChildren: ()=> import('./index/index.module').then(module=> module.IndexModule)
  },
  {
    path:'admin',
    loadChildren: ()=> import('./admin/admin.module').then(module=> module.AdminModule)
  },

];

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full'},
//   { path: '', component: AdminComponent,
//     children: 
//     [
//       {
//         path:'admin',
//         loadChildren: ()=> import('./admin/admin.module').then(module=> module.AdminModule)
//       },
//       {
//         path: 'sample-page',
//         loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
