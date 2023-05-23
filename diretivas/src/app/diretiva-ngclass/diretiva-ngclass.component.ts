import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent {
meuFavorito: boolean = false;
faCheckCircle = faCheckCircle;
iconBell:any = ['fas', 'bell'];

onClick(){
  this.meuFavorito = !this.meuFavorito
}
}
