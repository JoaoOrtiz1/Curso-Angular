import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estadosModel';
import { Cargo } from '../models/cargosModel';
import { Tech } from '../models/techsModel';
import { map } from 'rxjs';
import { Cidade } from '../models/cidadesModel';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }


  getEstadosBr(){
    return this.http.get<Estado[]>('assets/data/estados.json');
    //.pipe(map((res: any) => res.json())) NAO UTILIZA MAIS ISSO, GET() JA RETORNA PRONTO
  }

  getCidadesBr(sigla: string){
    return this.http.get<Cidade[]>('assets/data/cidadesEstado.json').pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.sigla == sigla))
    );
  }

  getCargos(){
    return this.http.get<Cargo[]>('assets/data/cargos.json');
  }

  getTech(){
    return this.http.get<Tech[]>('assets/data/techs.json');
  }

  getOpt(){
    return [
      {"valor": "s", "desc": "Sim"},
      {"valor": "n", "desc": "Nao"},
  ]
  }
}
