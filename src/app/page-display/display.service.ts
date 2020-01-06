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
    let api = "http://localhost:60001/api/hangang/materialTrial/trialItemByMaterialId/"
    let res = await this.http.get(api+params.Materiald)
    .toPromise()
    .catch(err=>{
      console.log(err)
    });
    return res;
  }

  Getmaterial(p){
    let api ="http://localhost:60001/api/hangang/material/materials?Id=";
    let res=this.http.get(api+p.id).toPromise()
    .catch(err=>{
      console.log(err)
    });
  return res
    }
  
}
