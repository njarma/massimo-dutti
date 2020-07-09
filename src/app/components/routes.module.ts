import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipComponent } from './ships/starships-list/starship/starship.component';
import { StarshipsListComponent } from './ships/starships-list/starships-list.component';

export const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'ships', component: ShipsComponent },
    { path: 'starships', component: StarshipsListComponent },
    { path: 'starship', component: StarshipComponent },

    // Not found
    { path: '**', redirectTo: 'login' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
