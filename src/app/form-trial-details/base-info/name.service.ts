import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  public name = new Subject<any>(); //牌号
  changeName$ = this.name.asObservable();
  constructor() { }
}
