import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent {
  cursosMostrar: boolean = false;

  modalCursos(){
    this.cursosMostrar = !this.cursosMostrar;
  }

  constructor(){}
  ngOnInit(){}
}
