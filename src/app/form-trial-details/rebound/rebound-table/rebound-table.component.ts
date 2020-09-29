import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-rebound-table",
  templateUrl: "./rebound-table.component.html",
  styleUrls: ["./rebound-table.component.css"],
})
export class ReboundTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  trialDataDetails = [];
  trialDataDetailss = [];
  trialDataDetailsss = [];
  table = [
    {
      name: "trialDataDetail",
      nzScroll: { x: "1200px" },
      one: [
        "测试机构",
        "开始检测日期",
        "检测结束日期",
        "执行标准",
        "试验设备",
        "试验方法",
      ],
      key: [
        "testOrganization",
        "dates",
        "dateEnds",
        "standard",
        "equipment",
        "testMethod",
      ],
    },
  ];
  table1 = [
    {
      name: "trialDataDetail",
      nzScroll: { x: "1050px" },
      width: ["150px", "150px", "150px", "150px", "150px", "150px", "150px"],
      one: [
        "回弹试验类型",
        "弯曲角度",
        "凸模圆角半径R",
        "试样尺寸",
        "试验速度（mm/min）",
        "保持压力（kN)",
        "保持时间(s)",
      ],
      key: [
        "testType",
        "bendingAngleRange",
        "punchFilletRadiusRange",
        "sampleSize",
        "testSpeed",
        "holdStress",
        "holdTimes",
      ],
    },
    {
      width: ["150px", "150px", "150px", "150px", "150px", "150px"],
      name: "trialDataDetails",
      nzScroll: { x: "900px" },
      one: [
        "方向（沿轧向或者垂直轧向）",
        "厚度 t/mm",
        "凸模圆角半径",
        "弯曲角度α/°",
        "测量角度α1/°",
        "回弹角α'/°",
      ],
      key: [
        "direction",
        "thickness",
        "punchFilletRadius",
        "bendingAngle",
        "measuringAngle",
        "reboundAngle",
      ],
    },
    {
      name: "trialDataDetailss",
      nzScroll: { x: "1030px" },
      width: [
        "150px",
        "150px",
        "150px",
        "80px",
        "80px",
        "80px",
        "80px",
        "80px",
        "80px",
        "100px",
      ],
      one: [
        "方向（沿轧向或者垂直轧向）",
        "弯曲角度（°）",
        "厚度",
        "R=t",
        "1.5t",
        "1.67t",
        "2t",
        "2.3t",
        "2.67t",
        "最小弯曲角度",
      ],
      key: [
        "direction",
        "bendingAngle",
        "thickness",
        "rt1",
        "rt2",
        "rt3",
        "rt4",
        "rt5",
        "rt6",
        "rtMin",
      ],
    },
    {
      name: "trialDataDetailsss",
      width: ["150px", "150px", "100px", "100px", "100px", "100px"],
      nzScroll: { x: "700px" },
      one: [
        "方向（沿轧向或者垂直轧向）",
        "厚度 t/mm",
        "R/t=0.5",
        "R/t=1",
        "R/t=1.5",
        "R/t=2",
      ],
      key: ["direction", "thickness", "rt1", "rt2", "rt3", "rt4"],
    },
  ];
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService
  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
  }

  ngOnInit() {
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
    this.GetTrialDataDetailssss();
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getReboundDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
      }
    );
    if(this.trialDataDetail.length){
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
    }
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getReboundDataDetailItems(this.materialId).then(
      (res: any) => {
        this.trialDataDetails = res;
      }
    );
  }
  public async GetTrialDataDetailsss() {
    await this.ApiService.getReboundDataDetailItems2(this.materialId).then(
      (res: any) => {
        this.trialDataDetailss = res;
      }
    );
  }
  public async GetTrialDataDetailssss() {
    await this.ApiService.getReboundDataDetailItems3(this.materialId).then(
      (res: any) => {
        this.trialDataDetailsss = res;
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
