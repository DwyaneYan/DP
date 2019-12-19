import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  constructor(public http: HttpClient) { }

  
  // 查询材料
  Getmaterial(params)
  {
    let api ="http://localhost:60001/api/hangang/material/materials";
    this.http.get(api, {params}).subscribe((response) => {
      console.log(response)
    })
  }

  //!!!!无法返回response
  GetManufacturers()
  {
    let api = "http://localhost:60001/api/hangang/manufactory/manufactories";
    let res;
    this.http.get(api).subscribe((response) => {
      res = response;
      console.log(res)
      return response;
    });
  }



}
