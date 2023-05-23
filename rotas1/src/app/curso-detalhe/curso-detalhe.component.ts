import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent {

  idBusca1: string;

  cursoExists: boolean = false;
  cursos: any = [{
    titulo: 'java',
    description: 'lorem teste ipsum asjehd asjwejjjj asssad sd d ewe ga awww',
    dificult: 'easy',
    certificate: 'No'

  }]
  notFound: string;


  onSearch(id){
    if((id+1) <= this.cursos.length){
      this.cursoExists = true;
    }else{
      this.cursoExists = false;
    }
  }

}
