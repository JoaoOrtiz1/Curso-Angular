import { Injectable, EventEmitter } from '@angular/core'

import { LogServiceService } from '../shared/log-service.service';

@Injectable()
export class CursoService{

    emitirCursoCriado  = new EventEmitter<string>();

    private cursos: string[] =  ['Angular 2', 'JS', 'TypeScript'];
    getCurso(){
        this.logService.consoleLog('obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }

    constructor(private logService: LogServiceService){
        console.log('cursos')
    }
}