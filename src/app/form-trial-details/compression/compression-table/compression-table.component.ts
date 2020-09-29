import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-compression-table',
  templateUrl: './compression-table.component.html',
  styleUrls: ['./compression-table.component.css']
})
export class CompressionTableComponent implements OnInit {
  public materialId
  trialDataDetail = []
  table1=[
    "测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"
  ]
  table2=['样件编号','试样宽','试样厚','试样直径','试样长度','抗压强度(MPa)','规定非比例压缩强度(MPa)','压缩弹性模量(MPa)']
  table3=['sampleCode','width','thickness','diameter','length','compressiveStrength','nonProportionalCompressStrenth','compressOfElasticity']
  table4=['150px','100px','100px','100px','100px','150px','150px','150px']
  table5=["testOrganization","dates","dateEnds","standard","equipment","testMethod"]
  constructor(    private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { 
      this.route.pathFromRoot[1].params.subscribe(params => {
        this.materialId = params['materialId'];
        })
    }

  ngOnInit() {    
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getCompressDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      if(this.trialDataDetail.length){
            this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates);
            this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds);
      }
    })    
  } 
}
