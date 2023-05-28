import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent as DefaultLayout } from './shared/layout/default/default.component';
import { SecurityComponent as SecurityLayout } from './shared/layout/security/security.component';
import { NotFoundLayoutComponent } from './shared/layout/not-found/not-found-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '',
    component: SecurityLayout,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
