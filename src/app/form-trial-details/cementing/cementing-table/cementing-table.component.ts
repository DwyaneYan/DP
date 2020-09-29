import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cementing-table',
  templateUrl: './cementing-table.component.html',
  styleUrls: ['./cementing-table.component.css']
})
export class CementingTableComponent implements OnInit {
  public materialId
  trialDataDetail = [] //胶结试验结果
  table=[{
    table:"table1",
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
    
},
{table:"table2",
one:["样件编号","样品长度(mm)","试样宽度(mm)","胶结宽度b(mm)","剪切强度Rp(MPa)","失效模式"],
key:["sampleCode","length","width","cementingWidth","mpa","failureMode"]
}]
  constructor( private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { 
      this.route.pathFromRoot[1].params.subscribe(params => {
        this.materialId = params['materialId'];
        })
    }

  ngOnInit() { 
    this.GetTrialDataDetails()
  }
  public  GetTrialDataDetails() {
     this.ApiService.getCementingDataDetails( this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      if(this.trialDataDetail.length){
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds); 
      }
    })    
  }
}
