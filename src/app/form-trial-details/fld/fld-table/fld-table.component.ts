import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fld-table',
  templateUrl: './fld-table.component.html',
  styleUrls: ['./fld-table.component.css']
})
export class FldTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails=[{}]
  table=[{
    table:"table1",
    name:"trialDataDetails",
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{table:"table1",
  name:"trialDataDetail",
  one:["次应变","主应变"],
  key:["secondaryStrain","mainStrain"]
,
}]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/fLDDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/fLDDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
}
