import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
// import {groupBy ,max ,exist,PlotPicture} from "../../../picture"
import {PlotPicture,GetTrialDataDetails} from "../../../picture"

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
 bh=[] //样件编号
 last=[] //渲染数据
  table=[{
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"]
}
]
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
      this.bh = res.sampleCode,this.arr3 = res.requirement,this.ys = res.element,this.last = res.data,this.trialDataDetail = res.trialDataDetail
    })
  }


}
