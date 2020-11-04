import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaterialsContrastService {

  constructor(public http: HttpClient) { }
  //静态拉伸对比
  async GetMaterials(array){
    let p = {ids:array}
    let api = "/api/hangang/contrast/GetStaticTensionDataDetailsNum";
    let res= await this.http.get(api,{params:p}).toPromise()
    return res;    //res是一个promise对象,如果不.toPromise()就是一个可观察对象
  }

  async getMaterialsByIds(params){
    let p = {ids:params}
    let api ="/api/hangang/material/materialsByIds";
    let res= await this.http.get(api,{params:p}).toPromise()
    return res;  //返回请求到的数据(Promise对象)
  }

  // 低周疲劳对比
  async LowCycleFatigue(array){
    let p = {ids:array}
    let api = '/api/hangang/contrast/LowCycleFatigueDataDetailItemsNum'
    let res= await this.http.get(api,{params:p}).toPromise()
    return res;    
  }

//化学成分对比
async ChemicalElement(array){
  let api = "/api/hangang/contrast/ChemicalElementDataDetailsNum";
  let p = {ids:array}
  let res= await this.http.get(api,{params:p}).toPromise()
  return res;    
}
}
