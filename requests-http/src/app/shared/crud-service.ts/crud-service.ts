import { HttpClient } from "@angular/common/http";
import { delay, of, take } from "rxjs";

export class CrudServiceTsComponent<T> {
    constructor(
        protected http: HttpClient,
        private API_URL: string
    ){}

    list(){
        return this.http.get<T[]>(this.API_URL)
        .pipe(
          delay(2000)
        )
      }
    API<T>(API: any) {
        throw new Error("Method not implemented.");
    }
  
      loadById(id: number) {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
      }
  
    create(record: T){
      return this.http.post(this.API_URL, record).pipe(take(1)); // take 1 encerra o observable
    }
  
    update(record: T){
      return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1))
    }
  
    save(record: any) {
      if (record.nome && record.nome.length >= 3) {
        if (record.id) {
          return this.update(record);
        } else {
          return this.create(record);
        }
      } else {
        return of({ error: 'O nome do record deve ter mais de 3 caracteres' });
      }
    }
  
    remove(id: number){
      return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
    }
}
