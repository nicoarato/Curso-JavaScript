//Aqui daremos de alta las nuevas rutas

//importar modulos del router de Angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes

import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { VideojuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
//import { ModuleWithProviders } from '@angular/compiler/src/core';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path: '**', component: HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[]= []; //servicio
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //modulo