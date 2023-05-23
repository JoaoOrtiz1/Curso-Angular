import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { Estado } from '../shared/models/estadosModel';
import { Cargo } from '../shared/models/cargosModel';
import { Tech } from '../shared/models/techsModel';
import { FormValidations } from '../shared/services/form-validations';
import { VerificaEmailService } from '../shared/services/verifica-email';
import { empty } from 'rxjs';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidadesModel';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  
  //formulario: FormGroup;
  estados: Estado[];
  cargos: Cargo[];
  techs: Tech[];
  newsOpt: any[];
  frames: any[];
  cidades: string[];
  framework = ['Angular', 'React', 'Vue', 'Sencha']
  @Input() nomeEstado = 'Acre';
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private cepService: ConsultaCepService,
    private dropdownService: DropdownService,
    private verificaEmail: VerificaEmailService) { 
      super();
    }


  override ngOnInit(): void {
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/
    
   
    this.estadosBr();
    this.cargosDev();
    this.setTech();
    this.newsOpt = this.dropdownService.getOpt();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, [Validators.required,FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tech: [null],
      news: ['s'],
      termos: [null],
      frameworks: this.buildFrameworks()
    });
    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});

      this.formulario.get('endereco.estado').valueChanges.subscribe(valor => {
        this.cidadesBr(this.formulario.get('endereco.estado').value)
      });
    
  }


  buildFrameworks(){
    const values = this.framework.map(v => new FormControl(false));
    return this.formBuilder.array(values);
  }
  setCargo() {
    const cargo = { nome: "Dev", nivel: "Pleno", desc: "DevPl" };
    this.formulario.get('cargo').setValue(cargo);
  }

  setTech() {
    this.dropdownService.getTech()
      .subscribe(resp => { this.techs = resp });
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmail.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

  getFrameworksControls() {
    return this.formulario.get('frameworks') ? (<FormArray>this.formulario.get('frameworks')).controls : null;
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nivel === obj2.nivel) : obj1 && obj2;
  }

 

  estadosBr() {
    this.dropdownService.getEstadosBr()
      .subscribe(resp => { this.estados = resp });
  }

  cidadesBr(nome: string) {
    this.dropdownService.getCidadesBr(nome).subscribe(resp => {
      this.cidades = resp[0].cidades;
    });
  }

  cargosDev() {
    this.dropdownService.getCargos()
      .subscribe(resp => { this.cargos = resp }) // TIPAR
  }

  

  override submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.framework[i] : null)
      .filter(v => v !== null)
    });

    
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map(res => res))
        .subscribe(dados => {
          //reset form
          console.log(dados);
          this.formulario.reset();
        }, (error: any) => { alert('erro') });
  
  }

  

  
  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados) {
    // this.formulario.setValue({});
    this.cidadesBr(dados.uf);
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
    this.cidadesBr(dados.uf);


    // console.log(form);
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
