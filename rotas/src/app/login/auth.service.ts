import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuth: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome == 'usuario@user.com' && usuario.senha === '123456'){
      this.userAuth = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }else{
      this.userAuth = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  userIsAuth(){
    return this.userAuth
  }
}
