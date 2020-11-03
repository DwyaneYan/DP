import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";
import{ unique1,clickItem } from '../../../picture'

@Component({
  selector: "app-secondary-working-embrittlement-table",
  templateUrl: "./secondary-working-embrittlement-table.component.html",
  styleUrls: ["./secondary-working-embrittlement-table.component.css"],
})
export class SecondaryWorkingEmbrittlementTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  trialDataDetails = [];
  serials = []; //去重后的杯子编号
  serialss = []; //渲染数据
  loading = true
  loadings = true
  serialsss = [];//去重后的试验温度
  table = [
    {
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
      width:["120px", "120px", "120px", "150px", "150px", ""]
    },
    {
      one: ["试验温度℃"],
      key: ["temperature"],
    },
  ];
  clickItem = clickItem
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
    await this.ApiService.getSecondaryWorkingEmbrittlementDataDetails(
      this.materialId
    ).then((res: any) => {
      this.trialDataDetail = res;
    });
    this.loading = false
    this.ApiService.GetMater({ id: this.materialId }).then((res1: any) => {
      if (this.trialDataDetail.length) {
        this.trialDataDetail[0].dates = res1.data[0].materialDto.date;
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
      }
    })
  }
  public async GetTrialDataDetailss() {
    await this.ApiService.getSecondaryWorkingEmbrittlementDataDetailItems(this.materialId).then((res: any) => {
  this.loadings = false
  this.trialDataDetails = res;
      let arry1 = [],arry4 = [];
      this.trialDataDetails.forEach((val) => {
        arry1.push(val.serialNumber);
        arry4.push(val.temperature);
      });
      this.serials = unique1(arry1); //去重后的杯号
      this.serialsss = unique1(arry4); //去重后的试验温度
      for (let d = 0; d < this.serialsss.length; d++) {
        this.serialss[d] = [];
        for (
          let c = d;
          c < this.trialDataDetails.length;
          c += this.serialsss.length
        ) {
          this.serialss[d].push(this.trialDataDetails[c]);
        }
      }
    });
  }
}
