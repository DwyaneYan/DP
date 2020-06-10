import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class MetallographicPictureComponent implements OnInit {
  public materialId
  file=[]
  trialDataDetail=[]  //存放请求到的试验结果
  files
  filess=[]
  a1
  a2=[]
  ImgPathOne=[]
  name=[]
  constructor(
    private router: Router,
    public http: HttpClient,   
    public ApiService: ApiService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }

  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/metallographicDataDetails/${materialId}`;
    await this.ApiService.getMetallographicDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name=this.getname(this.trialDataDetail[0].fileString).afterName
      this.ImgPathOne=this.getname(this.trialDataDetail[0].fileString).ImgPathOne
      console.log(this.ImgPathOne)
    })   
  }

 

//获取图片名
  getname(allName){
    var afterName=[]
    var ImgPathOne=[]
    if(allName){
    let one=allName.split(";")
 one.pop()
 let two=[]
        let length=one.length
        for(let a=0;a<length;a++){
          let pattern = /\.{1}[a-z]{1,}$/;
          if (pattern.exec(one[a]) !== null) {
            two.push(one[a].slice(0, pattern.exec(one[a]).index));
        } else {
          two.push(one[a]);
    
        }

}
//two是文件名

let z=two.length

for(let a=0;a<z;a++)
{
 let d= two[a].indexOf("_")
 afterName.push(two[a].slice(d+1))
}
//this.material是处理后的文件名

for(let a=0;a<length;a++){
  let picture=one[a]
  ImgPathOne.push(`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
} 

  }
  return {afterName,ImgPathOne}
}
}