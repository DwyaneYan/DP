import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-fld-table",
  templateUrl: "./fld-table.component.html",
  styleUrls: ["./fld-table.component.css"],
})
export class FldTableComponent implements OnInit {
  public materialId;
  // nzScroll={}
  trialDataDetail = [];
  trialDataDetails = [];
  table = [
    {
      table: "table1",
      name: "trialDataDetails",
      one: [
        "测试机构",
        "开始检测日期",
        "检测结束日期",
        "执行标准",
        "试验设备",
        "试验方法",
      ],
      width: ["200px", "200px", "200px", "200px", "200px", "300px"],
      key: [
        "testOrganization",
        "dates",
        "dateEnds",
        "standard",
        "equipment",
        "testMethod",
      ],
      nzScroll: { x: "1300px" },
    },
    {
      table: "table2",
      name: "trialDataDetail",
      one: ["试样宽度/mm", "次应变", "主应变"],
      width: ["200px", "200px", "200px"],
      key: ["specimenWidth", "secondaryStrain", "mainStrain"],
      nzScroll: { x: "600px" },
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
  }
  public  GetTrialDataDetails() {
     this.ApiService.getFLDDataDetailItems(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
      }
    );

  }
  public  GetTrialDataDetailss() {
     this.ApiService.getFLDDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetails = res;
        if(this.trialDataDetails.length){
        this.trialDataDetails[0].dates = this.ApiService.handleTime(this.trialDataDetails[0].dates);
        this.trialDataDetails[0].dateEnds = this.ApiService.handleTime(this.trialDataDetails[0].dateEnds);
        }
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
