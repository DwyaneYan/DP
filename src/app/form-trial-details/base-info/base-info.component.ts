import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  @Input() materialId:string;
  //材料基本信息
  public baseInfo = [] //材料基本信息数组，数组元素只有一个对象
  @Output()checkvalue = new EventEmitter<any>();//材料名称传给路由出口组件
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
  
  constructor(
    public http: HttpClient,
    private ApiService: ApiService,
    private fb: FormBuilder
  ) { }

 ngOnInit() {
    this.GetBaseInfo();

  }
//根据材料id查询材料基本信息
async GetBaseInfo(){
    let params= {
      Id: this.materialId, 
    }
    await this.ApiService.GetMater(params).then((res:any)=>{
      this.baseInfo = res.items;
      this.checkvalue.emit(this.baseInfo[0].name);  
      this.validateForm = this.fb.group({
        name: [this.baseInfo[0].name],
        reelNumber: [this.baseInfo[0].reelNumber],
        model: [this.baseInfo[0].model],
        manufactoryId: [this.baseInfo[0].manufactoryId],
        materialStandard: [this.baseInfo[0].materialStandard],
        id:[this.materialId]
        });  
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
