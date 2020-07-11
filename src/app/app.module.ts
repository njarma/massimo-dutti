import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './components/routes.module';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { AuthGuard } from './guards/auth.guard';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InterceptorsModule
  ],
  providers: [AuthGuard, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
