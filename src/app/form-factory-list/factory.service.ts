import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class FactoryService {
  
  
  
    constructor(public http: HttpClient
    ) { }
    async Allfactorys()
  {
    let api ="http://localhost:60001/api/hangang/manufactory/manufactories";
    let res=await this.http.get(api)
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
console.log(res)
return res
  }
}