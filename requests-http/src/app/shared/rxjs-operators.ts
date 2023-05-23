import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { filter, map, pipe, tap } from "rxjs";

export function filterResponse() {
    return pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpEvent<any>) => (event as HttpResponse<any>).body)
    );
  }

export function uploadProgress<T>(cb: (progress: number) => void){
    return tap((event: HttpEvent<T>) =>{
        if(event.type == HttpEventType.UploadProgress){
            cb(Math.round((event.loaded * 100)/event.total))
        }
    })
}