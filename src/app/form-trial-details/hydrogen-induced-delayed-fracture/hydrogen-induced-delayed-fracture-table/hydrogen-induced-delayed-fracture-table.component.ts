import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";
import{clickItem}from "../../../picture"

@Component({
  selector: "app-hydrogen-induced-delayed-fracture-table",
  templateUrl: "./hydrogen-induced-delayed-fracture-table.component.html",
  styleUrls: ["./hydrogen-induced-delayed-fracture-table.component.css"],
})
export class HydrogenInducedDelayedFractureTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  clickItem = clickItem;
  loading = true;
  loadings = true;
  trialDataDetails = [];
  table = [
    {
      one: ["测试机构", "开始检测日期", "检测结束日期", "执行标准"],
      key: ["testOrganization", "dates", "dateEnds", "standard"],
      width: ["110px", "110px", "110px", ""]
    },
    {
      one: ["氢脆试验项目", "试验设备", "溶液类别", "试验时间", "试验方法"],
      key: ["testName", "equipment", "liquorType", "testTime", "testMethod"],
      width: ["150px", "110px", "110px", "110px",'']
    },
  ];
  table1 = [
    {
      one: [
        "弯曲跨度",
        "弯曲应变",
        "弯曲应力（MPa）",
        "试验时间（h）",
        "试验结果（300小时浸泡开裂：是/否）",
      ],
      key: ["span", "strain", "stress", "hour", "remark"],
    },
  ];

  tableCellCls = "ellipsis";
  activeTdIdx = 0;
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
    await this.ApiService.getHydrogenInducedDelayedFractureDataDetails(this.materialId).then((res: any) => {
      this.trialDataDetail = res;
    });
  this.loading = false;
    if(this.trialDataDetail.length){
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
    }
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getHydrogenInducedDelayedFractureDataDetailItems(
      this.materialId
    ).then((res: any) => {
      this.trialDataDetails = res;
  this.loadings = false;

    });
  }
  // //点击行中的列项展开信息
  // clickItem(firstTable, tdIdx) {
  //   if (!firstTable) {
  //     return;
  //   }
  //   this.activeTdIdx = tdIdx;
  //   if (this.tableCellCls) {
  //     this.tableCellCls = "";
  //   } else {
  //     this.tableCellCls = "ellipsis";
  //   }
  // }
}
