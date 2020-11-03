import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";
import { NameService } from '../../base-info/name.service'
import {PlotPicture} from "../../../picture"

@Component({
  selector: "app-lowcyclefatigue-table",
  templateUrl: "./lowcyclefatigue-table.component.html",
  styleUrls: ["./lowcyclefatigue-table.component.css"],
})
export class LowcyclefatigueTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  mater = '';
  trialDataDetails = [];
  table1 = [
    "测试机构",
    "开始检测日期",
    "检测结束日期",
    "执行标准",
    "试验设备",
    "试验方法",
    "表面质量（特别差的需专门注明）",
    "循环应变比",
    "是否使用引伸计，引伸计规格(mm)",
  ];
  table2 = [
    "testOrganization",
    "dates",
    "dateEnds",
    "standard",
    "equipment",
    "testMethod",
    "surfaceQuality",
    "cyclicStrainRatio",
    "extensometerGaugeDistance",
  ];
  table3 = [
    {
      one: ["循环强度系数Κ＇/MPa", "循环应变硬化指数n＇", "相关系数r"],
      key: [
        "cyclicStrengthParameter",
        "cyclicStrainHardening",
        "relatedSressParameter",
      ],
    },
    {
      one: ["疲劳强度系数(MPa)", "疲劳强度指数b＇", "相关系数r"],
      key: [
        "fatigueStrengthParameter",
        "fatigueStrength",
        "relatedLifeFatigueParameter",
      ],
    },
    {
      one: ["疲劳延性系数", "疲劳延性指数c", "相关系数r"],
      key: [
        "fatigueStrechParameter",
        "fatigueStrech",
        "relatedLifeStrechParameter",
      ],
    },
  ];
  table4 = [
    {
      one: [
        "材料牌号",
        "屈服强度Rp(MPa)",
        "抗拉强度Rm(MPa)",
        "断后伸长率A(％)",
      ],
      key: [
        "formYieldStrength",
        "formTensileStrength",
        "formModulusOfElasticity",
      ],
    },
    {
      one: [
        "样件编号",
        "总应变幅(Δεt/2，mm/mm)",
        "塑性应变幅(Δεp/2，mm/mm)",
        "弹性应变幅(Δεe/2，mm/mm)",
        "失效循环数(Nf，次)",
        "循环应力幅(Δσ/2，MPa)",
        "试验频率(Hz)",
      ],
      key: [
        "sampleCode",
        "totalStrainAmplitude",
        "plasticStrainAmplitude",
        "elasticStrainAmplitude",
        "failureCycleTimes",
        "cycleStressAmplitude",
        "testFrequency",
      ],
    },
  ];
  isVisible = false;
  options = {};
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
  loading = true;
  loadings = true
  contrastTable(params, des) {
    let data = [];
    let xData = [];
    for (const iterator of this.trialDataDetails) {
      data.push(iterator[params]);
      xData.push(iterator["sampleCode"]);
    }
    this.isVisible = true
    this.options = PlotPicture(data, xData, des);
  }

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private ApiService: ApiService,
    private NameService:NameService
  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
    this.NameService.changeName$.subscribe(n => {this.mater = n;console.log( this.mater)})

  }

  ngOnInit() {
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  changeisVisible(){
    this.isVisible = false
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getLowCycleFatigueDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
        this.loading = false
      }
    );
    this.ApiService.GetMater({ id: this.materialId }).then((res1: any) => {
      if (this.trialDataDetail.length) {
        this.trialDataDetail[0].dates = res1.data[0].materialDto.date;
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
      }
    })
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getLowCycleFatigueDataDetailItems(
      this.materialId
    ).then((res: any) => {
      this.trialDataDetails = res;
      this.loadings = false;
  
    });
  }
  //点击行中的列项展开信息
  clickItem(tdIdx) {
    this.activeTdIdx = tdIdx;
    if (this.tableCellCls) {
      this.tableCellCls = "";
    } else {
      this.tableCellCls = "ellipsis";
    }
  }
}
