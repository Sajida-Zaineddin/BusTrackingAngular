import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
