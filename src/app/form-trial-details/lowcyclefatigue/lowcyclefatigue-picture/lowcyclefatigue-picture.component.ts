import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import {getname} from 'src/app/picture'

@Component({
  selector: 'app-lowcyclefatigue-picture',
  templateUrl: './lowcyclefatigue-picture.component.html',
  styleUrls: ['./lowcyclefatigue-picture.component.css']
})
export class LowcyclefatiguePictureComponent implements OnInit {
  public materialId
  trialDataDetail

  ImgPathOne=[]
name=[]
  constructor( private router: Router,
    public http: HttpClient,
    private ApiService: ApiService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {

    await this.ApiService.getLowCycleFatigueDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne=getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    }) 

  }


 
}
