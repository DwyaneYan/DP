import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {PlotPicture,clickItem} from '../../../picture'
@Component({
  selector: 'app-bending-table',
  templateUrl: './bending-table.component.html',
  styleUrls: ['./bending-table.component.css']
})
export class BendingTableComponent implements OnInit {
  clickItem = clickItem
  materialId = ''
  trialDataDetail = [] //试验所有信息,全部包含在一个接口中
  table1=["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"]
  width1 = ['120px','120px','120px','150px','150px','']
  table2=['样件编号','试样宽','试样厚','试样直径','试样长度','跨距','抗弯强度(MPa)','规定非比例弯曲强度(MPa)','弯曲弹性模量(MPa)']
  table3=['sampleCode','width','thickness','diameter','length','span','bendingStrength','nonProportionalBendingStrenth','bendingOfElasticity']
  table4=['120px','90px','90px','90px','90px','80px','120px','150px','']
  table5=["testOrganization","dates","dateEnds","standard","equipment","testMethod"]
  loading = true
  isVisible = false;  //弯曲各样本对比框
  options = {}; //指定图表的配置项和数据
  tableCellCls = "ellipsis";
  activeTdIdx = 0;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private ApiService: ApiService,

  ) {
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
   }

  ngOnInit(   
  ) {
    this.GetTrialDataDetails()
  }

  public  GetTrialDataDetails() {
     this.ApiService.getBendingDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.loading = false
      if(this.trialDataDetail.length){
      this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
      this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
      }
    })    
  }
//对比
  contrastTable(params,des){
    let data = []; //纵坐标
    let xData = []; //对比折线图横坐标
    for (const iterator of this.trialDataDetail){
      data.push(iterator[params]);
      xData.push(iterator['sampleCode']);
    }
    this.isVisible = true;
    //折线图纵坐标 横坐标 图表名
    this.options = PlotPicture(data, xData, des);
  }

  changeisVisible(){
    this.isVisible = false
  }
   //点击行中的列项展开信息
  //  clickItem(tdIdx) {
  //   this.activeTdIdx = tdIdx;
  //   if (this.tableCellCls) {
  //     this.tableCellCls = "";
  //   } else {
  //     this.tableCellCls = "ellipsis";
  //   }
  // }
}
