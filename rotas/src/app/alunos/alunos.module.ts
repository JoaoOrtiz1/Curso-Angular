import { NgModule } from  '@angular/core'

import { AlunosComponent } from './alunos.component'
import { CommonModule } from '@angular/common'
import { AlunosRoutingModule } from './alunos.routing.module'
import { AlunosService } from './alunos.service'
import { FormsModule } from '@angular/forms'
import { AlunoFormComponent } from './aluno-form/aluno-form.component'
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component'
import { AlunosDeactivate } from '../guards/alunos-deactivate'

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [AlunosComponent],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [AlunosService, 
    AlunosDeactivate]
})

export class AlunosModule{}