import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";
import{clickItem}from "../../../picture"
@Component({
  selector: "app-welding-table",
  templateUrl: "./welding-table.component.html",
  styleUrls: ["./welding-table.component.css"],
})
export class WeldingTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  trialDataDetails = [];
  loading1 = true
  loading2 = true
  table = [
    {
      nzScroll: '',
      one: ["测试机构", "开始检测日期", "检测结束日期", "执行标准", "试验方法"],
      key: ["testOrganization", "dates", "dateEnds", "standard", "testMethod"],
      width:['120px','120px','120px','150px','']
    },
    {
      nzScroll: { x: "1500px" },
      one: [
        "焊接试验类型",
        "焊机类别",
        "焊机型号",
        "电极头前端直径(mm)",
        "电极压力(kN)",
        "脉冲次数",
        "预压时间(ms)",
        "升压时间(ms)",
        "最小焊接时间(ms)",
        "中值焊接时间(ms)",
        "最大焊接时间(ms)",
        "保压时间(ms)",
        "临界焊点直径(mm)",
      ],
      key: [
        "testType",
        "welderType",
        "welderMode",
        "headDiameter",
        "electrodePressure",
        "pulseTimes",
        "preloadingTimes",
        "boostTimes",
        "minimumWeldingTimes",
        "middleWeldingTimes",
        "maxmumWeldingTimes",
        "holdingWeldingTimes",
        "criticalJointDiameter",
      ],
      width:['120px','110px','110px','130px','110px','110px','110px','110px','120px','120px','120px','110px','',]
    },
  ];
  table1 = [
    {
      one: [
        "焊接时间(ms)",
        "左边界电流（kA）",
        "右边界电流（kA）",
        "焊接电流区间(kA)",
      ],
      key: [
        "weldingTimes",
        "leftBoundaryElectric",
        "rightBoundaryElectric",
        "weldingCurrentInterval",
      ],
    },
  ];
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
  clickItem = clickItem
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private ApiService: ApiService
  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
  }

  ngOnInit() {
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getWeldingDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
      }
    );
    this.loading1 = false
    if(this.trialDataDetail.length){
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
    }
  }
  public  GetTrialDataDetailss() {
     this.ApiService.getWeldingDataDetailItems(this.materialId).then(
      (res: any) => {
        this.trialDataDetails = res;
        this.loading2 = false
      }
    );
  }
}
