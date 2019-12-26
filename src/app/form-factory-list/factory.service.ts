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
Addmanufactory(Addmanufac) {   
    let api = "http://localhost:60001/api/hangang/manufactory/manufactory"
    this.http.post( api, Addmanufac).subscribe((response) => {
      console.log(response);
    })
}
Updatefactory(Updatefac){
  let api = "http://localhost:60001/api/hangang/manufactory/manufactory"
  this.http.put(api, Updatefac).subscribe((response) => {
    console.log(response)
  })
}
Deletemanufactory(Deletemanufac) {
  let id=Deletemanufac.id
  let api = `http://localhost:60001/api/hangang/manufactory/${id}`
  this.http.delete( api, Deletemanufac).subscribe((response) => {
    console.log(response);
  })
}
}