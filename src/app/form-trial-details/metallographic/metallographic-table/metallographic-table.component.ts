import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-metallographic-table',
  templateUrl: './metallographic-table.component.html',
  styleUrls: ['./metallographic-table.component.css']
})
export class MetallographicTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  table=[{
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"]
},
{
  width:["150px","200px","150px","150px"],
  one:["金相组织","非金属夹杂（级）","晶粒度（级）","脱碳层深度（mm)"],
  key:["structure","nonMetallicInclusionLevel","grainSize","depthDecarburization"]
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
    // let api =`http://localhost:60001/api/hangang/materialTrial/metallographicDataDetails/${materialId}`;
    await this.ApiService.getMetallographicDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      // this.trialDataDetail[0].dates= this.trialDataDetail[0].dates.split("T")[0];
      // this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds.split("T")[0];  
      this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
      this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
    })    
  }
  
}
