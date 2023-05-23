import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { CursosComponent } from './cursos/cursos.component'
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component'
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
import { AuthGuardService } from './guards/auth.guard.guard';
import { CursosGuard } from './guards/cursos-guard';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

const appRotes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    { path:'', redirectTo:'/home', pathMatch: 'full'},
    {
      path: 'alunos',
      loadChildren: () => import('./alunos/alunos.module').then((m) => m.AlunosModule),
      canActivate: [AuthGuardService],
      canLoad:[AuthGuardService]
    },
    { path: 'login', component: LoginComponent},
    { path: 'cursos', component: CursosComponent, 
      canActivate: [AuthGuardService], 
      canActivateChild:[CursosGuard],
      canLoad:[AuthGuardService]},
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent, 
      canActivate: [AuthGuardService],
      canLoad:[AuthGuardService]},
    { path: '**', component: PaginaNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRotes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
