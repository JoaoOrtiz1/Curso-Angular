import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinct, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit{
  
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>
  total: number;
  readonly fields = 'name,homepage,version';

  queryField = new FormControl();
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => this.http.get(this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.fields 
        }
      })),

      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    )
  }

  onSearch(){
    let value = this.queryField.value;
    const params = {
      search: value,
      fields: this.fields
    }

    if(value && (value = value.trim()) != ''){
      value = value.trim();
      console.log(this.queryField.value);
    this.results$ = this.http.get(this.SEARCH_URL, { params })
    .pipe(
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    )
    }
  }

}
