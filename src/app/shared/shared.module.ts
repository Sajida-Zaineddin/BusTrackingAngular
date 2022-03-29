import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {  ToastrModule, ToastNoAnimation,  ToastNoAnimationModule} from 'ngx-toastr';
import{HttpClientModule}from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
  
  ],
  exports: [
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,

   
  ]
})
export class SharedModule { }
