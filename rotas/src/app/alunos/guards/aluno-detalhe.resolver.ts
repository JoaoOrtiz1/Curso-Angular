import { AlunosService } from './../alunos.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AlunoDetalheResolver{

    constructor(private alunosService: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('AlunoDetalheResolver');
            
            let id = route.params['id'];
            
            return this.alunosService.getAluno(id);
    }
}