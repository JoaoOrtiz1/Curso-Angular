import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject, catchError, of, switchMap, take } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from 'src/app/services/curso.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  // json-server --watch db.json
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  cursoSelecionado: Cursos;
  constructor(
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private alertService: AlertModalService
    ) { }

  //cursos: Cursos[];
  cursos$: Observable<Cursos[]>;
  error$ = new Subject<boolean>();
  ngOnInit(): void {
    //this.service.list().subscribe(dados => {this.cursos = dados })
    this.onRefresh();
  }
  
  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error =>{ 
        console.log(error);
        this.error$.next(true);
        return of();
      })
    )
  }
  onEdit(id: number){
    this.router.navigate(['editar', id], { relativeTo: this.route});
  }
  
  onDelete(curso: any){
    this.cursoSelecionado = curso;
    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
    ).subscribe(sucess => {this.onRefresh()},
    error => this.alertService.showAlertDanger('Erro ao remover curso'))
    //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'})
  }

  onConfirmDelete(){
    this.service.remove(this.cursoSelecionado.id).subscribe(
      sucess => {this.onRefresh(), this.onDeclineDelete()},
      error => this.alertService.showAlertDanger('Erro ao remover curso')
    );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }

  
}
