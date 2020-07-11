import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipComponent } from './ships/starships-list/starship/starship.component';
import { StarshipsListComponent } from './ships/starships-list/starships-list.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../guards/auth.guard';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { PlanetComponent } from './planets/planets-list/planet/planet.component';

export const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'ships', component: ShipsComponent, canActivate: [AuthGuard] },
    { path: 'planets', component: PlanetsComponent },

    // Not found
    { path: '**', redirectTo: 'login' }

];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ShipsComponent,
        StarshipsListComponent,
        StarshipComponent,
        PlanetsComponent,
        PlanetsListComponent,
        PlanetComponent
    ],
    entryComponents: [
        StarshipComponent,
        PlanetComponent
    ]
})

export class AppRoutingModule {}
