import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from "@angular/router";
import {button} from 'src/app/picture'
import{ TrialNameService } from './form-experimental-item/trial-name.service'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient,
    private router: Router,
    private TrialNameService: TrialNameService,
    ) { }
     toVIm = `https://vim.hansteel.cn/view`   //跳转到vim线上，记得加/view
    //toVIm = `http://localhost:4280` //跳转到vim     
    toRuoYi = `http://localhost:81`
    // toRuoYi = `https://auth.hansteel.cn`
  
  //筛选材料
  async GetMater(params?){
      let url ="/api/hangang/material/materials";
      if(params.type && params.type == 'tszf'){
        let res= await this.http.get(url+params.url).toPromise()//材料名称中的特殊字符作为查询参数时要进行url编码
        return res; 
      }else{
        let res= await this.http.get(url,{params:params}).toPromise()
        return res; 
      }
    }
//查询所有厂家
  async GetManufacturers()
  {
    let api = "/api/hangang/manufactory/manufactories";
    let res= await this.http.get(api).toPromise()
    return res;
  }
  //添加材料为推荐材料
  async ADDManufacturers(id)
  {
    let api = `/api/hangang/material/${id}/materialRecommendations`;
    let res = await this.http.post(api,id).toPromise()
    return res;
  }

//查询所有推荐材料
  async showMaterials()
  {
    let api ="/api/hangang/material/materialRecommendations";
    let res= await this.http.get(api).toPromise()
    return res;
  }

  //根据材料id删除推荐材料
  async shanchutj(p)
  {
    let api=`/api/hangang/material/${p}/materialRecommendations`
    let res= await this.http.delete(api).toPromise()
    return res;
  }
//根据材料id查询材料做了哪些实验项目
  async GetTrials(params)
  {
    let api = `/api/hangang/materialTrial/trialItemByMaterialId/${params}`;
    let res = await this.http.get(api)
    .toPromise()
    return res;
  }

//根据材料id查询所有应用案例
  async getCar(p){
    let api=`/api/hangang/materialTrial/applicationCaseByMaterialId/${p}`
    let res= await this.http.get(api)
   .toPromise()
   
  return res;
}

//根据材料id查询静态拉伸数据表
async getStaticTensionDataDetails(p){
  let api=`/api/hangang/materialTrial/staticTensionDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询静态拉伸要求数据
async getStaticTensionDataDetailRequirements(p){
  let api=`/api/hangang/materialTrial/staticTensionDataDetailRequirements/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询静态拉伸数据对
async getStaticTensionDataDetailStressStrains(p){
  let api=`/api/hangang/materialTrial/staticTensionDataDetailStressStrains/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询弯曲数据表
async getBendingDataDetails(p){
  let api=`/api/hangang/materialTrial/bendingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}

//根据材料id查询压缩数据表
async getCompressDataDetails(p){
  let api=`/api/hangang/materialTrial/compressDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询高速拉伸数据表
async getHighSpeedStrechDataDetails(p){
  let api=`/api/hangang/materialTrial/highSpeedStrechDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}


//根据材料id查询低周疲劳数据表
async getLowCycleFatigueDataDetails(p){
  let api=`/api/hangang/materialTrial/lowCycleFatigueDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}

//根据材料id查询高周疲劳数据表
async getHighCycleFatigueDataDetails(p){
  let api=`/api/hangang/materialTrial/highCycleFatigueDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}

//根据材料id查询金相数据表

async getMetallographicDataDetails(p){
  let api=`/api/hangang/materialTrial/metallographicDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询物理性能数据表
async getPhysicalPerformanceDataDetails(p){
  let api=`/api/hangang/materialTrial/physicalPerformanceDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}

//根据材料id查询化学成份数据表
async getChemicalElementDataDetails(p){
  let api=`/api/hangang/materialTrial/chemicalElementDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}

//根据材料id查询禁用物质数据表
async getProhibitedSubstanceDataDetails(p){
  let api=`/api/hangang/materialTrial/prohibitedSubstanceDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询抗凹数据表
async getDentResistanceDataDetails(p){
  let api=`/api/hangang/materialTrial/dentResistanceDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询二次加工脆性数据表
async getSecondaryWorkingEmbrittlementDataDetails(p){
  let api=`/api/hangang/materialTrial/secondaryWorkingEmbrittlementDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询翻遍扣合数据表
async getFlangingClaspDataDetails(p){
  let api=`/api/hangang/materialTrial/flangingClaspDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询氢致延迟开裂数据表
async getHydrogenInducedDelayedFractureDataDetails(p){
  let api=`/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询焊接数据表
async getWeldingDataDetails(p){
  let api=`/api/hangang/materialTrial/weldingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询胶结数据表
async getCementingDataDetails(p){
  let api=`/api/hangang/materialTrial/cementingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装数据表
async getPaintingDataDetails(p){
  let api=`/api/hangang/materialTrial/paintingDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询ｆｌｄ数据表
async getFLDDataDetails(p){
  let api=`/api/hangang/materialTrial/fLDDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询回弹数据表
async getReboundDataDetails(p){
  let api=`/api/hangang/materialTrial/reboundDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询烘烤硬化数据表
async getBakeHardeningDataDetails(p){
  let api=`/api/hangang/materialTrial/bakeHardeningDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询表面性能数据表
async getSurfacePropertyDataDetails(p){
  let api=`/api/hangang/materialTrial/surfacePropertyDataDetails/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询物理性能导热系数数据表
async getThermalConductivitys(p){
  let api=`/api/hangang/materialTrial/physicalPerformanceDataDetailThermalConductivitys/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询物理性能热膨胀系数数据表

async getThermalExpansions(p){
  let api=`/api/hangang/materialTrial/physicalPerformanceDataDetailThermalExpansions/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询表面性能镀层重量数据表
async getSurfacePropertyCoatingWeights(p){
  let api=`/api/hangang/materialTrial/surfacePropertyCoatingWeights/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询表面性能粗造度和峰值密度数据表
async getRoughnessAndPeakDensity(p){
  let api=`/api/hangang/materialTrial/surfacePropertyRoughnessAndPeakDensity/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询表面性能尺寸公差数据表
async getSizeTolerance(p){
  let api=`/api/hangang/materialTrial/surfacePropertySizeTolerance/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询烘烤硬化项目数据表
async getBakeHardeningDataDetailItems(p){
  let api=`/api/hangang/materialTrial/bakeHardeningDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询fld项目数据表
async getFLDDataDetailItems(p){
  let api=`/api/hangang/materialTrial/fLDDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询焊接性能项目数据表
async getWeldingDataDetailItems(p){
  let api=`/api/hangang/materialTrial/weldingDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能-磷化膜试验数据
async getPaintingDataDetailPhosphatingItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailPhosphatingItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能-膜重试验数据
async getPaintingDataDetailMembraneWeightItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailMembraneWeightItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能-P比试验数据
async getPaintingDataDetailPRatioItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailPRatioItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能-电泳漆膜厚度试验数据
async getPaintingDataDetailElectrophoreticItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailElectrophoreticItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
 
 return res;
}
//根据材料id查询涂装性能-电泳漆膜硬度试验数据
async getPaintingDataDetailHardnessItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailHardnessItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能-电泳漆膜粗糙度试验数据
async getPaintingDataDetailRoughnessItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailRoughnessItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能-抗石击性能试验数据
async getPaintingDataDetailHitResistanceItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailHitResistanceItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询涂装性能附着力数据
async getPaintingDataDetailAdhesionItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailAdhesionItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
 
 return res;
}
//根据材料id查询涂装性能耐湿热性能试验数据
async getPaintingDataDetailDampHeatItems(p){
  let api=`/api/hangang/materialTrial/paintingDataDetailDampHeatItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  
 return res;
}
//根据材料id查询回弹性能项目1数据
async getReboundDataDetailItems(p){
  let api=`/api/hangang/materialTrial/reboundDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()
  
 return res;
}
//根据材料id查询回弹性能项目2数据
async getReboundDataDetailItems2(p){
  let api=`/api/hangang/materialTrial/reboundDataDetailItems2/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询回弹性能项目3数据
async getReboundDataDetailItems3(p){
  let api=`/api/hangang/materialTrial/reboundDataDetailItems3/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询二次加工项目数据
async getSecondaryWorkingEmbrittlementDataDetailItems(p){
  let api=`/api/hangang/materialTrial/secondaryWorkingEmbrittlementDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询二次加工项目数据
async getHydrogenInducedDelayedFractureDataDetailItems(p){
  let api=`/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询高速拉伸应力应变数据Extend
async getHighSpeedStrechDataDetailStressStrainExtends(p){
  let api=`/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrainExtends/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询高速拉伸应力应变数据
async getHighSpeedStrechDataDetailStressStrains(p){
  let api=`/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询低周疲劳项目数据
async getLowCycleFatigueDataDetailItems(p){
  let api=`/api/hangang/materialTrial/lowCycleFatigueDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据材料id查询高周疲劳项目数据
async getHighCycleFatigueDataDetailItems(p){
  let api=`/api/hangang/materialTrial/highCycleFatigueDataDetailItems/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据应用案例Id获取某个应用案例
async getApplicationCaseById(p){
  let api=`/api/hangang/materialTrial/${p}/applicationCaseById`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//根据应用案例Id删除某个应用案例
async getApplicationCase(p){
  let api=`/api/hangang/materialTrial/${p}/applicationCase`
  let res= await this.http.delete(api)
  .toPromise()

 return res;
}

  //以下为ry部分接口,获取验证码和登录不要token
//获取验证码
async getCodeImg(){
  let api=`/devhg-api/captchaImage`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}


//登录方法
async login(username,password,code,uuid){
  let api=`/devhg-api/login`
  let data={username,password,code,uuid}
  let res= await this.http.post(api,data)
  .toPromise()

 return res;
}

  //以下需要再请求头中添加token
//获取用户详细信息
async getInfo(){
  let api=`/devhg-api/getInfo`
  let res= await this.http.get(api)
  .toPromise()
 return res;
  }
//   // 查询用户个人信息
// async  getUserProfile() {
//   let api=`/devhg-api/system/user/profile`
//   let res= await this.http.get(api)
//   .toPromise()
//  return res;
// }
// //获取路由，暂不使用
// async getRouters(p){
//   let api=`/devhg-api/getRouters`
//   let res= await this.http.get(api,p)
//   .toPromise()
//  return res;
// }
//退出方法
async logout(){
  let api=`/devhg-api/logout`
  let res= await this.http.post(api,'')
  .toPromise()
 return res;
}

//获取Type12材料卡片名称
async getCardType12(id){
  let api=`/api/hangang/materialTrial/type12CardInfo/${id}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//获取Type15材料卡片名称
async getCardType15(p){
  //查询参数
  let params = {params:p}
  let api=`/api/hangang/materialTrial/type15CardInfo`
  let res= await this.http.get(api,params)
  .toPromise()

 return res;
}
//获取Type24静态拉伸材料卡片名称
async getCardType24S(p){
  let api=`/api/hangang/materialTrial/materialCardStaticTensionInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//获取Type24高速拉伸材料卡片名称
async getCardType24H(p){
  //查询参数
  let api=`/api/hangang/materialTrial/materialCardInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//获取Type39材料卡片名称
async getCardType39(p){
  //查询参数
   let parmas = {params:p}
  let api=`/api/hangang/materialTrial/type39CardInfo`
  let res= await this.http.get(api,parmas)
  .toPromise()

 return res;
}
//获取Type81材料卡片名称
async getCardType81(p){
  let api=`/api/hangang/materialTrial/type81CardInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}
//获取Type100材料卡片名称
async getCardType100(p){
  let api=`/api/hangang/materialTrial/type100CardInfo/${p}`
  let res= await this.http.get(api)
  .toPromise()

 return res;
}


//获取所有材料绑定的零件信息
async getAllPart(){
  let api = `/api/hangang/material/typicalPart`
  let res= await this.http.get(api)
  .toPromise()

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

 return res;
}
// 根据材料id删除材料
async delMaterials(obj){
  let api = `/api/hangang/material`;
  let params = {params:obj}
  let res= await this.http.delete(api,params)
  .toPromise()

 return res;
  }
  

//处理返回时间的方法
handleTime(date){
 return date?date.split(
    "T"
  )[0] : ''
}

//自定义重置路由的方法，传入初始化路由数组，返回根据权限字符处理后的路由数组
  selfReloadRouter(p){
    let allRoutes:any = p
    let length = allRoutes[4].children.length-2;
    let permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
    if(permissions){
      for(let a=0;a<length;a++){
        if(!button(allRoutes[4].children[a].path)){
          delete allRoutes[4].children[a];
        }
        else{    
          let array =[]  //删除子路由数组中的元素
          allRoutes[4].children[a].children.forEach((item,index,arr)=>{
            if(!button(item.permissions)){
              array.push(index)
            }
            else{
              delete item.permissions
            }
          })
          for(let i =0;i<array.length;i++){
            allRoutes[4].children[a].children.splice(array[i]-i,1)
          }
          //设置默认展示图表
          let onePath = allRoutes[4].children[a].children[0]
          if(onePath){
            let defaultPath = {
              path: '',
              redirectTo: onePath.path,
              pathMatch: 'full'
            }
            allRoutes[4].children[a].children.push(defaultPath)
          }
        }    
      }  
      allRoutes[4].children = allRoutes[4].children.filter(function(item) {
        return item != undefined
      });//删除路由中的空元素
      if(!button("viewCar")){
        allRoutes[4].children.splice(length,1)
      }   
    }
    return allRoutes
  }
//更新材料基本信息
async upDateBase(obj){
  let api = `/api/hangang/material/${obj.id}/materialBase`
  let res = await this.http.put(api,obj).toPromise()
 return res
}
//根据材料Id和试验项目id删除材料与试验项目的对应关系
 async deleteMaterialTrial(params){
    let api = `/api/hangang/materialTrial/materialTrial`
    let res = await this.http.delete(api,{params}).toPromise()
    return res
}
// 删除试验项目
 deleteTrial(materialId,name){
  this.GetTrials(materialId).then((res:any) => {
    let data = res.filter(function (item) { return item.name == name }) 
    // console.log(data)
    if (data.length) {
      let obj = {
        materialId,
        trialId: data[0].id
      }
      this.deleteMaterialTrial(obj).then((res: any) => {
        this.GetTrials(materialId).then((res: any) => {
          let trialName = []
          res.forEach((val) => {
            trialName.push(val.name)
          });
          this.TrialNameService.trialName.next(trialName);
          this.router.navigateByUrl(`/display/${materialId}`)
        })
      })
    }
    })

}
 //查询所有典型零部件
 async getTypicalPart(params){
  let api = `/api/hangang/material/theMaterialTypicalPart/${params}`
  let res = await this.http.get(api).toPromise()
  return res
  }
   //查询车型是否已存在
 async viewCar(materialId,vehicleType){
  let api = `/api/hangang/materialTrial/applicationCaseByInput?MaterialId=${materialId}&VehicleType=${vehicleType}`
  let res = await this.http.get(api).toPromise()
  return res
  }
     //添加车型是否已存在
 async addCar(p){
  let api = `/api/hangang/materialTrial/applicationCase`
  let res = await this.http.post(api,p).toPromise()
  return res
  }
  //修改车型
  async updateCar(p){
    let api = `/api/hangang/materialTrial/applicationCase`
    let res = await this.http.put(api,p).toPromise()
    return res
    }
}

