import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoEspecComponent } from './curso-espec/curso-espec.component';


const APP_ROUTES: Routes = [
    { path: 'cursos', component:CursosComponent},
    { path: 'curso', component:CursoDetalheComponent},
    { path: 'curso/id/:id', component:CursoEspecComponent},
    { path: 'login', component:LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);