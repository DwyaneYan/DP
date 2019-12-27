import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalItemService {

  constructor(
    private http: HttpClient,
  ) { }

  async GetTrialItemByMaterialId(params){

    let api = "http://localhost:60001/api/hangang/materialTrial/trialItemByMaterialId"
    let res = await this.http.get(api, {params})
    .toPromise()
    .catch(err=>{
      console.log(err)
    });
    return res;
  }
  Getmaterial(id){
    let api =`http://localhost:60001/api/hangang/material/${id}/dataExample`;
    let res=this.http.get(api, id).toPromise()
    .catch(err=>{
      console.log(err)
    });
    console.log(res)
  return res
    }
}
