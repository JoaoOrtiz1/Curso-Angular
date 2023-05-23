import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-poc-async',
  templateUrl: './poc-async.component.html'
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$: Observable<any>;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.valor$ = this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }

}