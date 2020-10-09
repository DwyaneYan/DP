import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  loading = true;
  loadingss = true
  loadings = true
  table = [{
    one: ["测试机构", '开始检测日期', '检测结束日期', "执行标准", "试验设备", "试验方法"],
    key: ["testOrganization", "dates", "dateEnds", "standard", "equipment", "testMethod"],
    width: ['120px','120px','120px','150px','150px','']
  },
  {
    one: ["维氏硬度（HV）", "布氏硬度（HBW）", "洛氏硬度（HRC）", "密度ρ（g/cm3）", "电阻率ρ（Ω·m）"],
    key: ["hv", "hbw", "hrc", "density", "resistivity"],
    width: ['150px','150px','150px','150px','']
    
  },
  {
    table: "trialDataDetailss",
    loading:'loadingss',
    one: ["温度（℃）", "热膨胀系数α（1/℃）"],
    key: ["temperatureRange", "thermalExpansion"]
  },
  {
    table: "trialDataDetails",
    loading:'loadings',
    one: ["温度（℃）", "导热系数λ（W/(cm゜C)）"],
    key: ["temperature", "thermalConductivity"]
  },]
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
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
    this.GetTrialDataDetailsss();
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getPhysicalPerformanceDataDetails(this.materialId)
      .then((res: any) => {
        this.trialDataDetail = res;
        this.loading = false;
        if(this.trialDataDetail.length){
          this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
          this.trialDataDetail[0].dateEnds =  this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
        }
      })
  }
  // 导热系数
  public  GetTrialDataDetailss() {
     this.ApiService.getThermalConductivitys(this.materialId)
      .then((res: any) => {
        this.trialDataDetails = res;
        this.loadings = false
  
      })
  }
  // 热膨胀系数
  public  GetTrialDataDetailsss() {
     this.ApiService.getThermalExpansions(this.materialId)
      .then((res: any) => {
        this.trialDataDetailss = res;
        this.loadingss = false
      })
  }
  //点击行中的列项展开信息
  clickItem(firstTable, tdIdx) {
    if (!firstTable) {
      return;
    }
    this.activeTdIdx = tdIdx;
    if (this.tableCellCls) {
      this.tableCellCls = "";
    } else {
      this.tableCellCls = "ellipsis";
    }
  }
}
