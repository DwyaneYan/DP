import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-typical-part',
  templateUrl: './typical-part.component.html',
  styleUrls: ['./typical-part.component.css']
})
export class TypicalPartComponent implements OnInit {
  nzOptions = []
  values = [];
  isVisible = false;
  constructor(
    private router: Router,
    private ApiService: ApiService,
    private message: NzMessageService
  ) { }

  materialId
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');

    
  }
  //获取零件目录树
  getTree(){
    let temp = [];
this.ApiService.getAllPart().then((res:any)=>{
         let carName = this.sort_pro(res,['carName']);
         console.log(carName)
        let length = carName.length;
        //this.nzOptions =  new Array(length)
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
  goVim(){
    //获取此材料绑定的零件信息来拼接跳转路由
    //目前只能获取到这条材料第一次绑定的零件信息
    this.ApiService.getPart(this.materialId).then((res:any)=>{
        if(res.ProjectId)
    {window.open(`${this.ApiService.toVIm}/car-model?carModelId=${res.ProjectId}&type=hangang&directoryId=${res.directoryId}&filterName=${res.Name}`)}
    else{
      this.message.info('请先绑定零件');
    }

    })
  }
  openDialog(){
    // debugger;
    this.isVisible = true;
    this.values = []
    this.getTree();

    console.log(this.nzOptions)

  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
let a = this.values[1].directoryId;
//点击确定就绑定，可否重新绑定？
 this.ApiService.bindMater(a,this.materialId).then((res:any)=>{

 })
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
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
    onChanges(values: any): void {
      console.log(values, this.values);
    }
}
