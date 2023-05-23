import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[];
  constructor(private cursosService: CursosService){
    this.nomePortal = 'https://google.com'

    /*for(let i =0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(){

  }
}
