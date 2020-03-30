import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
@Component({
  selector: 'app-bending-table',
  templateUrl: './bending-table.component.html',
  styleUrls: ['./bending-table.component.css']
})
export class BendingTableComponent implements OnInit {

  materialId
  trialDataDetail=[{}]
  table1=['执行标准','试验设备']
  table2=['样件编号','试样宽','试样厚','试样直径','试样长度','跨距','抗弯强度(MPa)','规定非比例弯曲强度(MPa)','弯曲弹性模量(MPa)']
  table3=['sampleCode','width','thickness','diameter','length','span','bendingStrength','nonProportionalBendingStrenth','bendingOfElasticity']
  table4=['180px','100px','100px','100px','100px','100px','180px','180px','180px']
  table5=["standard","equipment"]
  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(   
  ) {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/bendingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
}
