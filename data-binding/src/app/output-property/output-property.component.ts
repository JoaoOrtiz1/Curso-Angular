import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit{
  
  @Output() mudouValor:any = new EventEmitter();

  @Input() valor:number = 0;

  @ViewChild('campoInput') valorInput: HTMLElement;

  onMudouValor(e){
    console.log(e);
  }

  add(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
    console.log(this.valorInput)
  }

  remove(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor(){

  }
  ngOnInit(){
    
  }
}
