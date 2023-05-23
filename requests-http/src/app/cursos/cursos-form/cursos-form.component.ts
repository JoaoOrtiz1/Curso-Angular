import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core'
import { CursoService } from 'src/app/services/curso.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {
  
  form: FormGroup;
  submited: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: CursoService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    /*
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.service.loadById(id)))
      .subscribe((curso) => this.updateForm(curso));

    */

    
    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(24)]]
    })
  }

  

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {

    this.service.save(this.form.value).subscribe(
      sucess => { this.modal.showAlertSuccess('Sucesso');
      setTimeout(() => {
        this.location.back();
      }, 1000);},
      error => {this.modal.showAlertDanger('Erro')
      setTimeout(() => {
        this.location.back();
      }, 1000);}
    );

    this.submited = true;
    console.log(this.form.value)
    
      
      
  }

  onCancel() {
    console.log('cancel work')
  }
}
