import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-flanging-clasp-table',
  templateUrl: './flanging-clasp-table.component.html',
  styleUrls: ['./flanging-clasp-table.component.css']
})
export class FlangingClaspTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  table=[{
    table:"table1",
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
    nzScroll :{x: '1200px' }
},
{table:"table2",
  one:["翻边等级"],
  key:["flangingLevel"],
  nzScroll :{x: '200px' }
,
}]
  constructor(private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/flangingClaspDataDetails/${materialId}`;
    await this.ApiService.getFlangingClaspDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      // this.trialDataDetail[0].dates= this.trialDataDetail[0].dates.split("T")[0];
      // this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds.split("T")[0];  
      this.trialDataDetail[0].dates =  this.ApiService.handleTime(this.trialDataDetail[0].dates);
      this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
    })    
  }
}
