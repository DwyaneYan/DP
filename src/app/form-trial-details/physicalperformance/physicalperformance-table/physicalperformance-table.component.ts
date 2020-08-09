import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-physicalperformance-table',
  templateUrl: './physicalperformance-table.component.html',
  styleUrls: ['./physicalperformance-table.component.css']
})
export class PhysicalperformanceTableComponent implements OnInit {
  public materialId
  trialDataDetail = []
  trialDataDetails = []
  trialDataDetailss = []
  table = [{
    table: "table1",
    one: ["测试机构", '开始检测日期', '检测结束日期', "执行标准", "试验设备", "试验方法"],
    key: ["testOrganization", "dates", "dateEnds", "standard", "equipment", "testMethod"],
    nzScroll: { x: '1200px' }
  },
  {
    table: "table2",
    one: ["维氏硬度（HV）", "布氏硬度（HBW）", "洛氏硬度（HRC）", "密度ρ（g/cm3）", "电阻率ρ（Ω·m）"],
    key: ["hv", "hbw", "hrc", "density", "resistivity"],
    nzScroll: { x: '1000px' }
    ,
  },]
  table1 = [
    {
      table: "trialDataDetailss",
      one: ["温度（℃）", "热膨胀系数α（1/℃）"],
      key: ["temperatureRange", "thermalExpansion"]
      ,
    },
    {
      table: "trialDataDetails",
      one: ["温度（℃）", "导热系数λ（W/(cm゜C)）"],
      key: ["temperature", "thermalConductivity"]
      ,
    },]
  constructor(private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,

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
    await this.ApiService.getPhysicalPerformanceDataDetails(this.materialId)
      .then((res: any) => {
        this.trialDataDetail = res
        this.trialDataDetail[0].dates = this.trialDataDetail[0].dates.split("T")[0];
        this.trialDataDetail[0].dateEnds = this.trialDataDetail[0].dateEnds.split("T")[0];
      })
  }
  // 导热系数
  public async GetTrialDataDetailss() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/physicalPerformanceDataDetailThermalConductivitys/${materialId}`;
    await this.ApiService.getThermalConductivitys(this.materialId)
      .then((res: any) => {
        this.trialDataDetails = res
        // console.log(this.trialDataDetail)
      })
  }
  // 热膨胀系数
  public async GetTrialDataDetailsss() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/physicalPerformanceDataDetailThermalExpansions/${materialId}`;
    await this.ApiService.getThermalExpansions(this.materialId)
      .then((res: any) => {
        this.trialDataDetailss = res
        // console.log(this.trialDataDetail)
      })
  }
}
