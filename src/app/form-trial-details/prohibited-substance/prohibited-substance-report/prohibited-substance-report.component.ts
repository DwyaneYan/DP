import { Component, OnInit } from '@angular/core';
import pdf from 'pdfobject'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-prohibited-substance-report',
  templateUrl: './prohibited-substance-report.component.html',
  styleUrls: ['./prohibited-substance-report.component.css']
})
export class ProhibitedSubstanceReportComponent implements OnInit {
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
    let api =`http://localhost:60001/api/hangang/materialTrial/prohibitedSubstanceDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      var p= this.trialDataDetails[0].fileKey.slice(0,this.trialDataDetails[0].fileKey.length-1)      
     var b=`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${p}`
     pdf.embed(b, "#pdf1")
    })  

  }


}
