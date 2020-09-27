import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialNameService {
  public trialName = new Subject<any>();
  changeEmitted$ = this.trialName.asObservable();
  public carName = new Subject<any>();
  changeCarName = this.carName.asObservable();
  constructor(
  ) {
   }


 
}
