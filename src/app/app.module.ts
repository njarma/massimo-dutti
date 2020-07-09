import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipsListComponent } from './ships/starships-list/starships-list.component';
import { StarshipComponent } from './ships/starships-list/starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShipsComponent,
    StarshipsListComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
