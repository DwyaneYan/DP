import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cementing-table',
  templateUrl: './cementing-table.component.html',
  styleUrls: ['./cementing-table.component.css']
})
export class CementingTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  table=[{
    table:"table1",
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
    
},
{table:"table2",
one:["样件编号","样品长度(mm)","试样宽度(mm)","胶结宽度b(mm)","剪切强度Rp(MPa)","失效模式"],
key:["sampleCode","length","width","cementingWidth","mpa","failureMode"]
}]
  constructor( private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/cementingDataDetails/${materialId}`;
    await this.ApiService.getCementingDataDetails( this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
      this.trialDataDetail[0].dates= this.trialDataDetail[0].dates.split("T")[0];
      this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds.split("T")[0];  
    })    
  }
}
