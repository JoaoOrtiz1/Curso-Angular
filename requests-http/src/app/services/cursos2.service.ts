import { Injectable } from '@angular/core';
import { CrudServiceTsComponent } from '../shared/crud-service.ts/crud-service';
import { Cursos } from '../models/cursos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudServiceTsComponent<Cursos>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }
}
