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
      this.common(this.trialDataDetails[0].fileKey)
    })  

  }
  //处理文件
common(a){
  if(a){
    let p= a.slice(0,a.length-1)      
   let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${p}`
   pdf.embed(b, "#pdf1")}
}
}
