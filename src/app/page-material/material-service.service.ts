import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  constructor(public http: HttpClient) { }

  
  // 查询材料
Getmaterial(Getma){
  let api ="http://localhost:60001/api/hangang/material/materials?Name=";
  this.http.get(api+Getma.name, Getma).subscribe((response) => {
    console.log(response)
  })
  }



}
