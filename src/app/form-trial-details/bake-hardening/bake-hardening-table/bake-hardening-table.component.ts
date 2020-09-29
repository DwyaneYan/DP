import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-bake-hardening-table',
  templateUrl: './bake-hardening-table.component.html',
  styleUrls: ['./bake-hardening-table.component.css']
})
export class BakeHardeningTableComponent implements OnInit {
public materialId = ''
trialDataDetail = [] //基本信息
trialDataDetails = [] //详细试验结果
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
}]
  constructor(private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { 
      this.route.pathFromRoot[1].params.subscribe(params => {
        this.materialId = params['materialId'];
        })
    }

  ngOnInit() { 
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  //烘烤硬化试验基本信息
  public async GetTrialDataDetails() {
    await this.ApiService.getBakeHardeningDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res //如果这条材料没有这个试验项目信息
      if(this.trialDataDetail.length){
      this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
      this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
      }
    })    
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getBakeHardeningDataDetailItems(this.materialId)
    .then((res: any) => {
      if(res.length){
        this.trialDataDetails = res
      }
    })    
  }
}
