import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngstyle',
  templateUrl: './diretivas-ngstyle.component.html',
  styleUrls: ['./diretivas-ngstyle.component.scss']
})
export class DiretivasNgstyleComponent {
ativo:boolean = false;
tamanhoFonte:number = 10;

mudarAtivo(){
  this.ativo = !this.ativo;
}

}
