import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { IformCanDeactivate } from './iform-candeactivate'
@Injectable()
export class AlunosDeactivate {
                
        canDeactivate(
            component: IformCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativação');
           // return component.roteChange();
           return component.podeDesativar();

            
    }
}