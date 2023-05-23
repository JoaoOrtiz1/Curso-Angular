import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://google.com';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeCurso: string = 'angular'
  
  
  getValor() {
    return 1;
  }

  cursoAngular: boolean = true;
  imageUrl: string = 'https://picsum.photos/200/300';

  getCurtirCurso() {
    return true;
  }

  buttonClicked() {
    alert('clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  onKeyEnter(evento) {
    this.valorSalvo = evento;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {

  }

  ngOnInit() {

  }

  onMudouValor(e) {
    console.log('Teste', e);
  }
}
