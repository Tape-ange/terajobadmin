import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { LoginComponent } from './components/login/login.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'new-password',
        component: NewPasswordComponent,
      },
      {
        path: 'confirm-mail/:id',
        component: ConfirmMailComponent
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
