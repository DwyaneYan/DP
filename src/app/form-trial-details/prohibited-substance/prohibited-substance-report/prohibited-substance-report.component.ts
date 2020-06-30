import { Component, OnInit } from '@angular/core';
import pdf from 'pdfobject'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MetallographicReportComponent } from 'src/app/form-trial-details/metallographic/metallographic-report/metallographic-report.component';

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
    public MetallographicReportComponent: MetallographicReportComponent,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetailss() ;

  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`/api/hangang/materialTrial/prohibitedSubstanceDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      this.MetallographicReportComponent.common(this.trialDataDetails[0].fileKey)

    })  

  }


}
