import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { classitem,unique1,notempty } from "../../../picture";
import { ApiService } from "src/app/api.service";
import { GaussService } from "src/app/gauss.service";
import { NameService } from '../../base-info/name.service'

@Component({
  selector: "app-highspeedstrech-table",
  templateUrl: "./highspeedstrech-table.component.html",
  styleUrls: ["./highspeedstrech-table.component.css"],
})
export class HighspeedstrechTableComponent implements OnInit {
  public materialId;
  trialDataDetail = [];
  trialDataDetailss = [];
  one = []; //试验结果
  two = []; //参考数据
  mater = '';//试验结果中的牌号
  table1 = [
    "测试机构",
    "开始检测日期",
    "检测结束日期",
    "执行标准",
    "试验设备",
    "试验方法",
    "取样方向",
  ];
  table2 = [
    "材料牌号",
    "屈服强度Rp(MPa)",
    "抗拉强度Rm(MPa)",
    "断后伸长率A(％)",
    "弹性模量E(MPa)",
    "杨氏模量(MPa)",
    "泊松比",
  ];
  table3 = [
    "formYieldStrength",
    "formTensileStrength",
    "formModulusOfElasticity",
    "formElongation",
    "youngModulu",
    "poissonRatio",
  ];
  table4 = [
    "拉伸速率",
    "样件编号",
    "样品厚度t/mm(实测值)",
    "标距段宽度w/mm(实测值)",
    "屈服强度(MPa)",
    "抗拉强度(MPa)",
    "断后伸长率(%)",
    "拉伸速度(m/s)",
  ];
  width = [
    "120px",
    "150px",
    "180px",
    "180px",
    "180px",
    "180px",
    "180px",
    "150px",
  ];
  table5 = [
    "testTarget",
    "sampleCode",
    "thickness",
    "gaugeDistance",
    "yieldStrength",
    "tensileStrength",
    "elongation",
    "stretchingSpeed",
  ];
  table6 = [
    "testOrganization",
    "dates",
    "dateEnds",
    "standard",
    "equipment",
    "testMethod",
    "direction",
  ];
  speeds = []; //真塑性应力应变未延伸到1速率
  strainData = []; //应变
  stress = []; //应力
  nzWidthConfig4 = []; //未延伸到1的表格列宽
  nzScrolls = {}; // 表格总宽度，否则列宽不生效
  options = {};
  isVisible = false;
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private ApiService: ApiService,
    private GaussService: GaussService,
    private NameService:NameService
  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
    this.NameService.changeName$.subscribe(n => {this.mater = n;console.log( this.mater)})

  }

  ngOnInit() {
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  changeisVisible(){
    this.isVisible = false
  }
  contrastTable(params, des) {
    let data = [];
    let xData = [];
    for (const iterator of this.one) {
      data.push(iterator[params]);
      xData.push(iterator["sampleCode"]);
    }
    let gauss = this.GaussService.gauss(data);
    let hist = this.GaussService.hist(data);
    // let xAll = gauss.x.concat(hist.pxLast);
    // xAll.sort((a, b) => {
    //   return Number(a) - Number(b);
    // });
    this.isVisible = true
    //正态分布图
    this.options = this.GaussService.PlotPicture(
      des,
      hist.data1,
      gauss.xGauss,
    );
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getHighSpeedStrechDataDetails(this.materialId).then(
      (res: any) => {
        this.trialDataDetail = res;
        for (let a = 0; a < this.trialDataDetail.length; a++) {
          if (this.trialDataDetail[a].standard == null) {
            this.two.push(this.trialDataDetail[a]);
          } else {
            this.one.push(this.trialDataDetail[a]);
          }
        }
        if(this.one.length){
          this.one[0].dates =  this.ApiService.handleTime(this.one[0].dates);
          this.one[0].dateEnds =  this.ApiService.handleTime(this.one[0].dateEnds);
        }
      }
    );
  }

  public async GetTrialDataDetailss() {
    await this.ApiService.getHighSpeedStrechDataDetailStressStrainExtends(
      this.materialId
    ).then((res: any) => {
      this.trialDataDetailss = res;
      let speed = []; //速率
      this.trialDataDetailss.map((val) =>
        speed.push(val.realPlasticTestTarget)
      );
      this.speeds = unique1(speed);
      this.nzWidthConfig4[0] = "130px";
      for (let c = 1; c < this.speeds.length + 1; c++) {
        this.nzWidthConfig4[c] = "110px";
      }
      this.nzScrolls = { x: this.speeds.length * 110 + 130 + "px" };
      let arr3 = []; //试验结果按照realPlasticTestTarget分类
      let strain = []; //应变
      arr3 = classitem(this.trialDataDetailss, "realPlasticTestTarget",'highSpeedStrechDataDetailId'); //延伸到1
      arr3[0].List.map((val) => strain.push(val.realPlasticStrainHalf));
      this.strainData = notempty(strain);
      for (let b = 0; b < this.strainData.length; b++) {
        this.stress[b] = [];
        for (let a = b;a < this.trialDataDetailss.length;a += this.trialDataDetailss.length / arr3.length) {
          this.stress[b].push(this.trialDataDetailss[a].realPlasticStressHalf);
        }
      }
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
