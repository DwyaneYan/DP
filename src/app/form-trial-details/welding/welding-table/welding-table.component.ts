import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-welding-table',
  templateUrl: './welding-table.component.html',
  styleUrls: ['./welding-table.component.css']
})
export class WeldingTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails
  table=[{
    table:"table1",
    one:["测试机构","执行标准"],
    key:["testOrganization","standard"]
},
{table:"table2",
  one:["焊接试验类型","焊机类别","焊机型号","电极头前端直径(mm)","电极压力(kN)","脉冲次数","预压时间(ms)","升压时间(ms)","最小焊接时间(ms)","中值焊接时间(ms)","最大焊接时间(ms)","保压时间(ms)","临界焊点直径(mm)"],
  key:["testType","welderType","welderMode","headDiameter","electrodePressure","pulseTimes","preloadingTimes","boostTimes","minimumWeldingTimes","middleWeldingTimes","maxmumWeldingTimes","holdingWeldingTimes","criticalJointDiameter",]
,
},]
table1=[{
  one:["焊接时间(ms)","左边界电流（kA）","右边界电流（kA）","焊接电流区间(kA)"],
  key:["weldingTimes","leftBoundaryElectric","rightBoundaryElectric","weldingCurrentInterval"]
},
]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    // console.log(this.materialId)
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/weldingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/weldingDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
}
