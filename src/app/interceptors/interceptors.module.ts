import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrlBaseService } from './api-url-base.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlBaseService,
      multi: true
    }
  ]
})

export class InterceptorsModule { }
