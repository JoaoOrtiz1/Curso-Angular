import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IformCanDeactivate } from '/Users/Phd/Desktop/Angular/rotas/src/app/guards/iform-candeactivate'

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IformCanDeactivate{

aluno: any = {};
inscricao: Subscription;
formMudou: boolean = false;

constructor(
  private route: ActivatedRoute,
  private alunosService: AlunosService,
  private router: Router
){}
  podeDesativar() {
    return this.roteChange();
  }

voltarDetalhes(id: number){
  this.router.navigate(['/alunos', this.aluno.id])
}

ngOnInit(): void {
  this.inscricao = this.route.params.subscribe(
    (params: any)=>{
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
      if(this.aluno === null){
        this.aluno = {};
      }
    }
  );  
}

ngOndestroy(){
  this.inscricao.unsubscribe();
}

onInput(){
  this.formMudou = true;
  console.log('mudou');
}

roteChange(){
  if(this.formMudou){
    confirm("Tem certeza que deseja deixar a pagina?")
  }
  return true;
}


}
