import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { MetallographicPictureComponent } from 'src/app/form-trial-details/metallographic/metallographic-picture/metallographic-picture.component';
import { ApiService } from 'src/app/api.service';
import {getname} from 'src/app/picture'

@Component({
  selector: 'app-cementing-picture',
  templateUrl: './cementing-picture.component.html',
  styleUrls: ['./cementing-picture.component.css']
})
export class CementingPictureComponent implements OnInit {
 materialId = ''
trialDataDetail=[]
name=[]
ImgPathOne=[]
  constructor(private router: Router,
    public http: HttpClient,
    // public MetallographicPictureComponent: MetallographicPictureComponent,
    public ApiService: ApiService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getCementingDataDetails( this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne=getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    }) 
    
  }
}
