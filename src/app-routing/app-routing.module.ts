import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { VerifyEmailComponent } from 'src/app/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from 'src/app/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'admin/register', component: RegisterComponent },
  { path: 'admin/forgot-password', component: ForgotPasswordComponent },
  { path: 'admin/verify-email', component: VerifyEmailComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


