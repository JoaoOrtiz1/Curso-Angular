import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosServiceService } from './cursos/cursos-service.service';
import { CursosModule } from './cursos/cursos.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './guards/auth.guard.guard';
import { CursosGuard } from './guards/cursos-guard';
import { AlunosGuard } from './guards/alunos-guard';
import { AlunosDeactivate } from './guards/alunos-deactivate';
import { AlunoDetalheResolver } from './alunos/guards/aluno-detalhe.resolver';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    RouterModule,
    AlunosModule,
    FormsModule
    //routing
  ],
  providers: [
    CursosServiceService, 
    AuthService, 
    AuthGuardService,
    CursosGuard,
    AlunosGuard,
    AlunoDetalheResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
