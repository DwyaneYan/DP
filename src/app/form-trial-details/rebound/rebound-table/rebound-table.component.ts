import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rebound-table',
  templateUrl: './rebound-table.component.html',
  styleUrls: ['./rebound-table.component.css']
})
export class ReboundTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails
  trialDataDetailss
  trialDataDetailsss
  table=[{
    table:"table1",
    name:"trialDataDetail",
    one:["测试机构","执行标准","试验设备","试验方法"],
    key:["testOrganization","standard","equipment","testMethod"]
},

]
table1=[{table:"table2",
name:"trialDataDetail",
width:["150px","150px","150px","150px","150px","150px","150px"],
one:["回弹试验类型","弯曲角度","凸模圆角半径R","试样尺寸","试验速度（mm/min）","保持压力（kN)","保持时间(s)"],
key:["testType","bendingAngleRange","punchFilletRadiusRange","sampleSize","testSpeed","holdStress","holdTimes"]
,
},{table:"table3",
width:["150px","150px","150px","150px","150px","150px"],
name:"trialDataDetails",
one:["方向（沿轧向或者垂直轧向）","厚度 t/mm","凸模圆角半径","弯曲角度α/°","测量角度α1/°","回弹角α'/°"],
key:["direction","thickness","punchFilletRadius","bendingAngle","measuringAngle","reboundAngle"]
,
},
{table:"table4",
  name:"trialDataDetailss",
  width:["150px","150px","150px","80px","80px","80px","80px","80px","80px","100px"],
  one:["方向（沿轧向或者垂直轧向）","弯曲角度（°）","厚度","R=t","1.5t","1.67t","2t","2.3t","2.67t","最小弯曲角度"],
  key:["direction","bendingAngle","thickness","rt1","rt2","rt3","rt4","rt5","rt6","rtMin"]
,
},
{table:"table5",
  name:"trialDataDetailsss",
  width:["150px","150px","100px","100px","100px","100px"],
  one:["方向（沿轧向或者垂直轧向）","厚度 t/mm","R/t=0.5","R/t=1","R/t=1.5","R/t=2"],
  key:["direction","thickness","rt1","rt2","rt3","rt4"]
,
}]
  constructor(  private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
    this.GetTrialDataDetailssss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/reboundDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/reboundDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetails)
    })    
  }
  public async GetTrialDataDetailsss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/reboundDataDetailItems2/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailss = res
      console.log(this.trialDataDetailss)
    })    
  }
  public async GetTrialDataDetailssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/reboundDataDetailItems3/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsss = res
      console.log(this.trialDataDetailsss)
    })    
  }
}
