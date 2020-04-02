import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highcyclefatigue-table',
  templateUrl: './highcyclefatigue-table.component.html',
  styleUrls: ['./highcyclefatigue-table.component.css']
})
export class HighcyclefatigueTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  baseInfo=[]
  mater=[]
  trialDataDetails=[{}]
  table=[{table:"table1",
  one:["执行标准","试验设备","表面质量（特别差的需专门注明）","循环应力比","是否使用引伸计，引伸计规格(mm)",],
key:["standard","equipment","surfaceQuality","cyclicStressRatio","extensometerGaugeDistance"]},
    {table:"table2",
  one:["公式","a","b","相关系数","疲劳极限/MPa","标准偏差/MPa",],
  width:["180px","100px","100px","100px","150px","150px"],
key:["formula","SNAParameter","SNBParameter","SNRelatedParameter","fatigueLimitStrength","standardDeviation"]},
{ table:"table3",
one:["材料牌号","屈服强度Rp(MPa)","抗拉强度Rm(MPa)","断后伸长率A(％)"],
key:["code","formYieldStrength","formTensileStrength","formModulusOfElasticity"]},
{ table:"table3",
one:["样件编号","最大应力/MPa","应力幅/MPa","循环次数/周次"],
key:["sampleCode","maximumStress","stressAmplitude","testFrequency"]}
]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
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
    let api =`http://localhost:60001/api/hangang/materialTrial/highCycleFatigueDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highCycleFatigueDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      console.log(this.trialDataDetails)
    })    
  }
}
