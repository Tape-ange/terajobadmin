import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ConfirmPasswordComponent,
    NewPasswordComponent,
    ConfirmMailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class AuthModule { }
