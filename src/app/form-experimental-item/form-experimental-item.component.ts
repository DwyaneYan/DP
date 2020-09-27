import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { button ,menu} from 'src/app/picture'
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import{ TrialNameService} from './trial-name.service'
@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class FormExperimentalItemComponent implements OnInit {
  button = button
  @Input() materialId:string //dispaly组件传过来的材料id
  isVisible = false; //传给添加车型弹框组件的值，
  carInfo = [] //所有应用案例信息
  routerLink = [] //菜单栏路由数组
  public trialName = [] //此材料所做的所有试验项目字符串数组
  menu = menu
  constructor(
    public http: HttpClient,
    public ApiService: ApiService,
    private route: ActivatedRoute,
    private _trialName:TrialNameService
  ) { 
    _trialName.changeEmitted$.subscribe(n => {this.trialName = n}); //删除试验项目
    _trialName.changeCarName.subscribe(n => {this.carInfo = n}); //删除车型

  } 

  ngOnInit() {

    this.GetTrials()
    this.getCar();
      let length = this.menu.length
  for(let a=0;a<length;a++){
    this.routerLink[a]=`/display/${this.materialId}/${this.menu[a].name}`
  }
}

 GetTrials(){
   this.ApiService.GetTrials(this.materialId).then((res:any) => {
     this.trialName = []
        res.forEach((val) => {
          this.trialName.push(val.name)
        }); 
        

  })


}



public  getCar(){
   this.ApiService.getCar(this.materialId).then((res: any) => {
    this.carInfo = res
 })


}
//关闭添加车型弹框
public  getCar1(event){
 this.isVisible = event
}

 //弹出添加车型弹框
show(){
  this.isVisible = true;
}

}
