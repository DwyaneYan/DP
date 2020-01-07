import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit(   
  ) {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
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
