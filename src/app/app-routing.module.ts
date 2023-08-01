import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',

    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'commercialBo',
    loadChildren: () => import('./admin/components/commercial-bo/commercial-bo.module').then(m => m.CommercialBoModule)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule],
  providers: [

    //TokenInterceptor
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true,
    // }
  ],

})
export class AppRoutingModule { }
