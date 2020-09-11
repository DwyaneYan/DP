import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaterialsContrastService {

  constructor(public http: HttpClient) { }
  //静态拉伸对比
  async GetMaterials(array)
  {
      let ids = {ids:array}
      let api = "/api/hangang/contrast/GetStaticTensionDataDetailsNum";
    let res= await this.http.get(api,{params:ids}).toPromise().catch(err=>{
      console.log(err);        
    });

    return res;    //res是一个promise对象
  }

  async GetMaterialss(params?)
  {
    let api ="/api/hangang/material/materials";
    let res= await this.http.get(api,{params:params})
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
    return res;  //返回请求到的数据(Promise对象)
  }
   async getMaterialsByIds(params)
  {
    let ids = {ids:params}
    let api ="/api/hangang/material/materialsByIds";
    let res= await this.http.get(api,{params:ids})
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
    return res;  //返回请求到的数据(Promise对象)
  }
  async GetManufacturers()
  {
    let api = "/api/hangang/manufactory/manufactories";
    let res= await this.http.get(api).toPromise().catch(err=>{
      console.log(err);
    });
    return res;
  }

  // async GetMater(params)
  // {
  //   let api ="/api/hangang/material/materials";
  //   let res= await this.http.get(api, {params})
  //   .toPromise()
  //   .catch(err =>{
  //     console.log(err);
  //   });
  //   return res;  //返回请求到的数据(Promise对象)
  // }
  // 低周疲劳对比
  async LowCycleFatigue(array)
  {
    if(array.length>1){
      var api
      api = "/api/hangang/contrast/LowCycleFatigueDataDetailItemsNum?ids=";
    api +=array[0];
    for(var j=1;j<array.length;j++){   
    api+="&ids="+array[j]
    }
    let res= await this.http.get(api).toPromise().catch(err=>{
      console.log(err);        
    });
    // console.log(api) ;
    console.log(res) 
    return res;    
  }

  else {
  let api = "/api/hangang/contrast/LowCycleFatigueDataDetailItemsNum?ids=";
  let res= await this.http.get(api+array[0]).toPromise().catch(err=>{
    console.log(err);
  });
  return res;
}

}
//化学成分对比
async ChemicalElement(array)
{
  if(array.length>1){
    var api
    api = "/api/hangang/contrast/ChemicalElementDataDetailsNum?ids=";
  api +=array[0];
  for(var j=1;j<array.length;j++){   
  api+="&ids="+array[j]
  }
  let res= await this.http.get(api).toPromise().catch(err=>{
    console.log(err);        
  });
  // console.log(api) ;
  console.log(res) 
  return res;    
}

else {
let api = "/api/hangang/contrast/ChemicalElementDataDetailsNum?ids=";
let res= await this.http.get(api+array[0]).toPromise().catch(err=>{
  console.log(err);
});
return res;
}

}
}
