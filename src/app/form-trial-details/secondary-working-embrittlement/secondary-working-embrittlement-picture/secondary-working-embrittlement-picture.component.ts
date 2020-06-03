import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MetallographicPictureComponent } from 'src/app/form-trial-details/metallographic/metallographic-picture/metallographic-picture.component';

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
    public MetallographicPictureComponent: MetallographicPictureComponent,
    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
   this. GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/secondaryWorkingEmbrittlementDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= this.MetallographicPictureComponent.getname(this.trialDataDetail[0].fileString).afterName
      this.ImgPathOne=this.MetallographicPictureComponent.getname(this.trialDataDetail[0].fileString).ImgPathOne
    }) 
    
  }

}
