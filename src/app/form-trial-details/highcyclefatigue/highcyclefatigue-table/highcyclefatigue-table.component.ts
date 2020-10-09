import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";
import{clickItem}from "../../../picture"
import { NameService } from '../../base-info/name.service'
@Component({
  selector: "app-highcyclefatigue-table",
  templateUrl: "./highcyclefatigue-table.component.html",
  styleUrls: ["./highcyclefatigue-table.component.css"],
})
export class HighcyclefatigueTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  mater = ''; //试验结果中的牌号
  clickItem =clickItem
  trialDataDetails = [];
  loading = true
  loadings = true
  table = [
    {
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
      one: ["公式", "a", "b", "相关系数", "疲劳极限/MPa", "标准偏差/MPa"],
      width: ["", "100px", "100px", "100px", "150px", "150px"],
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
      one: [
        "材料牌号",
        "屈服强度Rp(MPa)",
        "抗拉强度Rm(MPa)",
        "断后伸长率A(％)",
      ],
      width:['120px','150px','150px',''],
      key: [
        "formYieldStrength",
        "formTensileStrength",
        "formModulusOfElasticity",
      ],
    },
    {
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
    private route: ActivatedRoute,
    public http: HttpClient,
    private ApiService: ApiService,
    private NameService:NameService
  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
    this.NameService.changeName$.subscribe(n => {this.mater = n;console.log( this.mater)})
      })
  }

  ngOnInit() {
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }

  public async GetTrialDataDetails() {
    await this.ApiService.getHighCycleFatigueDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
        this.loading = false
        if(this.trialDataDetail.length){
            this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
            this.trialDataDetail[0].dateEnds =  this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
        }
      }
    );
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getHighCycleFatigueDataDetailItems(this.materialId).then((res: any) => {
      this.trialDataDetails = res;
      this.loadings =false
    });
  }
}
