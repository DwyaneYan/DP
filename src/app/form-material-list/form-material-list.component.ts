import { Component, OnInit, Input, OnChanges ,Output,EventEmitter} from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { valHooks } from 'jquery';
// import {Router,} from "@angular/router";
import {button} from 'src/app/picture'
import { CommonService } from '../common.service'
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-form-material-list',
  templateUrl: './form-material-list.component.html',
  styleUrls: ['./form-material-list.component.css']
})
export class FormMaterialListComponent implements OnChanges, OnInit {
  button = button
  listOfAllData = [];
  displayData = [];
  checkList = [];
  public allmaterial = [];
  totalCount = 0;//显示数量
  total = 0;//实际数量
  checkbox = false;
  allChecked = false;
  indeterminate = false;
  disabled = false
  dataAll = [] //数据库所有材料
  @Input() data = []; //筛选得到的所有材料列表数据
  @Output() private reGet = new EventEmitter<string>();
    //对比按钮点击事件
    contrast = true
    delete = true
  title = ''
  
  constructor(
    public ApiService: ApiService,
    private modalService: NzModalService,
    private nzMessageService: NzMessageService,
    // private Router: Router,
    private commonService: CommonService, //组件模板要使用这个服务

  ) { }

  ngOnChanges() {
    this.contrasts = []
    this.listOfAllData = [];
   // this.listOfAllData = this.data //全部材料实际显示的,
    this.data.forEach((val,index) => {
      this.listOfAllData.push(val.materialDto);
      this.listOfAllData[index]['trials'] = val.trials//数组
    })
    this.listOfAllData.map(item => {
      if (item.trials.length > 2 ) {
        item.trialAfter = item.trials[0] + ','  + item.trials[1] + '\n' + item.trials.slice(2,4).toString()
      }
      else if (item.trials.length <= 2) {
        item.trialAfter = item.trials
      }
      // else {
      //   item.trialAfter = item.trials.slice(0,4).toString()
      // }
    })
    console.log(this.listOfAllData)
    this.totalCount = this.listOfAllData.length; //数据个数
    this.listOfAllData.map(val=>{val.checked = false}) //不设置checked属性值是undefined  
    this.listOfAllData.forEach(val=>{
      for(let b= 0;b<this.total;b++){
        if(this.dataAll[b].materialDto.id == val.id){
          val.checked = this.dataAll[b].materialDto.checked
        }
      }
    })
    console.log(this.listOfAllData)

  }
  //#region 模块 

  ngOnInit(): void {
  }
//处理筛选
  screening(){
    this.ApiService.GetMater({}).then((res:any)=>{
      this.dataAll = res.data //所有数据
      this.total = res.data.length //所有数据数量
      this.dataAll.forEach(val=>{val.materialDto.checked = false})//全部未选中
    })
  }

  contrasts = []
  contrastID
  //选中的回调
  refreshStatus(val,id): void {
    //选中
    if (val) {
      this.dataAll.map(el=>{
        for(let a= 0;a<this.totalCount;a++){
          if(this.listOfAllData[a].id == el.materialDto.id){
            el.materialDto.checked = this.listOfAllData[a].checked
          }
        }
          })
      this.checkList = this.dataAll.filter(value => value.materialDto.checked);
      if (this.checkList.length > 5) {
        this.disabled = true;
        this.modalService.warning({
          nzTitle: '提示',
          nzContent: '最多选择6条数据！'
        });
      }
    } 
    //取消选中
    else {
      this.checkList = this.checkList.filter(value => value.materialDto.id !== id )
      this.dataAll.map(el=>{
        for(let a= 0;a<this.totalCount;a++){
          if(this.listOfAllData[a].id == el.materialDto.id){
            el.materialDto.checked = this.listOfAllData[a].checked
          }
        }
          })
         
    }
  }
//选中列表移除item
  shanchu(x) {
    for (var j = 0; j < this.checkList.length; j++) {
      if (this.checkList[j].materialDto.id == x) {
        this.checkList.splice(j, 1);
        this.disabled = false;
      }
      for (const vari of this.listOfAllData) {
        if (vari.id == x) {
          vari.checked = false
        }
      }
      this.dataAll.map(val=>{
        if(val.materialDto.id == x){
            val.materialDto.checked = false
        }
      })
    }

  }
  select() {
    this.contrasts = []
    this.contrastID = ''
    this.checkList.map(val=>{this.contrasts.push(val.materialDto.id)})
    this.contrastID = this.contrasts.toString();//直接把整个字符串作为查询参数

  }
  

  compared() {
    this.checkbox = !this.checkbox; //表格第一列
    this.delete = !this.delete; //删除按钮禁用
    this.checkList = [];  //选中的对比材料
    this.contrastID = '';
    this.disabled = false; //第一列不禁用
    this.listOfAllData.map(val=>val.checked = false) //第一列全部取消选中
    this.contrasts = [] //选中的id
    this.screening()

  }
  //开始删除按钮
  del(){
    this.checkbox = !this.checkbox;
    // console.log(this.delete,this.checkbox)
    this.listOfAllData.map(val=>val.checked = false)
    this.screening()
    this.contrast = !this.contrast;//禁用对比按钮
    this.checkList = [];
    this.contrasts = []
    this.disabled = false//第一列不禁用
  }

//确定删除
  confirm(): void {
    let materialIds = []//id数组
    let permissions = JSON.parse(sessionStorage.getItem("permissions"))
    let oper_name = undefined 
    let oper_ip = "127.0.0.1"
    if (permissions && permissions.user) {
      oper_name = permissions.user.userName //用户名
      // oper_ip = permissions.user.phonenumber
    }   
    this.checkList.map(val => materialIds.push(val.materialDto.id))
    let obj = {
      materialIds,
      oper_name,
      oper_ip
    }
    this.ApiService.delMaterials(obj).then((res:any)=>{
      this.nzMessageService.info('删除成功');
      this.reGet.emit();
      this.checkList = []
    }).catch((res:any)=>{console.log(33333333333333)})

  }
  getTitle(){
    this.title = `确定删除这${this.checkList.length}条材料？`
  }
}
