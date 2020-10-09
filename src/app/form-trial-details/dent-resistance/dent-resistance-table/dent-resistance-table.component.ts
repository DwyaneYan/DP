import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-dent-resistance-table",
  templateUrl: "./dent-resistance-table.component.html",
  styleUrls: ["./dent-resistance-table.component.css"],
})
export class DentResistanceTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  loading = true
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
      ],
      key: [
        "testOrganization",
        "dates",
        "dateEnds",
        "standard",
        "equipment",
        "testMethod",
      ],
      // nzScroll: { x: "1200px" },
    },
    {
      table: "table2",
      one: ["初始刚度(N/mm)", "0.1mm可见凹痕载荷(N)"],
      key: ["originalRigidity", "visibleDentLoad"],
      // nzScroll: { x: "400px" },
    },
  ];
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
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getDentResistanceDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
        this.loading = false
        if(this.trialDataDetail.length){
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
        }
      }
    );
  }
}
