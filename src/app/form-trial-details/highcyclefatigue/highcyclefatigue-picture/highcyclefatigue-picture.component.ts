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
    this.files=this.fenge(this.file,';')
    for(let a=0;a<(this.files.length-1);a++){
this.filess.push(this.files[a])
    }
    this.filesss=this.fenge(this.filess,/[_.]/);
    for(let a=1;a<this.filesss.length;a+=2){
this.filessss.push(this.filesss[a])
    }
    
for(let a=0;a<this.filess.length;a++){
  let picture=this.filess[a]
  this.ImgPathOne.push(`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
}
  }

  fenge(arry,p){
    let arry1=arry.toString().split(p)
    return arry1
  }
}
