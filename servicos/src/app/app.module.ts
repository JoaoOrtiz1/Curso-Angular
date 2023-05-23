import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoService } from './cursos/cursoService';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { LogServiceService } from './shared/log-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CursoService,
    LogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
