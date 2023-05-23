import { NgModule } from "@angular/core";
import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosServiceService } from "./cursos-service.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CursosRoutingModule } from "./cursos.routing.module";
import { AlunosRoutingModule } from "../alunos/alunos.routing.module";
import { AlunosModule } from "../alunos/alunos.module";

@NgModule({
    imports: [CommonModule, CursosRoutingModule],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosServiceService]
})

export class CursosModule { };