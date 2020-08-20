import { Component, OnInit } from '@angular/core';
import pdf from 'pdfobject'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-metallographic-report',
  templateUrl: './metallographic-report.component.html',
  styleUrls: ['./metallographic-report.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class MetallographicReportComponent implements OnInit {
  materialId
  trialDataDetails=[]

  constructor(
    private router: Router,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetailss() ; 

  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`/api/hangang/materialTrial/metallographicDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      this.common(this.trialDataDetails[0]?this.trialDataDetails[0].fileKey:'')
    })  

  }
  //处理文件,每个实验项目只应该有一个报告，但如果上传多个报告会全部存进数据库，但只能预览第一个
  //最好在导入的时候如果不是pdf或者多个pdf就禁止导入。
  //再次上传会覆盖之前的报告和全部数据，报告只能是pdf,不然不能预览
  //图片可以导入多个没有限制，但是实验项目的文件夹中文件数量太多也会导入失败
common(a){
  if(a){
    //是否会一次返回多个报告名未测试,如果返回多条报告名只取第一个报告预览
    let p= a.slice(0,a.length-1)   ;
    let arr = p.split(";")//报告名用分号分隔的
    console.log(arr)
    let hz = arr[0].slice(arr[0].lastIndexOf(".")+1)
    if(hz == "pdf"){
   let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${arr[0]}`//根据报告名返回文件流,如果不是pdf会直接返回下载
   pdf.embed(b, "#pdf1")}}
}
}
