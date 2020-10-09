import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import {GetTrialDataDetails,clickItem,PlotPicture} from "../../../picture"

@Component({
  selector: 'app-prohibited-substance-table',
  templateUrl: './prohibited-substance-table.component.html',
  styleUrls: ['./prohibited-substance-table.component.css']
})
export class ProhibitedSubstanceTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
 arr3=[]//要求值
 ys=[]//元素名称
 clickItem = clickItem
 bh=[] //样件编号
 last=[] //渲染数据
 loading = true;
 options = {};
 isVisible = false; //对比框
 groupCode = []
  table=[{
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
    width:['120px','120px','120px','150px','150px','']

}
]
tableCellCls = "ellipsis";
activeTdIdx = 0;
  constructor( private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { 
      this.route.pathFromRoot[1].params.subscribe(params => {
        this.materialId = params['materialId'];
        })
    }

  ngOnInit() {
    GetTrialDataDetails('getProhibitedSubstanceDataDetails',this.materialId,this.ApiService).then(res=>{
      this.bh = res.sampleCode,this.arr3 = res.requirement,this.ys = res.element,this.last = res.data,this.trialDataDetail = res.trialDataDetail;
      this.loading = false;this.groupCode = res.groupCode
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
}
