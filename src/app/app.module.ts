import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ItemComponent } from './item/item.component';
import { NewUserComponent } from './new-user/new-user.component'; 
import { LoginComponent } from './auth/login/login.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { FilterPipe } from "./home/filter.pipe";
import { UserService } from './home/user.service';
import { AuthService } from './auth/auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';



const COMPONENTS = [
  AppComponent,
  HomeComponent,
  ItemComponent,
  NewUserComponent,
  LoginComponent,
  VerifyEmailComponent,
  ForgotPasswordComponent,
  RegisterComponent,
];


const PIPES = [
  FilterPipe
];

const SERVICES = [
  UserService,
  AuthService
]

const MODULES = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatBadgeModule,
  MatIconModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireDatabaseModule,
  MatRippleModule,
  AngularFireAuthModule,
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
];

@NgModule({
  declarations: [...COMPONENTS,...PIPES,...SERVICES],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { 

}


