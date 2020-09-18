import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {getname} from 'src/app/picture'
@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class MetallographicPictureComponent implements OnInit {
  public materialId = ''
  trialDataDetail=[]  //存放请求到的试验结果
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
    await this.ApiService.getMetallographicDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name = getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne = getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
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