import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { button} from '../picture'

@Component({
  selector: 'app-typical-part',
  templateUrl: './typical-part.component.html',
  styleUrls: ['./typical-part.component.css']
})
export class TypicalPartComponent implements OnInit {
  nzOptions = []
  values = [];
  isVisible = false;
  button = button
  constructor(
    private router: Router,
    private ApiService: ApiService,
    private message: NzMessageService
  ) { }

  materialId = ''
  //  carName = '' //车型名称
  //  partName = '' //零部件名称
  //  projectId = ''//车型id
  //  directoryId = ''//零部件id
  typicalParts = []//所有零部件
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.getPartInfo()   
  }
  //获取这条材料绑定的零件信息
  getPartInfo(){
    this.ApiService.getTypicalPart(this.materialId).then((res:any)=>{
      this.typicalParts = res
    })
  }
  //获取零件目录树
  getTree(){
    let temp = [];
    this.ApiService.getAllPart().then((res:any)=>{
      let carName = this.sort_pro(res,['carName']);
      let length = carName.length;
      for(let a = 0;a<length;a++){
        let length1 = carName[a].children.length;
        temp.push({
          value:carName[a].carName,
          label:carName[a].carName,
          children:[]
        })
        for(let b=0;b<length1;b++){
          temp[a].children.push({
            value:carName[a].children[b],
            label:carName[a].children[b].name,
            isLeaf: true
          })
        } 
      }
      this.nzOptions = temp
      console.log(this.nzOptions)
        
})

  }
  goVim(p){
    window.open(`${this.ApiService.toVIm}/car-model?carModelId=${p.projectId}&type=hangang&directoryId=${p.directoryId}&filterName=${p.name}`,'_self')
  }
  openDialog(){
    this.isVisible = true;
    this.values = []
    this.getTree();//生成可选项数据源
  }
  handleOk(): void {
    // console.log(this.values)
    if (this.values[1]) {
      this.ApiService.bindMater(this.values[1].directoryId,this.materialId).then((res:any)=>{
        if(res.Code ==200){
        this.getPartInfo()
        this.isVisible = false;
        }
      })
    }
    else{
      this.isVisible = false;
    }
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  //把对象数组按照某一个属性进行分类
  sort_pro(data, keys = []) {     //keys可以传一个数组
    var c = [];
    var d = {};
    for (var element of data) {
      let element_keyStr = "";
      let element_key = [];
      let element_keyObj = {};
      for (var key of keys) {
        element_key.push(element[key]);
        element_keyObj[key] = element[key];
      }
      element_keyStr = element_key.join("_");
      if (!d[element_keyStr]) {
        c.push({
          ...element_keyObj,
          children: [element]
        });
        d[element_keyStr] = element;
      } else {
        for (var ele of c) {
          let isTrue = keys.some(key => {
            return ele[key] != element[key];
          });
          if (!isTrue) {
            ele.children.push(element);
          }
        }
      }
    }
    return c;
  }
}
