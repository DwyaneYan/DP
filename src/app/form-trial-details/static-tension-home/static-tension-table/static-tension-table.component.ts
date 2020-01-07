import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-tension-table',
  templateUrl: './static-tension-table.component.html',
  styleUrls: ['./static-tension-table.component.css']
})
export class StaticTensionTableComponent implements OnInit {

  public materialId

  //存放查到的静态拉伸详情
  public trialDataDetail = [] 


  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
      // console.log(this.materialId)

    this.GetTrialDataDetails()
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }

}
