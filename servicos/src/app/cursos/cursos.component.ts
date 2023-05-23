import { Component, OnInit } from '@angular/core';

import { CursoService } from './cursoService';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: string[] = [];
  cursoCriado: string;

  constructor(private cursoService: CursoService){
  
  }

  ngOnInit(){
    this.cursos = this.cursoService.getCurso();
    this.cursoService.emitirCursoCriado.subscribe((curso)=>{
      this.cursoCriado = curso;
    });
  }
}
