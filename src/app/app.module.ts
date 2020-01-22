import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ItemComponent } from './item/item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewUserComponent } from './new-user/new-user.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from "./home/filter.pipe";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {MatRippleModule} from '@angular/material/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { RegisterComponent } from './admin/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    NewUserComponent,
    FilterPipe,
    LoginComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    RegisterComponent,
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { 

}


