import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos/cursoService';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit{
  cursos: string[] = [];
  constructor(private cursosService: CursoService){

  }
  addCurso(curso: string){
    this.cursosService.addCurso(curso);
  }
  ngOnInit(): void {
    this.cursos = this.cursosService.getCurso();
  }
}
