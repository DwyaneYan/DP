import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-painting-table',
  templateUrl: './painting-table.component.html',
  styleUrls: ['./painting-table.component.css']
})
export class PaintingTableComponent implements OnInit {
  public materialId
  table=[{
    table:'table1',
    name:"trialDataDetailsssssssss",
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
    nzScroll :{x: '1200px' }
},
{table:'table2',
  name:"trialDataDetail",
  one:["磷化膜结晶尺寸","磷化膜覆盖率"],
  key:["sizeText","coverRatio"],
  nzScroll :{x: '400px' }
},
{table:'table3',
  name:"trialDataDetails",
  one:["面积（m2）","初始重量（g）","试验后重量（g）","膜重（g/m2）"],
  key:["area","originalWeight","afterWeight","membraneWeight"],
  nzScroll :{x: '800px' }
},
{table:'table4',
  name:"trialDataDetailss",
  one:["Ip（s-1）","IH（s-1）","P比"],
  key:["ip","ih","ratio"],
  nzScroll :{x: '600px' }
},]
table2=[{table:'table7',
  name:"trialDataDetailsssss",
  title:"电泳漆膜粗糙度",
  one:["Ra（μm）","Rz（μm）"],
  key:["raOne","raTwo","raThree","rzOne","rzTwo","rzThree"],
  width:['120px', '120px','120px','120px','120px','120px']
},
{table:'table5',
name:"trialDataDetailsss",
title:"电泳漆膜厚度（μm）",
key:["pointThickOne","pointThickTwo","pointThickThree"],
width:['120px', '120px','120px']
},
{table:'table5',
name:"trialDataDetailsssssss",
title:"附着力",
key:["pointAdhesionOne","pointAdhesionTwo","pointAdhesionThree"],
width:['120px', '120px','120px']
},
{table:'table5',
name:"trialDataDetailssssssss",
title:"耐湿热性能",
key:["pointOne","pointTwo","pointThree"],
width:['120px', '120px','120px']
},
]
table1=[{table:'table6',
name:"trialDataDetailssss",
title:"电泳漆膜铅笔硬度",
key:"pointHardness"
},{table:'table6',
name:"trialDataDetailssssss",
title:"抗石击性能",
key:"pointStrength"
}]

  trialDataDetail =[{}]  // 磷化膜
  trialDataDetails   // 膜重
  trialDataDetailss  // P比
  trialDataDetailsss  // 电泳漆膜厚度
  trialDataDetailssss  // 电泳漆膜硬度
  trialDataDetailsssss  // 电泳漆膜粗糙度
  trialDataDetailssssss  // 抗石击性能
  trialDataDetailsssssss  // 附着力
  trialDataDetailssssssss  // 耐湿热
  trialDataDetailsssssssss  // detail表
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
    this.GetTrialDataDetailssss();
    this.GetTrialDataDetailsssss();
    this.GetTrialDataDetailssssss();
    this.GetTrialDataDetailsssssss();
    this.GetTrialDataDetailssssssss();
    this.GetTrialDataDetailsssssssss();
    this.GetTrialDataDetailssssssssss();
  }
  // 磷化膜
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailPhosphatingItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 膜重
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailMembraneWeightItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
  // P比
  public async GetTrialDataDetailsss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailPRatioItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailss = res
      console.log(this.trialDataDetailss)
    })    
  }
  // 电泳漆膜厚度
  public async GetTrialDataDetailssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailElectrophoreticItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsss = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 电泳漆膜硬度
  public async GetTrialDataDetailsssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailHardnessItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 电泳漆膜粗糙度
  public async GetTrialDataDetailssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailRoughnessItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 抗石击性能
  public async GetTrialDataDetailsssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailHitResistanceItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailssssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 附着力
  public async GetTrialDataDetailssssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailAdhesionItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsssssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 耐湿热
  public async GetTrialDataDetailsssssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailDampHeatItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailssssssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  // detail表
  public async GetTrialDataDetailssssssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsssssssss = res
      this.trialDataDetailsssssssss[0].dates= this.trialDataDetailsssssssss[0].dates.split("T")[0];
      this.trialDataDetailsssssssss[0].dateEnds= this.trialDataDetailsssssssss[0].dateEnds.split("T")[0]; 
      // console.log(this.trialDataDetail)
    })    
  }
}
