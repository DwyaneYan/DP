import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-lowcyclefatigue-table',
  templateUrl: './lowcyclefatigue-table.component.html',
  styleUrls: ['./lowcyclefatigue-table.component.css']
})
export class LowcyclefatigueTableComponent implements OnInit {
  public materialId
  trialDataDetail = []
  mater = []
  two = []
  trialDataDetails = [{}]
  baseInfo = []
  table1 = ["测试机构", '开始检测日期', '检测结束日期', "执行标准", "试验设备", "试验方法", "表面质量（特别差的需专门注明）", "循环应变比", "是否使用引伸计，引伸计规格(mm)",]
  table2 = ["testOrganization", "dates", "dateEnds", "standard", "equipment", "testMethod", "surfaceQuality", "cyclicStrainRatio", "extensometerGaugeDistance"]
  table3 = [{
    one: ["循环强度系数Κ＇/MPa", "循环应变硬化指数n＇", "相关系数r"],
    key: ["cyclicStrengthParameter", "cyclicStrainHardening", "relatedSressParameter"]
  },
  {
    one: ["疲劳强度系数(MPa)", "疲劳强度指数b＇", "相关系数r"],
    key: ["fatigueStrengthParameter", "fatigueStrength", "relatedLifeFatigueParameter"]
  },
  {
    one: ["疲劳延性系数", "疲劳延性指数c", "相关系数r"],
    key: ["fatigueStrechParameter", "fatigueStrech", "relatedLifeStrechParameter"]
  },]
  table4 = [
    {
      one: ["材料牌号", "屈服强度Rp(MPa)", "抗拉强度Rm(MPa)", "断后伸长率A(％)"],
      key: ["formYieldStrength", "formTensileStrength", "formModulusOfElasticity"]
    },
    {
      one: ["样件编号", "总应变幅(Δεt/2，mm/mm)", "塑性应变幅(Δεp/2，mm/mm)", "弹性应变幅(Δεe/2，mm/mm)", "失效循环数(Nf，次)", "循环应力幅(Δσ/2，MPa)", "试验频率(Hz)"],
      key: ["sampleCode", "totalStrainAmplitude", "plasticStrainAmplitude", "elasticStrainAmplitude", "failureCycleTimes", "cycleStressAmplitude", "testFrequency"]
    }
  ]
  isVisible = false;
  options;
  contrastTable(params, des) {
    let data = [];
    let xData = [];
    for (const iterator of this.trialDataDetails) {
      data.push(iterator[params]);
      xData.push(iterator['sampleCode']);
    }
    this.PlotPicture(data, xData, des);
  }
  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }
  public PlotPicture(data, xData, des) {
    this.isVisible = true;
    this.options = {
      title: {
        text: des,
        x: "center",
        y: "top"
      },
      xAxis: {
        type: "category",
        data: xData
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: data,
          type: "line"
        }
      ]
    };
  }
  constructor(private router: Router,
    public http: HttpClient,
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.materialId = this.router
      .routerState.root.firstChild
      .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetBaseInfo(this.materialId)
  }
  public async GetBaseInfo(p) {
    let param = { id: `${p}` }
    //let api = "http://localhost:60001/api/hangang/material/materials?Id=";
    await this.ApiService.GetMater(param)
      .then((res: any) => {
        this.baseInfo = res.items
      })
    // console.log(this.baseInfo)
    this.mater.push(
      this.baseInfo[0].name,
    )
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/lowCycleFatigueDataDetails/${materialId}`;
    await this.ApiService.getLowCycleFatigueDataDetails(this.materialId)
      .then((res: any) => {
        this.trialDataDetail = res
        for (let a = 1; a < this.trialDataDetail.length; a++) {
          this.two.push(this.trialDataDetail[a])
        }
      })
    this.trialDataDetail[0].dates = this.trialDataDetail[0].dates.split("T")[0];
    this.trialDataDetail[0].dateEnds = this.trialDataDetail[0].dateEnds.split("T")[0];

  }
  public async GetTrialDataDetailss() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/lowCycleFatigueDataDetailItems/${materialId}`;
    await this.ApiService.getLowCycleFatigueDataDetailItems(this.materialId)
      .then((res: any) => {
        this.trialDataDetails = res
        console.log(this.trialDataDetails)
      })
  }
}
