import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private http: HttpClient,
  ) { }


  async GetTrialItemByMaterialId(params){
    // console.log(params)
    let api = "http://localhost:60001/api/hangang/materialTrial/trialItemByMaterialId"
    let res = await this.http.get(api, {params})
    .toPromise()
    .catch(err=>{
      console.log(err)
    });
    return res;
  }
}
