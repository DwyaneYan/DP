import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highcyclefatigue-picture',
  templateUrl: './highcyclefatigue-picture.component.html',
  styleUrls: ['./highcyclefatigue-picture.component.css']
})
export class HighcyclefatiguePictureComponent implements OnInit {
  public materialId
  trialDataDetail
  file=[]
  files=[]
  filess=[]
  ImgPathOne=[]
  filesss=[]
  filessss=[]
  file1
  file2=[]
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highCycleFatigueDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    }) 
this.file.push(this.trialDataDetail[0].fileString)
    this.files=this.file.toString().split(';')
    // this.fenge(this.files,this.file,";")
    // this.xunhuan()
    for(let a=0;a<(this.files.length-1);a++){
this.filess.push(this.files[a])
    }
    this.filesss=this.filess.toString().split('_');
    for(let a=1;a<this.filesss.length;a+=2){
this.filessss.push(this.filesss[a])
    }
    this.file1=this.filessss.toString().split('.');
    for(let a=0;a<this.file1.length;a+=2){
      this.file2.push(this.file1[a])
          }
for(let a=0;a<this.filess.length;a++){
  let picture=this.filess[a]
  this.ImgPathOne.push(`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
}
  }
  xunhuan(p1,arry,p2,arry2){
    for(let a=p1;a<arry.length;p2){
arry2.push(arry[a])
    }
  }
  fenge(arry1,arry2,p){
    arry1=arry2.toString().split(`${p}`)
  }
}
