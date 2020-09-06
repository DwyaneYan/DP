import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-bake-hardening-table',
  templateUrl: './bake-hardening-table.component.html',
  styleUrls: ['./bake-hardening-table.component.css']
})
export class BakeHardeningTableComponent implements OnInit {
public materialId
trialDataDetail
trialDataDetails
table=[{
  table:"table1",
  name:"trialDataDetail",
  one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
  key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
 
},
{table:"table2",
name:"trialDataDetails",
one:["烘烤温度及时间","Rt2.0(MPa)","Rp0.2(MPa)","Rm(MPa)","BH2(MPa)"],
key:["temperatureTimes","rt","rp","rm","bH2"],
//nzScroll :{x: '1000px' }

}]
  constructor(private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/bakeHardeningDataDetails/${materialId}`;
    await this.ApiService.getBakeHardeningDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      // this.trialDataDetail[0].dates= this.trialDataDetail[0].dates.split("T")[0];
      // this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds.split("T")[0];  
      this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
      this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
    })    
  }
  public async GetTrialDataDetailss() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/bakeHardeningDataDetailItems/${materialId}`;
    await this.ApiService.getBakeHardeningDataDetailItems(this.materialId)
    .then((res: any) => {
      this.trialDataDetails = res
      console.log(this.trialDataDetails)
    })    
  }
}
