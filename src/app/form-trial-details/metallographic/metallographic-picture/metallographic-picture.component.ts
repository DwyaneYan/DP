import { Component, OnInit, AfterViewInit} from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {getname} from 'src/app/picture'
// import PinchZoom from 'pinch-zoom-js'
import {ImgView} from '../../../imgView'


@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class MetallographicPictureComponent implements OnInit{
  public materialId = ''
  trialDataDetail=[]  //存放请求到的试验结果
  ImgPathOne=[]
  name=[]
  constructor(
    private router: Router,
    public http: HttpClient,   
    public ApiService: ApiService,
    ) { }

  ngOnInit() { 
      this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }
  enlarge(src){
    let dataList = this.ImgPathOne;
    var options = {
                    dataList: dataList,
                    currentSrc: src
                };
    ImgView("imgView", options);
  }

  public async GetTrialDataDetails() {
    await  this.ApiService.getMetallographicDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name = getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne = getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    }) 
  }
}