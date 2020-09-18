import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {getname} from 'src/app/picture'

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-flanging-clasp-picture',
  templateUrl: './flanging-clasp-picture.component.html',
  styleUrls: ['./flanging-clasp-picture.component.css']
})
export class FlangingClaspPictureComponent implements OnInit {
  public materialId
  trialDataDetail=[]

  ImgPathOne=[]
  name=[]
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
    await this.ApiService.getFlangingClaspDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne=getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    })    
  }
}
