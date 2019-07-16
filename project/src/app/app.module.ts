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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    NewUserComponent
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
  MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}


