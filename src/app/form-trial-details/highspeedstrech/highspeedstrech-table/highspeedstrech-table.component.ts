import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highspeedstrech-table',
  templateUrl: './highspeedstrech-table.component.html',
  styleUrls: ['./highspeedstrech-table.component.css']
})
export class HighspeedstrechTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{formElongation:''}]
  trialDataDetails=[{}]
  baseInfo
  one=[]
  two=[]
  three=[]
  mater=[]
  table1=["执行标准","试验设备","取样方向",]
  table2=["材料牌号","屈服强度Rp(MPa)","抗拉强度Rm(MPa)","断后伸长率A(％)","弹性模量E(MPa)",]
  table3=["formYieldStrength","formTensileStrength","formModulusOfElasticity","formElongation",]
  table4=["拉伸速率","样件编号","样品厚度t/mm(实测值)","标距段宽度w/mm(实测值)","屈服强度(MPa)","抗拉强度(MPa)","断后伸长率(%)","拉伸速度(m/s)"]
  width=["120px","150px","180px","180px","180px","180px","180px","150px"]
  table5=["testTarget","sampleCode","thickness","gaugeDistance","yieldStrength","tensileStrength","elongation","stretchingSpeed"]
  table6=["standard","equipment","direction"]
    constructor(  private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    console.log(name)
    this.GetBaseInfo(this.materialId)
  }
  public async GetBaseInfo(p){
    let api = "http://localhost:60001/api/hangang/material/materials?Id=";
    await this.http.get(api+p)
    .toPromise()
    .then((res:any)=>{
      this.baseInfo = res.items
    })
    // console.log(this.baseInfo)
    this.mater.push(
      this.baseInfo[0].name,
    )
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
      for(let a=0;a<this.trialDataDetail.length;a++)
{if(this.trialDataDetail[a].formElongation=null){this.one.push(this.trialDataDetail[a])}
  {this.two.push(this.trialDataDetail[a])}}
  for(let a=1;a<this.one.length;a++){
    this.three.push(this.one[a])
  }
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      console.log(this.trialDataDetail)
    })    
  }

}
