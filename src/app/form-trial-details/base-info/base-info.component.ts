import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormBuilder } from '@angular/forms';
import { NameService } from './name.service'
import { button } from '../../picture'
@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  @Input() materialId:string;
  //材料基本信息
  public baseInfo = [] //材料基本信息数组，数组元素只有一个对象
  isVisible = false; //修改材料基本信息弹框
  manufactoryInfo = [] //所有厂家信息
  validateForm = this.fb.group({
    name: [null],
    reelNumber: [null],
    model: [null],
    manufactoryId: [null],
    materialStandard: [null],
    id:[null]
  })
  button = button 
  constructor(
    public http: HttpClient,
    private ApiService: ApiService,
    private fb: FormBuilder,
    private NameService: NameService,

  ) { }

 ngOnInit() {
    this.GetBaseInfo();
  }
//查询材料基本信息
async GetBaseInfo(){
    let params= {
      Id: this.materialId, 
    }
    await this.ApiService.GetMater(params).then((res:any)=>{
      this.baseInfo = res.data;
      if(this.baseInfo.length){
        this.NameService.name.next(this.baseInfo[0].materialDto.name)
        this.validateForm = this.fb.group({
          name: [this.baseInfo[0].materialDto.name],
          reelNumber: [this.baseInfo[0].materialDto.reelNumber],
          model: [this.baseInfo[0].materialDto.model],
          manufactoryId: [this.baseInfo[0].materialDto.manufactoryId],
          materialStandard: [this.baseInfo[0].materialDto.materialStandard],
          id:[this.materialId]
          });  
      }
    })  
  }
  //查询所有厂家
  getManufacturers(){
    this.ApiService.GetManufacturers().then((res:any)=>{
      console.log(res)
      this.manufactoryInfo = res.items
    })
  }
  showModal(): void {
    this.isVisible = true;
    this.getManufacturers();
  }
  handleOk(): void {
    this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
     this.ApiService.upDateBase(this.validateForm.value).then((res:any)=>{
       this.isVisible = false;
       this.GetBaseInfo()
     })
  }
}
