import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CursoService } from 'src/app/services/curso.service';
import { Cursos } from '../../models/cursos'
@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard {
  constructor(private service: CursoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cursos> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({
      nome: '',
      id: 0
    });
  }
}
