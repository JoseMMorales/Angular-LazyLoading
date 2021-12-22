import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
