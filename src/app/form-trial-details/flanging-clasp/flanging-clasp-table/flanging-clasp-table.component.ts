import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-flanging-clasp-table',
  templateUrl: './flanging-clasp-table.component.html',
  styleUrls: ['./flanging-clasp-table.component.css']
})
export class FlangingClaspTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  table=[{
    table:"table1",
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{table:"table2",
  one:["翻遍等级"],
  key:["flangingLevel"]
,
}]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/flangingClaspDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
}
