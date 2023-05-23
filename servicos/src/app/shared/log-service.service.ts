import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  consoleLog(msg: string){
    console.log(msg);
}

  constructor() { }
}
