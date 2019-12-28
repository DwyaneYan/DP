import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class DetailsDataService {

  constructor(
    public http: HttpClient
  ) { }

  // 查询实验数据明细
  public async GetTrialDataDetails(params,materialTrial)
  {
    let materialId = materialTrial
    let api =`http://localhost:60001/api/hangang/materialTrial/trialDataDetails/${materialId}`;
    
    let res= await this.http.get(api, {params})
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
    console.log(res);
    return res;  //返回请求到的数据(Promise对象)
  }



}
