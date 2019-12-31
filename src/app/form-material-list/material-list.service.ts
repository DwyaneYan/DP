import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MaterialListService {



  constructor(public http: HttpClient,

  ) { }

  // 显示全部材料
  async AllMaterials()
  {
    let api ="http://localhost:60001/api/hangang/material/materials";
    let res=await this.http.get(api)
    .toPromise()
    .catch(err =>{
      console.log(err);
    });

 //返回请求到的数据(Promise对象)
 return res
  }

}
