import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/api.service";
import { classitem } from "../../../picture"
@Component({
  selector: "app-surface-property-table",
  templateUrl: "./surface-property-table.component.html",
  styleUrls: ["./surface-property-table.component.css"],
})
export class SurfacePropertyTableComponent implements OnInit {
  public materialId;
  trialDataDetail = []; //镀层重量
  trialDataDetails = []; //粗糙度和峰值密度
  trialDataDetailss = []; //基本信息
  trialDataDetailsss = []; //公称厚度
  table = [
    {
      one: [
        "测试机构",
        "开始检测日期",
        "检测结束日期",
        "执行标准",
        "试验设备",
        "试验方法",
        "表面性能试验项目",
        "表面质量等级(FD;FC;FB)",
      ],
      key: [
        "testOrganization",
        "dates",
        "dateEnds",
        "standard",
        "equipment",
        "testMethod",
        "testItem",
        "surfaceQualityGrade",
      ],
    },
    {
      one: [
        "面积（m2）",
        "初始重量（g）",
        "试验后重量（g）",
        "膜重（g/mm2）",
        "重量要求（g/m2）",
      ],
      key: [
        "area",
        "originalWeight",
        "afterWeight",
        "membraneWeight",
        "weightRequirement",
      ],
    },
    {
      one: ["Ra要求"],
      key: ["raRequirement"],
    },
    {
      one: ["公称厚度"],
      key: ["raRequirement"],
    },
  ];
  
  two = []; //每个位置的数据个数
  three = []; //位置
  widthConfig1 = ["150px", "150px", "150px", "150px", "150px"];
  widthConfig = [
    "100px",
    "180px",
    "120px",
    "120px",
    "120px",
    "120px",
    "120px",
    "120px",
    "120px",
    "120px",
    "120px",
  ];
  aboveRoughness = []; //上表粗糙度
  abovePeakDensity = []; //上峰值密度
  belowRoughness = []; //下粗糙度
  belowPeakDensity = []; //下峰值密度
  edgeThickness1 = [];//距边部40mm
  edgeThickness2 = [];//距左边部1/4
  edgeThickness3 = [];//板宽1/2
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
  //镀层重量
  public async GetTrialDataDetails() {
    await this.ApiService.getSurfacePropertyCoatingWeights(this.materialId).then((res: any) => {
      this.trialDataDetail = res;
    });
  }
  //粗糙度和峰值密度
  public async GetTrialDataDetailss() {
    await this.ApiService.getRoughnessAndPeakDensity(this.materialId).then(
      (res: any) => {
        this.trialDataDetails = res;
        let one = classitem(this.trialDataDetails,"position","position");
        for (let a = 0; a < one.length; a++) {
          one[a].List.map((val) => {
            this.aboveRoughness.push(val.aboveRoughness);
            this.abovePeakDensity.push(val.abovePeakDensity);
            this.belowRoughness.push(val.belowRoughness);
            this.belowPeakDensity.push(val.belowPeakDensity);
          });
          this.two.push(one[a].List.length); 
          this.three.push(one[a].position);
        }
      }
    );
  }
  // detail数据
  public async GetTrialDataDetailsss() {
    await this.ApiService.getSurfacePropertyDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetailss = res;
      }
    );
      if(this.trialDataDetailss.length){
          this.trialDataDetailss[0].dates = this.ApiService.handleTime(this.trialDataDetailss[0].dates);
          this.trialDataDetailss[0].dateEnds = this.ApiService.handleTime(this.trialDataDetailss[0].dateEnds);
      }
  }
  // classitem(arry1, p) {
  //   let arry = [];
  //   arry1.map((mapItem) => {
  //     if (arry.length == 0) {
  //       arry.push({ highSpeedStrechDataDetailId: mapItem[p], List: [mapItem] });
  //     } else {
  //       let res = arry.some((item) => {
  //         //判断相同Position，有就添加到当前项
  //         if (item.highSpeedStrechDataDetailId == mapItem[p]) {
  //           item.List.push(mapItem);
  //           return true;
  //         }
  //       });
  //       if (!res) {
  //         //如果没找相同Position添加一个新对象
  //         arry.push({
  //           highSpeedStrechDataDetailId: mapItem[p],
  //           List: [mapItem],
  //         });
  //       }
  //     }
  //   });
  //   return arry;
  // }

  public async GetTrialDataDetailssss() {
    await this.ApiService.getSizeTolerance(this.materialId).then((res: any) => {
      this.trialDataDetailsss = res;
      this.trialDataDetailsss.map((val) => {
        this.edgeThickness1.push(val.edgeThickness1);
        this.edgeThickness2.push(val.edgeThickness2);
        this.edgeThickness3.push(val.edgeThickness3);
      });
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
