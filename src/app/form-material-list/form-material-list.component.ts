import { Component, OnInit, Input, OnChanges ,Output,EventEmitter} from '@angular/core';
import { MaterialListService } from './material-list.service'
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { valHooks } from 'jquery';
import {Router,} from "@angular/router";
import {button} from 'src/app/picture'

@Injectable({
  providedIn: 'root'
})
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
  @Output() private reGet=new EventEmitter<string>();
    //对比按钮点击事件
    contrast = true
    delete = true
    title = ''
  constructor(
    private materiallistService: MaterialListService,
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    private ApiService: ApiService,
    private modalService: NzModalService,
    private nzMessageService: NzMessageService,
    private Router: Router,
  ) { }

  ngOnChanges() {
    this.contrasts = []
    this.listOfAllData = this.data //全部材料实际显示的,
    this.totalCount = this.listOfAllData.length; //数据个数
    this.listOfAllData.forEach(val=>{val.checked = false}) //不设置checked属性值是undefined
        this.listOfAllData.forEach(val=>{
          for(let b= 0;b<this.total;b++){
            if(this.dataAll[b].id == val.id){
    val.checked = this.dataAll[b].checked
            }
          }
        })
  }
  //#region 模块 

  ngOnInit(): void {
    // this.listOfAllData = this.data //全部材料;
  }
//处理筛选
  screening(){
    this.ApiService.GetMater({}).then((res:any)=>{
      this.dataAll = res.items //所有数据
      this.total = res.totalCount //所有数据数量
      this.dataAll.forEach(val=>{val.checked = false})//全部未选中

    })
  }

getURl(id,data){
  //查询这条材料做了哪些试验
  this.ApiService.GetTrials(id).then((res: any) => {
    let trialName = []
    let menu = this.FormExperimentalItemComponent.menu
    res.forEach((val) => {
      trialName.push(val.name)
    });
    let length = menu.length
    for (let a = 0; a < length; a++) {
      if (trialName.includes(menu[a].names) && button(menu[a].name)) {
        if (button(menu[a].children[0])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/table`);  
         }
        else if (button(menu[a].children[1])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/picture`);  
        }
        else if (button(menu[a].children[2])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/report`);  
        }
        else if (button(menu[a].children[3])){ 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/typical-part`);  
        }
        break
      }
      else{
        this.Router.navigateByUrl(`/display/${id}`);  
      }
    }
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
          if(this.listOfAllData[a].id == el.id){
            el.checked = this.listOfAllData[a].checked
          }
        }
          })
          this.checkList = this.dataAll.filter(value => value.checked);
          console.log( this.checkList)
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
      this.checkList = this.checkList.filter(value => value.id !== id )
      this.dataAll.forEach(el=>{
        for(let a= 0;a<this.totalCount;a++){
          if(this.listOfAllData[a].id == el.id){
            el.checked = this.listOfAllData[a].checked
          }
        }
          })
         
    }
  }

  shanchu(x) {
    for (var j = 0; j < this.checkList.length; j++) {
      if (this.checkList[j].id == x) {
        this.checkList.splice(j, 1);
        this.disabled = false;
      }
      for (const vari of this.listOfAllData) {
        if (vari.id == x) {
          vari.checked = false
        }
      }
      this.dataAll.forEach(val=>{
        if(val.id == x){
            val.checked = false
        }
      })
    }

  }
  select() {
    this.contrasts = []
    this.contrastID = ''
    this.checkList.map(val=>{this.contrasts.push(val.id)})
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
  //删除材料
  del(){
     this.checkbox = !this.checkbox;
    console.log(this.delete,this.checkbox)
     this.listOfAllData.map(val=>val.checked = false)
this.screening()
     this.contrast = !this.contrast;//禁用对比按钮
     this.checkList = [];
     this.contrasts = []
this.disabled = false//第一列不禁用
  }
  cancel(): void {
  }

  confirm(): void {
    let ids = []
    this.checkList.map(val=>ids.push(val.id))
    console.log(ids)
    this.ApiService.delMaterials(ids).then((res:any)=>{
      this.nzMessageService.info('删除成功');
      this.reGet.emit();
      this.checkList = []
    })

  }
  getTitle(){
    this.title = `确定删除这${this.checkList.length}条材料？`

  }
}
