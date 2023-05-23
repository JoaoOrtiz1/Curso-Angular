import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{
    return this.verifAccess();
  }

  private verifAccess(){
    if(this.authService.userIsAuth()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad(route: Route) : Observable<boolean> |Promise<boolean> |boolean{
    return this.verifAccess();
  }
}