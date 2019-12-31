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
    // console.log(params)
    let materialId = params.Materiald
    let api = `http://localhost:60001/api/hangang/materialTrial/trialItemByMaterialId/${materialId}`
    let res = await this.http.get(api)
    .toPromise()
    .catch(err=>{
      console.log(err)
    });
    // console.log(res)
    return res;
  }

}
