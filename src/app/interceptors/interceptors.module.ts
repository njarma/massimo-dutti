import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrlBaseService } from './api-url-base.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenService } from './http-token.service';

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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenService,
      multi: true
    }
  ]
})

export class InterceptorsModule { }
