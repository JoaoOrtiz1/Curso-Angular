import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit{
  cursos = ['Angular2', 'NodeJs', 'JavaScript'];
  
  constructor(){}
  ngOnInit(): void {
  }
}
