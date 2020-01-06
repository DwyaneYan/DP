import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    private route: ActivatedRoute,
    public http: HttpClient,

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.materialId = params.get('materialId');
      this.materialId = 'dab512c9-34b4-4c78-8e12-4a6459ed6c23'
      })
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
