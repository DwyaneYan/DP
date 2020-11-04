import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
// import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
// import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service'
//组件的方法在其他组件中调用，即把组件当作服务使用进行注册提供者
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.css']
})
export class FormAddCarComponent implements OnInit {
  @Input() isVisible   //父组件（菜单栏组件）传给子组件的值
  @Input() materialId
  @Output() private outer=new EventEmitter<string>();  //自定义事件名，添加新车型后触发，在父组件中监听
  @Output() private outer1=new EventEmitter<string>();  //自定义事件名，点击关闭弹框时触发，在父组件中监听
  submitFail = true
  nzFileList=[]  //上传图片列表
  nzFileList1=[] //上传文件列表
  carid = ''//添加的车型id
  maUrl = ''//图片上传地址
  maUrl1 = '' //文件上传地址 
  formData =new FormData();
  formDataList = []
  returnFalse = false
 //车型表单
  profileForm = this.fb.group({
    vehicleType: ['', Validators.required],
    breif: [''],
    suppliedPart: [''],
    requirement: [''],
  });

  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    public ApiService: ApiService,
    private msg: NzMessageService ) { 

    }
  ngOnInit() {

  }
  //关闭添加车型弹框
  handleCancel(): void {
  this.profileForm.reset();//关闭后重置表单
  this.isVisible = false;  //isVisible由父组件传过来，重新赋值后又传回父组件
  this.outer1.emit(this.isVisible);
  this.nzFileList = [];
  this.nzFileList1 = [];
  this.submitFail = true;
}


    //提交表单
submitForm(): void {
  for (const i in this.profileForm.controls) {
    this.profileForm.controls[i].markAsDirty();
    this.profileForm.controls[i].updateValueAndValidity();
  }
  if(this.profileForm.valid){
    this.ApiService.viewCar(this.materialId,this.profileForm.value.vehicleType).then((res: any) => {
    //没有这个车型就添加
      if(res.length==0){
        this.profileForm.value.materialId = this.materialId;
        this.ApiService.addCar(this.profileForm.value).then((res: any) => {
          this.carid = res;
          this.submitFail = false; //先提交车型才能上传图片和文件
          this.maUrl=`/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.carid}`
          this.maUrl1=`/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.carid}`
          this.msg.info('车型添加成功')
          this.outer.emit()
        })
      }
 //车型存在就不再添加
      else{
        this.msg.info('车型已存在，请添加其他车型')
      }
    })
  }
}
//重置表单
resetForm(e: MouseEvent): void {
  e.preventDefault(); //不这样点击重置也会提交表单
  this.profileForm.reset();
}

}
