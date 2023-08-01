import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
      }, {
        path: 'dashboard',
        loadChildren: () => import('./components/dashbord/dashbord.module').then(m => m.DashbordModule)
      },
      {
        path: 'tender',
        loadChildren: () => import('./components/tenders/tenders.module').then(m => m.TendersModule)
      },
      {
        path: 'backOffice',
        loadChildren: () => import('./components/commercial-bo/commercial-bo.module').then(m => m.CommercialBoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
