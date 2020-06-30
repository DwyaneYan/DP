import { Component, OnInit } from '@angular/core';
import pdf from 'pdfobject'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MetallographicReportComponent } from 'src/app/form-trial-details/metallographic/metallographic-report/metallographic-report.component';

@Component({
  selector: 'app-highspeedstrech-report',
  templateUrl: './highspeedstrech-report.component.html',
  styleUrls: ['./highspeedstrech-report.component.css']
})
export class HighspeedstrechReportComponent implements OnInit {

  materialId
  trialDataDetails

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
  one=[]
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`/api/hangang/materialTrial/highSpeedStrechDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      for(let a=0;a<this.trialDataDetails.length;a++)
      {if(this.trialDataDetails[a].standard!=null){
    this.one.push(this.trialDataDetails[a])

  }
      }
      this.MetallographicReportComponent.common(this.one[0].fileKey)

    })  

  }
}
