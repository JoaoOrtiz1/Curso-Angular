import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html'
})
export  abstract class BaseFormComponent implements OnInit{
  formulario: FormGroup;
  constructor(){ }
  ngOnInit() {}


  abstract submit();
  
  onSubmit(){
    if(this.formulario.valid){
       this.submit();
    }else {
      console.log('invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((campo) => {

      const controle = formGroup.get(campo);
      controle.markAsTouched();
      controle.markAsDirty();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    })
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
  
  
  

}
