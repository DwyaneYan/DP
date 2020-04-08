import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs } from 'ng-zorro-antd';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
export class MetallographicPictureComponent implements OnInit {
  public materialId
  file=[]
  trialDataDetail  //存放请求到的试验结果
  files
  filess=[]
  a1
  a2=[]
  ImgPathOne=[]
  constructor(
    private router: Router,
    public http: HttpClient,    
    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/metallographicDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      
    })   
    console.log(this.trialDataDetail) 
    this.file.push(this.trialDataDetail[0].fileString)
this.files=this.fenge(this.file,";")
        for(let a=0;a<(this.files.length-1);a++){
this.filess.push(this.files[a])
    }
    this.a1=this.fenge(this.filess,/[_.]/)
    for(let a=1;a<this.a1.length;a+=2){
this.a2.push(this.a1[a])
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