import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hydrogen-induced-delayed-fracture-table',
  templateUrl: './hydrogen-induced-delayed-fracture-table.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture-table.component.css']
})
export class HydrogenInducedDelayedFractureTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails=[{}]
  table=[{
    table:"table1",
    one:["测试机构","执行标准"],
    key:["testOrganization","standard"]
},
{table:"table2",
  one:["氢脆试验项目","试验设备","溶液类别","试验时间","试验方法"],
  key:["testName","equipment","liquorType","testTime","testMethod"]
,
},]
table1=[{
  one:["弯曲跨度","弯曲应变","弯曲应力（MPa）","试验时间（h）","试验结果（300小时浸泡开裂：是/否）",],
  key:["span","strain","stress","hour","remark"]
},
]
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
}
