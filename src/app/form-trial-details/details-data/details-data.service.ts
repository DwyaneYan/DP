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
  public async GetTrialDataDetails(params)
  {
    let materialId = params
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
    console.log(params)
    let res= await this.http.get(api)
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
    // console.log(res);
    return res;  //返回请求到的数据(Promise对象)
  }



}
