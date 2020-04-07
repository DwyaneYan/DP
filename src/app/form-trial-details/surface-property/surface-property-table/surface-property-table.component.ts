import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-surface-property-table',
  templateUrl: './surface-property-table.component.html',
  styleUrls: ['./surface-property-table.component.css']
})
export class SurfacePropertyTableComponent implements OnInit {

  public materialId
  trialDataDetail=[{}]
  trialDataDetails=[{}]
  trialDataDetailss=[{}]
  table=[{
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{
  one:["面积（m2）","初始重量（g）","试验后重量（g）","膜重（g/mm2）"],
  key:["area","originalWeight","afterWeight","membraneWeight"]
,
},
{
  one:["Ra（μm）","RPC（个/cm）"],
  key:["raOne","raTwo","rpcOne","rpcTwo"]
,
}]
  constructor(
    private router: Router,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');

    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertyCoatingWeights/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertyRoughnesss/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      console.log(this.trialDataDetails)
    })    
  }
  public async GetTrialDataDetailsss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertyDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailss = res;
      console.log(this.trialDataDetailss)
    })    
  }
}
