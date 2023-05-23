import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from './cursos-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  pagina: number;
  cursos: any[];
  inscricao: Subscription;
  constructor(
    private cursosService: CursosServiceService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  proxPag(){
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}})
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams:any)=>{
      this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
