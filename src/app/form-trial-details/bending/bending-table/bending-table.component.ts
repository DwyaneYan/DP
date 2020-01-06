import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bending-table',
  templateUrl: './bending-table.component.html',
  styleUrls: ['./bending-table.component.css']
})
export class BendingTableComponent implements OnInit {

  materialId
  trialDataDetail

  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit(   
  ) {
    this.materialId = 'dab512c9-34b4-4c78-8e12-4a6459ed6c23'
    this.GetTrialDataDetails()
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/bendingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
}
