import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
export class MetallographicPictureComponent implements OnInit {
  public materialId

  trialDataDetail  //存放请求到的试验结果

  ImgPathOne: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingOne?Id="
  ImgPathTwo: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingTwo?Id="
  ImgPathThree: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingThree?Id="
  ImgPathFour: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingFour?Id="

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
      console.log(this.trialDataDetail)
    })   
    //拼接出完整的图片URL
    this.ImgPathOne = this.ImgPathOne + this.trialDataDetail[0].id;
    this.ImgPathTwo = this.ImgPathTwo + this.trialDataDetail[0].id;
    this.ImgPathThree = this.ImgPathThree + this.trialDataDetail[0].id;
    this.ImgPathFour = this.ImgPathFour + this.trialDataDetail[0].id;   
    // console.log(this.ImgPath);
  }

}
