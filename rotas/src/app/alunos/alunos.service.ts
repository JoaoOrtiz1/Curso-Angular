import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService{

  private alunos: Aluno[] = [
    {id: 1, nome: 'aluno01', email: 'alunos1@alunos.com'},
    {id: 2, nome: 'aluno02', email: 'alunos2@alunos.com'},
    {id: 3, nome: 'aluno03', email: 'alunos3@alunos.com'}
  ]
  getAlunos(){
    return this.alunos;
  }
  getAluno(id: number){
    for(let i = 0; i < this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
