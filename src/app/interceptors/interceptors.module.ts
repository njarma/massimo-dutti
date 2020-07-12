import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrlBaseInterceptor } from './api-url-base.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './http-token.interceptor';
import { CachingInterceptor } from './caching.interceptor';
import { RequestCacheService } from '../services/request.cache.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RequestCacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlBaseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    }
  ]
})

export class InterceptorsModule { }
