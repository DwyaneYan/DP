import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-tension-table',
  templateUrl: './static-tension-table.component.html',
  styleUrls: ['./static-tension-table.component.css']
})
export class StaticTensionTableComponent implements OnInit {

  public materialId

  //存放查到的静态拉伸详情
  public trialDataDetail = [{}] 
  visible = false;

  //添加数据表单
  public postParams = {
    materialTrialDataId:'',
    standard:'',
    serialNumber:0,
    sampleCode:'',
    length:0,
    width:0,
    thickness:0,
    diameter:0,
    gaugeDistance:0,
    nonProportionalExtendRatio:0,
    yieldStrength:0,
    tensileStrength:0,
    strainHardening:0,
    elongation:0,
    plasticStrainRatio:0,
    modulusOfElasticity:0,
    poissonRatio:0,
    maximumForce:0,
  }
table1=['执行标准','试验设备','标距(mm)']
table2=['样件编号','方向','试样厚度a(mm)','屈服强度Rp(MPa)','抗拉强度Rm(MPa)','应变硬化指数(n)','断后伸长率A(％)','塑性应变比γ(%)','弹性模量E(MPa)','泊松比μ','最大力Fm(kN)','烘烤硬化值(BH)','180°弯曲试验(弯曲压头直径D)','V型冲击试验温度(℃)','V型冲击试验吸收能量(KV2/J)']
table3=['130px','130px','130px','180px','180px','180px','180px','180px','180px','100px','180px','180px','180px','180px','180px']
table4=['sampleCode','direction','thickness','yieldStrength','tensileStrength','strainHardening','elongation','plasticStrainRatio','modulusOfElasticity','poissonRatio','maximumForce','BHValue','indenterDiameter','VImpactTemperature','VImpactEnergy']
table5=["standard","equipment","gaugeDistance"]
  //抽屉
  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
  
  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
      // console.log(this.materialId)

    this.GetTrialDataDetails()
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {    
    this.trialDataDetail = res
    // console.log(this.trialDataDetail)
    }) 
  }

  materialTrialId
  materialTrialDataId
  materialTrialDataDetailId
  public async PostTrialDataDetails(){
    
    //#region 得到materialTrialDataId: materialId+TrialId-->materialTrialId-->materialDataId    
    
    ////materialId+TrialId-->materialTrialId
    let paramsMaterialTrial={
      materialId:this.materialId,
      trialId:"fa3ea0e2-dcb9-47c8-ad60-e004f019963d"
    }
    let apiMaterialTrial = "http://localhost:60001/api/hangang/materialTrial/materialTrial"
    await this.http.post(apiMaterialTrial,paramsMaterialTrial)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialId = res
    })
    console.log("materialTrialId:  "+this.materialTrialId)

    ////materialId+TrialId-->materialTrialId
    let paramsMaterialTrialData={
      materialTrialId: this.materialTrialId,
    }
    let apiMaterialTrialData= "http://localhost:60001/api/hangang/materialTrialData/materialTrialData"
    await this.http.post(apiMaterialTrialData,paramsMaterialTrialData)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialDataId = res
    })
    console.log("materialTrialDataId:  "+this.materialTrialDataId)
    this.postParams.materialTrialDataId = this.materialTrialDataId;  //得到materialTrialDataId
    //#endregion
    console.log(this.postParams)

    let params = {
      materialTrialDataId:this.postParams.materialTrialDataId,
      standard:this.postParams.standard,
      serialNumber: Number(this.postParams.serialNumber),
      sampleCode:this.postParams.sampleCode,
      length:Number(this.postParams.length),
      width:Number(this.postParams.width),
      thickness:Number(this.postParams.thickness),
      diameter:Number(this.postParams.diameter),
      gaugeDistance:Number(this.postParams.gaugeDistance),
      nonProportionalExtendRatio:Number(this.postParams.nonProportionalExtendRatio),
      yieldStrength:Number(this.postParams.yieldStrength),
      tensileStrength:Number(this.postParams.tensileStrength),
      strainHardening:Number(this.postParams.strainHardening),
      elongation:Number(this.postParams.elongation),
      plasticStrainRatio:Number(this.postParams.plasticStrainRatio),
      modulusOfElasticity:Number(this.postParams.modulusOfElasticity),
      poissonRatio:Number(this.postParams.poissonRatio),
      maximumForce:Number(this.postParams.maximumForce),
    } 


    let api = "http://localhost:60001/api/hangang/staticTensionDataDetail/staticTensionDataDetail"
    await this.http.post(api, params)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialDataDetailId = res
    })

    console.log(this.materialTrialDataDetailId)
  }
  

}
