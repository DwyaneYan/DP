import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import {PlotPicture,GetTrialDataDetails} from "../../../picture"
@Component({
  selector: 'app-chemicalelement-table',
  templateUrl: './chemicalelement-table.component.html',
  styleUrls: ['./chemicalelement-table.component.css']
})
export class ChemicalelementTableComponent implements OnInit {
  public materialId
  trialDataDetail = []
  ys = []//元素名称、
  arr3 = []//要求值
  bh = [] //样件编号
  last = [] //处理后的渲染数据数组,二维数组
  groupCode = []
  table = [{
    table: "table1",
    one: ["测试机构", '开始检测日期', '检测结束日期', "执行标准", "试验设备", "试验方法"],
    key: ["testOrganization", "dates", "dateEnds", "standard", "equipment", "testMethod"]
  },
  {
    table: "table2",
    one: ["样件编号"],
    key: ["sampleCode"]
  },
  ]
  isVisible = false; //对比框
  options = {}; //折线图配置项
  loading = true;
  tableCellCls = "ellipsis";
  activeTdIdx = 0;
  nzWidthConfig4 = []; //未延伸到1的表格列宽

  constructor(private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
   }

  ngOnInit() {
      GetTrialDataDetails('getChemicalElementDataDetails',this.materialId,this.ApiService).then(res=>{ this.ys = res.element;this.arr3 = res.requirement;this.bh = res.sampleCode;
      this.last = res.data;this.trialDataDetail = res.trialDataDetail;
      this.loading = false;
    })
  }
  contrastTable(i,title) {
    let data = []
    this.groupCode[i].forEach(element => {
          data.push(element.contentRatio)
        });
    this.isVisible = true
    this.options = PlotPicture(data, this.bh,title);
  }
  changeisVisible(){
    this.isVisible = false
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

