import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {getname} from 'src/app/picture'

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-painting-picture',
  templateUrl: './painting-picture.component.html',
  styleUrls: ['./painting-picture.component.css']
})
export class PaintingPictureComponent implements OnInit {
  public materialId
  trialDataDetail=[]
name=[]
  ImgPathOne=[]
  constructor( private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,

    ) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getPaintingDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne=getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    }) 
    
  }
}
