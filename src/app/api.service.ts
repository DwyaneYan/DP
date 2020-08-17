import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient,
    private cookies: CookieService,

    ) { }


//在材料表筛选材料
async GetMater(params){
    let url ="/api/hangang/material/materials";
    let res= await this.http.get(url,{params}).toPromise()
    .catch(err =>{
      console.log(err);
    });
    return res; 
  }
//在厂家表查询所有厂家
  async GetManufacturers()
  {
    let api = "/api/hangang/manufactory/manufactories";
    let res= await this.http.get(api).toPromise().catch(err=>{
      console.log(err);
    });
    return res;
  }
  //根据材料id添加至推荐材料表
  async ADDManufacturers(id)
  {
    let api = `/api/hangang/material/${id}/materialRecommendations`;
    let res= await this.http.post(api,id).toPromise().catch(err=>{
      console.log(err);
    });
    return res;
  }
//在若以登陆后带上token跳到邯钢平台首页，在进入邯钢平台首页时用token获取若以的接口
  // async getInfo(token)
  // {

  //   let api = `http://172.20.10.7:81/dev-api/getInfo`;
  //   let options={headers:new HttpHeaders({
  //         'Authorization': `${token}`
  //       })}
  //   let res= await this.http.get(api,options
  //     ).toPromise().catch(err=>{
  //     console.log(err);
  //   });
  //   return res;
  // }
//查询所有推荐材料
  async showMaterials()
  {
    let api ="/api/hangang/material/materialRecommendations";
    let res= await this.http.get(api).toPromise().catch(err=>{
      console.log(err);
    });
    return res;
  }

  //根据材料id删除推荐材料
  async shanchutj(p)
  {
    let api=`/api/hangang/material/${p}/materialRecommendations`
    let res= await this.http.delete(api,p).toPromise().catch(err=>{
      console.log(err);
    });
    return res;
  }
//根据材料id查询材料做了哪些实验项目
  async GetTrials(params)
  {
    let api = `/api/hangang/materialTrial/trialItemByMaterialId/${params}`;
    let res = await this.http.get(api)
    .toPromise()
    .catch(err =>{
      console.log(err);
    })
    return res;
  }

//根据材料id查询所有应用案例
  async getCar(p){
    let api=`/api/hangang/materialTrial/applicationCaseByMaterialId/${p}`
    let res= await this.http.get(api)
   .toPromise()
   .catch(err =>{
    console.log(err);
  })
  return res;
}

//根据材料id查询静态拉伸数据表
async getStaticTensionDataDetails(p){
  let api=`/api/hangang/materialTrial/staticTensionDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询静态拉伸要求数据
async getStaticTensionDataDetailRequirements(p){
  let api=`/api/hangang/materialTrial/staticTensionDataDetailRequirements/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询静态拉伸数据对
async getStaticTensionDataDetailStressStrains(p){
  let api=`/api/hangang/materialTrial/staticTensionDataDetailStressStrains/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询弯曲数据表
async getBendingDataDetails(p){
  let api=`/api/hangang/materialTrial/bendingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

//根据材料id查询压缩数据表
async getCompressDataDetails(p){
  let api=`/api/hangang/materialTrial/compressDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询高速拉伸数据表
async getHighSpeedStrechDataDetails(p){
  let api=`/api/hangang/materialTrial/highSpeedStrechDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}


//根据材料id查询低周疲劳数据表
async getLowCycleFatigueDataDetails(p){
  let api=`/api/hangang/materialTrial/lowCycleFatigueDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

//根据材料id查询高周疲劳数据表
async getHighCycleFatigueDataDetails(p){
  let api=`/api/hangang/materialTrial/highCycleFatigueDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

//根据材料id查询金相数据表

async getMetallographicDataDetails(p){
  let api=`/api/hangang/materialTrial/metallographicDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询物理性能数据表
async getPhysicalPerformanceDataDetails(p){
  let api=`/api/hangang/materialTrial/physicalPerformanceDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

//根据材料id查询化学成份数据表
async getChemicalElementDataDetails(p){
  let api=`/api/hangang/materialTrial/chemicalElementDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

//根据材料id查询禁用物质数据表
async getProhibitedSubstanceDataDetails(p){
  let api=`/api/hangang/materialTrial/prohibitedSubstanceDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询抗凹数据表
async getDentResistanceDataDetails(p){
  let api=`/api/hangang/materialTrial/dentResistanceDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询二次加工脆性数据表
async getSecondaryWorkingEmbrittlementDataDetails(p){
  let api=`/api/hangang/materialTrial/secondaryWorkingEmbrittlementDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询翻遍扣合数据表
async getFlangingClaspDataDetails(p){
  let api=`/api/hangang/materialTrial/flangingClaspDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询氢致延迟开裂数据表
async getHydrogenInducedDelayedFractureDataDetails(p){
  let api=`/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询焊接数据表
async getWeldingDataDetails(p){
  let api=`/api/hangang/materialTrial/weldingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询胶结数据表
async getCementingDataDetails(p){
  let api=`/api/hangang/materialTrial/cementingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装数据表
async getPaintingDataDetails(p){
  let api=`/api/hangang/materialTrial/paintingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询ｆｌｄ数据表
async getFLDDataDetails(p){
  let api=`/api/hangang/materialTrial/fLDDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询回弹数据表
async getReboundDataDetails(p){
  let api=`/api/hangang/materialTrial/reboundDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询烘烤硬化数据表
async getBakeHardeningDataDetails(p){
  let api=`/api/hangang/materialTrial/bakeHardeningDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询表面性能数据表
async getSurfacePropertyDataDetails(p){
  let api=`/api/hangang/materialTrial/surfacePropertyDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询物理性能导热系数数据表
async getThermalConductivitys(p){
  let api=`/api/hangang/materialTrial/physicalPerformanceDataDetailThermalConductivitys/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询物理性能热膨胀系数数据表

async getThermalExpansions(p){
  let api=`/api/hangang/materialTrial/physicalPerformanceDataDetailThermalExpansions/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询表面性能镀层重量数据表
async getSurfacePropertyCoatingWeights(p){
  let api=`/api/hangang/materialTrial/surfacePropertyCoatingWeights/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询表面性能粗造度和峰值密度数据表
async getRoughnessAndPeakDensity(p){
  let api=`/api/hangang/materialTrial/surfacePropertyRoughnessAndPeakDensity/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询表面性能尺寸公差数据表
async getSizeTolerance(p){
  let api=`/api/hangang/materialTrial/surfacePropertySizeTolerance/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询烘烤硬化项目数据表
async getBakeHardeningDataDetailItems(p){
  let api=`/api/hangang/materialTrial/bakeHardeningDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询fld项目数据表
async getFLDDataDetailItems(p){
  let api=`/api/hangang/materialTrial/fLDDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询焊接性能项目数据表
async getWeldingDataDetailItems(p){
  let api=`/api/hangang/materialTrial/weldingDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-磷化膜试验数据
async getPaintingDataDetailPhosphatingItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailPhosphatingItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-膜重试验数据
async getPaintingDataDetailMembraneWeightItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailMembraneWeightItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-P比试验数据
async getPaintingDataDetailPRatioItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailPRatioItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-电泳漆膜厚度试验数据
async getPaintingDataDetailElectrophoreticItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailElectrophoreticItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-电泳漆膜硬度试验数据
async getPaintingDataDetailHardnessItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailHardnessItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-电泳漆膜粗糙度试验数据
async getPaintingDataDetailRoughnessItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailRoughnessItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能-抗石击性能试验数据
async getPaintingDataDetailHitResistanceItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailHitResistanceItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能附着力数据
async getPaintingDataDetailAdhesionItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailAdhesionItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询涂装性能耐湿热性能试验数据
async getPaintingDataDetailDampHeatItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailDampHeatItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询回弹性能项目1数据
async getReboundDataDetailItems(p){
  let api=`/api/hangang/materialTrial/reboundDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询回弹性能项目2数据
async getReboundDataDetailItems2(p){
  let api=`/api/hangang/materialTrial/reboundDataDetailItems2/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询回弹性能项目3数据
async getReboundDataDetailItems3(p){
  let api=`/api/hangang/materialTrial/reboundDataDetailItems3/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询二次加工项目数据
async getSecondaryWorkingEmbrittlementDataDetailItems(p){
  let api=`/api/hangang/materialTrial/secondaryWorkingEmbrittlementDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询二次加工项目数据
async getHydrogenInducedDelayedFractureDataDetailItems(p){
  let api=`/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询高速拉伸应力应变数据Extend
async getHighSpeedStrechDataDetailStressStrainExtends(p){
  let api=`/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrainExtends/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询高速拉伸应力应变数据
async getHighSpeedStrechDataDetailStressStrains(p){
  let api=`/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询低周疲劳项目数据
async getLowCycleFatigueDataDetailItems(p){
  let api=`/api/hangang/materialTrial/lowCycleFatigueDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询高周疲劳项目数据
async getHighCycleFatigueDataDetailItems(p){
  let api=`/api/hangang/materialTrial/highCycleFatigueDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据应用案例Id获取某个应用案例
async getApplicationCaseById(p){
  let api=`/api/hangang/materialTrial/${p}/applicationCaseById`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据应用案例Id删除某个应用案例
async getApplicationCase(p){
  let api=`/api/hangang/materialTrial/${p}/applicationCase`
  let res= await this.http.delete(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

//获取验证码
async getCodeImg(){
  let api=`/devhg-api/captchaImage`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
Tokenkey="Admin-Token"
getToken(){
  return this.cookies.get(this.Tokenkey)
}
setToken(token){
  return this.cookies.set(this.Tokenkey,token)
}
removeToken(){
  return this.cookies.delete(this.Tokenkey)
}

//登录方法
async login(username,password,code,uuid){
  let api=`/devhg-api/login`
  let data={username,password,code,uuid}
  let res= await this.http.post(api,data)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}

    // httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
    //      //'host':'172.20.10.5:60001'
    //   }),
    //   param: {}  
    // };
//获取用户详细信息
async getInfo(p){
  let api=`/devhg-api/getInfo`
  let res= await this.http.get(api,p)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取路由
async getRouters(p){
  let api=`/devhg-api/getRouters`
  let res= await this.http.get(api,p)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//退出方法
async logout(){
  let api=`/devhg-api/logout`
  let res= await this.http.post(api,{})
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//返回K文件流
// async outPutK(id){
//   let api=`/api/hangang/trialdatadetail/OutputKfile?documentName=${id}`
//   let res= await this.http.get(api)
//   .toPromise()
//   .catch(err =>{
//    console.log(err);
//  })
//  return res;
// }

//获取Type12材料卡片名称
async getCardType12(id){
  let api=`/api/hangang/materialTrial/type12CardInfo/${id}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取Type15材料卡片名称
async getCardType15(p){
  //查询参数
  let parmas = {params:p}
  let api=`/api/hangang/materialTrial/type15CardInfo`
  let res= await this.http.get(api,parmas)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取Type24静态拉伸材料卡片名称
async getCardType24S(p){
  //查询参数
  // let parmas = {params:p}
  let api=`/api/hangang/materialTrial/materialCardStaticTensionInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取Type24高速拉伸材料卡片名称
async getCardType24H(p){
  //查询参数
  // let parmas = {params:p}
  let api=`/api/hangang/materialTrial/materialCardInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取Type39材料卡片名称
async getCardType39(p){
  //查询参数
   let parmas = {params:p}
  let api=`/api/hangang/materialTrial/type39CardInfo`
  let res= await this.http.get(api,p)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取Type81材料卡片名称
async getCardType81(p){
  //查询参数
  //  let parmas = {params:p}
  let api=`/api/hangang/materialTrial/type81CardInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取Type100材料卡片名称
async getCardType100(p){
  //查询参数
  //  let parmas = {params:p}
  let api=`/api/hangang/materialTrial/type100CardInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//请求头
  httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
      })
    };
// 查询用户个人信息,在请求头上要添加token
async  getUserProfile() {
  let api=`/devhg-api/system/user/profile`
  let res= await this.http.get(api,this.httpOptions)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//获取所有零件信息
async getAllPart(){
  let api = `/api/hangang/material/typicalPart`
  let res= await this.http.get(api)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//绑定材料和零件
async bindMater(a,b){
  let api = `/api/hangang/material/partsMaterialId`
  let body = {
    directoryId:a,
    materialId:b
  }
  let res= await this.http.put(api,body)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
//根据材料id查询本条材料绑定的哪个零件
async getPart(materialId){
  let api = `/api/hangang/material/hanGangToVIMOperation/${materialId}`
  let res= await this.http.post(api,{})
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
// 根据材料id删除材料
async delMaterials(materialIds){
  let api = `/api/hangang/material`;
  let params = {params:{ids:materialIds}}
  let res= await this.http.delete(api,params)
  .toPromise()
  .catch(err =>{
   console.log(err);
 })
 return res;
}
}

