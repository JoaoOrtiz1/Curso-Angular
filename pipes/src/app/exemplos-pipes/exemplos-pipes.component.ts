import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  book: any ={
    title: 'Data structures with JS',
    rating: 4.562352,
    pages: 314,
    price: 44.99,
    release: new Date(2016, 5, 23), // index do mes comeca em 0, 5 = 6-> junho
    url: 'https://google.com'
  };

  livros: string[] = ['Java', 'Angular 2'];
  filtro: string = '';

  obterCursos(){
    if(this.livros.length === 0 ||  this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    
    return this.livros.filter((v)=>{
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ){
        return true;
      }
      return false;
  });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('Valor assincrono'), 2000);
  });

}
