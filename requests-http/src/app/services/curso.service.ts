import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';
import { environment } from 'src/environment/environment';
import { delay, of, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly API = `${environment.API}cursos`
  constructor(
    private http: HttpClient,
    ){ }
  
    list(){
      return this.http.get<Cursos[]>(this.API)
      .pipe(
        delay(2000)
      )
    }

    loadById(id: number) {
      return this.http.get<Cursos>(`${this.API}/${id}`).pipe(take(1));
    }

  create(curso: any){
    return this.http.post(this.API, curso).pipe(take(1)); // take 1 encerra o observable
  }

  update(curso: any){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1))
  }

  save(curso: any) {
    if (curso.nome && curso.nome.length >= 3) {
      if (curso.id) {
        return this.update(curso);
      } else {
        return this.create(curso);
      }
    } else {
      return of({ error: 'O nome do curso deve ter mais de 3 caracteres' });
    }
  }

  remove(id: number){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
