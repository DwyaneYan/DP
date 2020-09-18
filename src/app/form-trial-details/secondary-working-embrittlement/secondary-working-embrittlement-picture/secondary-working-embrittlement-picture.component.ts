import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import {getname} from 'src/app/picture'

@Component({
  selector: 'app-secondary-working-embrittlement-picture',
  templateUrl: './secondary-working-embrittlement-picture.component.html',
  styleUrls: ['./secondary-working-embrittlement-picture.component.css']
})
export class SecondaryWorkingEmbrittlementPictureComponent implements OnInit {
  public materialId
  trialDataDetail
name=[]
  ImgPathOne=[]

  constructor(private router: Router,
    public http: HttpClient,
    private ApiService: ApiService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
   this. GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {

    await this.ApiService.getSecondaryWorkingEmbrittlementDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne=getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    }) 
    
  }

}
