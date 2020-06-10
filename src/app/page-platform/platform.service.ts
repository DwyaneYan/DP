import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(public http: HttpClient,
    
    ) { }

  // async GetMater(params)
  // {
  //   let api ="http://localhost:60001/api/hangang/material/materials";
  //   let res= await this.http.get(api, {params})
  //   .toPromise()
  //   .catch(err =>{
  //     console.log(err);
  //   });
  //   return res;  //返回请求到的数据(Promise对象)
  // }
  // async GetManufacturers()
  // {
  //   let api = "http://localhost:60001/api/hangang/manufactory/manufactories";
  //   let res= await this.http.get(api).toPromise().catch(err=>{
  //     console.log(err);
  //   });
  //   return res;
  // }

  // async ADDManufacturers(id)
  // {
  //   let api = `http://localhost:60001/api/hangang/material/${id}/materialRecommendations`;
  //   let res= await this.http.post(api,id).toPromise().catch(err=>{
  //     console.log(err);
  //   });
  //   return res;
  // }

  // async getInfo(p)
  // {

  //   let api = `http://172.20.10.7:81/dev-api/getInfo`;
  //   let options={headers:new HttpHeaders({
  //         'Authorization': `${p}`
  //       })}
  //   let res= await this.http.get(api,options
  //     ).toPromise().catch(err=>{
  //     console.log(err);
  //   });
  //   return res;
  // }
  // async showMaterials()
  // {
  //   let api ="http://localhost:60001/api/hangang/material/materialRecommendations";
  //   let res= await this.http.get(api).toPromise().catch(err=>{
  //     console.log(err);
  //   });
  //   return res;
  // }
  // async shanchutj(p)
  // {
  //   let api=`http://localhost:60001/api/hangang/material/${p}/materialRecommendations`
  //   let res= await this.http.delete(api,p).toPromise().catch(err=>{
  //     console.log(err);
  //   });
  //   return res;
  // }
}
