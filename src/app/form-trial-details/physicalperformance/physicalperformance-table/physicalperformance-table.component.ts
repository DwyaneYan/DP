import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-physicalperformance-table',
  templateUrl: './physicalperformance-table.component.html',
  styleUrls: ['./physicalperformance-table.component.css']
})
export class PhysicalperformanceTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails=[{}]
  trialDataDetailss=[{}]
  table=[{
    table:"table1",
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{table:"table2",
  one:["维氏硬度（HV）","布氏硬度（HBW）","洛氏硬度（HRC）","密度ρ（g/cm3）","电阻率ρ（Ω·m）"],
  key:["hv","hbw","hrc","density","resistivity"]
,
},]
table1=[
{
  table:"trialDataDetailss",
  one:["温度（℃）","热膨胀系数α（1/℃）"],
  key:["temperatureRange","thermalExpansion"]
,
},
{table:"trialDataDetails",
  one:["温度（℃）","导热系数λ（W/(cm゜C)）"],
  key:["temperature","thermalConductivity"]
,
},]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/physicalPerformanceDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
  // 导热系数
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/physicalPerformanceDataDetailThermalConductivitys/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
  // 热膨胀系数
  public async GetTrialDataDetailsss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/physicalPerformanceDataDetailThermalExpansions/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailss = res
      // console.log(this.trialDataDetail)
    })    
  }
}
