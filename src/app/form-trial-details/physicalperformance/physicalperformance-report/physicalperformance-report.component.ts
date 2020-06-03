import { Component, OnInit } from '@angular/core';
import pdf from 'pdfobject'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MetallographicReportComponent } from 'src/app/form-trial-details/metallographic/metallographic-report/metallographic-report.component';

@Component({
  selector: 'app-physicalperformance-report',
  templateUrl: './physicalperformance-report.component.html',
  styleUrls: ['./physicalperformance-report.component.css']
})
export class PhysicalperformanceReportComponent implements OnInit {
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
    let api =`http://localhost:60001/api/hangang/materialTrial/physicalPerformanceDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
    this.MetallographicReportComponent.common(this.trialDataDetails[0].fileKey)
      
    })  

}
}