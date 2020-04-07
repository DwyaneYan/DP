import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalItemService {

  constructor(
    private http: HttpClient,
  ) { }

  //查询材料做了哪些实验项目
  async GetTrials(params)
  {
    let MaterialId = params
    let api = `http://localhost:60001/api/hangang/materialTrial/trialItemByMaterialId/${MaterialId}`;
    let res = await this.http.get(api)
    .toPromise()
    .catch(err =>{
      console.log(err);
    })
    return res;
  }

}
