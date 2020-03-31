import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cementing-table',
  templateUrl: './cementing-table.component.html',
  styleUrls: ['./cementing-table.component.css']
})
export class CementingTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  table=[{
    table:"table1",
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{table:"table2",
one:["样件编号","样品长度(mm)","试样宽度(mm)","胶结宽度b(mm)","剪切强度Rp(MPa)","失效模式"],
key:["sampleCode","length","width","cementingWidth","MPA","failureMode"]
}]
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/cementingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
}
