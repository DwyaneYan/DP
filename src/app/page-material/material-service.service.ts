import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MaterialServiceService {

  constructor(public http: HttpClient) { }

  
  // 查询材料
  async GetMaterials(params)
  {
    let api ="http://localhost:60001/api/hangang/material/materials";
    let res= await this.http.get(api, {params})
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
    return res;  //返回请求到的数据(Promise对象)
  }

//查询厂家
  async GetManufacturers()
  {
    let api = "http://localhost:60001/api/hangang/manufactory/manufactories";
    let res= await this.http.get(api).toPromise().catch(err=>{
      console.log(err);
    });
    return res;
  }



}
