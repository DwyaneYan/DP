import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-highcyclefatigue-table",
  templateUrl: "./highcyclefatigue-table.component.html",
  styleUrls: ["./highcyclefatigue-table.component.css"],
})
export class HighcyclefatigueTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  baseInfo = [];
  mater = [];
  two = [];
  trialDataDetails = [];
  table = [
    {
      table: "table1",
      one: [
        "测试机构",
        "开始检测日期",
        "检测结束日期",
        "执行标准",
        "试验设备",
        "试验方法",
        "表面质量（特别差的需专门注明）",
        "循环应力比",
        "是否使用引伸计，引伸计规格(mm)",
      ],
      key: [
        "testOrganization",
        "dates",
        "dateEnds",
        "standard",
        "equipment",
        "testMethod",
        "surfaceQuality",
        "cyclicStressRatio",
        "extensometerGaugeDistance",
      ],
    },
    {
      table: "table2",
      one: ["公式", "a", "b", "相关系数", "疲劳极限/MPa", "标准偏差/MPa"],
      width: ["180px", "100px", "100px", "100px", "150px", "150px"],
      key: [
        "formula",
        "snaParameter",
        "snbParameter",
        "snRelatedParameter",
        "fatigueLimitStrength",
        "standardDeviation",
      ],
    },
    {
      table: "table3",
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
      table: "table3",
      one: ["样件编号", "最大应力/MPa", "应力幅/MPa", "循环次数/周次"],
      key: [
        "itemSampleCode",
        "maximumStress",
        "stressAmplitude",
        "testFrequency",
      ],
    },
  ];
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
  constructor(
    private router: Router,
    public http: HttpClient,
    private ApiService: ApiService
  ) {}

  ngOnInit() {
    this.materialId = this.router.routerState.root.firstChild.snapshot.paramMap.get(
      "materialId"
    );
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetBaseInfo(this.materialId);
  }
  public async GetBaseInfo(p) {
    let param = { id: `${p}` };
    await this.ApiService.GetMater(param).then((res: any) => {
      this.baseInfo = res.items;
    });
    // console.log(this.baseInfo)
    this.mater.push(this.baseInfo[0].name);
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/highCycleFatigueDataDetails/${materialId}`;
    await this.ApiService.getHighCycleFatigueDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
        for (let a = 1; a < this.trialDataDetail.length; a++) {
          this.two.push(this.trialDataDetail[a]);
        }
        this.trialDataDetail[0].dates = this.trialDataDetail[0].dates.split(
          "T"
        )[0];
        this.trialDataDetail[0].dateEnds = this.trialDataDetail[0].dateEnds.split(
          "T"
        )[0];
      }
    );
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getHighCycleFatigueDataDetailItems(
      this.materialId
    ).then((res: any) => {
      this.trialDataDetails = res;
      console.log(this.trialDataDetails);
    });
  }
  clickItem(tdIdx) {
    this.activeTdIdx = tdIdx;
    if (this.tableCellCls) {
      this.tableCellCls = "";
    } else {
      this.tableCellCls = "ellipsis";
    }
  }
}
