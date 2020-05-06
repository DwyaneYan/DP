import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-flanging-clasp-picture',
  templateUrl: './flanging-clasp-picture.component.html',
  styleUrls: ['./flanging-clasp-picture.component.css']
})
export class FlangingClaspPictureComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  one=[]
  two=[]
  three=[]
  four=[]
  ImgPathOne=[]
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/flangingClaspDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      this.one=this.trialDataDetail[0].fileString.split(";")
      let a=this.one.length
      for(let b=0;b<a-1;b++){
this.two.push(this.one[b])
      }
     this.three= this.two.toString().split(/[_.]/)
     let d=this.three.length
      for(let a=1;a<d;a+=2){
        this.four.push(this.three[a])
            }
            for(let a=0;a<this.two.length;a++){
              let picture=this.two[a]
              this.ImgPathOne.push(`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
            }  
    })    
  }
}
