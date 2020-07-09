import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './components/routes.module';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
