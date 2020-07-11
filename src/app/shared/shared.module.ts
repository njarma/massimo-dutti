import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    NgxScrollTopModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    NgxScrollTopModule
  ]
})
export class SharedModule { }
