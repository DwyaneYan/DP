import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-welding-table",
  templateUrl: "./welding-table.component.html",
  styleUrls: ["./welding-table.component.css"],
})
export class WeldingTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  trialDataDetails;
  table = [
    {
      table: "table1",
      nzScroll: { x: "1000px" },
      one: ["测试机构", "开始检测日期", "检测结束日期", "执行标准", "试验方法"],
      key: ["testOrganization", "dates", "dateEnds", "standard", "testMethod"],
    },
    {
      table: "table2",
      nzScroll: { x: "2600px" },
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
  constructor(
    private router: Router,
    public http: HttpClient,
    private ApiService: ApiService
  ) {}

  ngOnInit() {
    this.materialId = this.router.routerState.root.firstChild.snapshot.paramMap.get(
      "materialId"
    );
    // console.log(this.materialId)
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/weldingDataDetails/${materialId}`;
    await this.ApiService.getWeldingDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
        // console.log(this.trialDataDetail)
      }
    );
    this.trialDataDetail[0].dates = this.trialDataDetail[0].dates.split("T")[0];
    this.trialDataDetail[0].dateEnds = this.trialDataDetail[0].dateEnds.split(
      "T"
    )[0];
  }
  public async GetTrialDataDetailss() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/weldingDataDetailItems/${materialId}`;
    await this.ApiService.getWeldingDataDetailItems(this.materialId).then(
      (res: any) => {
        this.trialDataDetails = res;
        // console.log(this.trialDataDetail)
      }
    );
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
