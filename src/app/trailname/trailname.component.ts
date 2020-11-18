import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { menu ,button} from '../picture'
@Component({
  selector: 'app-trailname',
  templateUrl: './trailname.component.html',
  styleUrls: ['./trailname.component.css']
})
export class TrailnameComponent implements OnInit {
  public materialId
  p1='' //数据表
  p2='' //数据图
  p3='' //报告
  p4 = '' //典型零部件
  button = button
  currentInfo = menu.filter((item)=>{return item.name == this.route.snapshot.routeConfig.path})
  constructor(
    private route: ActivatedRoute,
    public ApiService: ApiService,
  ) { 
    this.route.parent.params.subscribe(params => {
      this.materialId = params['materialId'];
      })

  }

  ngOnInit() {
    console.log(menu,this.currentInfo,this.route.snapshot.routeConfig.path)
    this.p1 = this.currentInfo[0].children[0]
    this.p2 = this.currentInfo[0].children[1]
    this.p3 = this.currentInfo[0].children[2]
    this.p4 = this.currentInfo[0].children[3]
  }
  deleteTrial(){
    this.ApiService.deleteTrial(this.materialId,this.currentInfo[0].names)
  }
}
