import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dent-resistance-picture',
  templateUrl: './dent-resistance-picture.component.html',
  styleUrls: ['./dent-resistance-picture.component.css']
})
export class DentResistancePictureComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  one=[]
  two=[]
  three=[]
  four=[]
  ImgPathOne=[]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/cementingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      this.one=this.trialDataDetail[0].fileString.split(";")
    let a=this.one.length
    for(let b=0;b<a-1;b++){
this.two.push(this.one[b])
    }
    this.three=this.two.toString().split(/[_.]/)
    let d=this.three.length
    for(let f=1;f<d;f+=2){
this.four.push(this.three[f])
    }
for(let c=0;c<this.two.length;c++){
  let picture=this.two[c]
  this.ImgPathOne.push(`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
}
    }) 
    
  }
}
